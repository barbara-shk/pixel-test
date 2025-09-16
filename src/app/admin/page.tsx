import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserTasks } from "@/src/lib/graphql/queries";
import { TaskCard } from "@/src/components/ui/TaskCard";
import { EmptyState } from "@/src/components/ui/EmptyState";
import { ErrorState } from "@/src/components/ui/ErrorState";

export default async function AdminPage() { 
  const cookieStore = await cookies(); 
  const authToken = cookieStore.get("auth-token");
 
  if (!authToken) {
    redirect("/login");
  }

  try { 
    const userId = authToken.value; 
     
    const userTasks = await getUserTasks(userId); 

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
            <div className="text-sm text-gray-500">
              {userTasks.length} task{userTasks.length === 1 ? "" : "s"}
            </div>
          </div>

          {userTasks.length === 0 ? (
            <EmptyState
              title="No tasks found"
              description="You haven't created any tasks yet"
              icon="📝"
            />
          ) : (
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
  } catch (error) {
    console.error("Error in admin page:", error); 
    if (error instanceof Error && 
        (error.message.includes("You must be logged") || 
         error.message.includes("Authentication required"))) {
      redirect("/login");
    }

    return (
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage your personal tasks</p>
        </div>
        
        <ErrorState 
          title="Failed to Load Tasks" 
          message="Unable to fetch your tasks. Please try refreshing the page." 
        />
      </div>
    );
  }
}