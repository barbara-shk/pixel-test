import { apolloClient } from "@/src/lib/apollo-client";
import { GetUserTasksQuery, Task } from "@/src/lib/generated/graphql";
import { GET_USER_TASKS } from "@/src/lib/graphql/queries";
import { Header } from "../components/Header";
import { cookies } from "next/headers";
import { TaskCard } from "../components/TaskCard";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";

async function getUserTasks(): Promise<{ userTasks: Task[]; error?: string }> {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token");

    if (!authToken) {
      return { userTasks: [], error: "Not authenticated" };
    }

    const { data } = await apolloClient.query<GetUserTasksQuery>({
      query: GET_USER_TASKS,
      context: {
        headers: {
          Cookie: `auth-token=${authToken}`,
        },
      },
      fetchPolicy: "no-cache",
    });

    const tasks = data?.getUserTasks?.filter(Boolean) || [];
    return { userTasks: tasks as Task[] };
  } catch (error) {
    console.error("Error fetching user tasks:", error);
    return { userTasks: [], error: "Failed to load tasks" };
  }
}

export default async function AdminPage() {
  const { userTasks, error } = await getUserTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage your personal tasks</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">My Tasks</h2>
            <div className="text-sm text-gray-500">
              {userTasks.length} tasks
            </div>
          </div>

          {error && <ErrorState title="Failed to load tasks" message={error} />}

          {!error && userTasks.length === 0 && (
            <EmptyState
              title="No tasks found"
              description="You haven't created any tasks yet"
              icon="📝"
            />
          )}

          {userTasks.length > 0 && (
            <div className="space-y-4">
              {userTasks?.map((task) => {
                if (!task) return null;
                return <TaskCard key={task._id} task={task} />;
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
