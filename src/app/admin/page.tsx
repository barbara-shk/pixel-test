 import { getUserTasks } from "@/src/lib/graphql/queries"; 
import { TaskCard } from "../components/TaskCard";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";


export default async function AdminPage() {
  const { userTasks, error } = await getUserTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50"> 
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

          {error && <ErrorState title="Error" message={error} />}

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