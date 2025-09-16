"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthProvider";
import { TaskCard } from "../components/TaskCard";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import type { Task } from "@/src/lib/generated/graphql";
import { getUserTasks } from "@/src/lib/graphql/queries";

export default function AdminPage() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [userTasks, setUserTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserTasks() {
      if (!isAuthenticated) return;

      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("No authentication token found");
          return;
        }

        const result = await getUserTasks(token);

        if (result.error) {
          setError(result.error);
        } else {
          setUserTasks(result.userTasks);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchUserTasks();
  }, [isAuthenticated]);

  // Show loading while checking authentication
  if (authLoading) {
    return <LoadingState message="Checking authentication..." />;
  }

  // This shouldn't render due to redirect in AuthProvider, but safety check
  if (!isAuthenticated) {
    return null;
  }

  // Show loading while fetching tasks
  if (loading) {
    return <LoadingState message="Loading your tasks..." />;
  }

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Manage your personal tasks</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">My Tasks</h2>
          {!error && (
            <div className="text-sm text-gray-500">
              {userTasks.length} task{userTasks.length === 1 ? "" : "s"}
            </div>
          )}
        </div>

        {error && <ErrorState title="Failed to Load Tasks" message={error} />}

        {!error && userTasks.length === 0 && (
          <EmptyState
            title="No tasks found"
            description="You haven't created any tasks yet"
            icon="📝"
          />
        )}

        {!error && userTasks.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {userTasks.map((task) => {
              if (!task) return null;
              return (
                <TaskCard
                  key={task._id || `task-${Math.random()}`}
                  task={task}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
