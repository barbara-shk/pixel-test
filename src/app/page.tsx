import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { getTaskList } from "@/src/lib/graphql/queries";

export default async function HomePage() {
  const tasks = await getTaskList();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <TaskList
          tasks={tasks}
          title="Latest Tasks"
          showCount={true}
          emptyMessage="No public tasks available at the moment"
        />
      </main>
    </div>
  );
}
