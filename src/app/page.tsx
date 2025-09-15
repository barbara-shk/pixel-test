import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { EmptyState } from "./components/EmptyState";
import { getTaskList } from "@/src/lib/graphql/queries";

export default async function HomePage() {
  try {
    const tasks = await getTaskList();
 
    if (!tasks || tasks.length === 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <Header />
          <main className="max-w-7xl mx-auto px-4 py-8">
            <EmptyState 
              title="No Tasks Available"
              description="No public tasks available at the moment"
              icon="📝"
            />
          </main>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <TaskList
            tasks={tasks}
            title="Latest Tasks"
            showCount={true}
          />
        </main>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <ErrorState 
            title="Failed to Load Tasks"
            message="Unable to fetch tasks from the server. Please try again later." 
          />
        </main>
      </div>
    );
  }
}