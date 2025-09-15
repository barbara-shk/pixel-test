import { apolloClient } from "@/src/lib/apollo-client";
import { GET_TASK_LIST } from "@/src/lib/graphql/queries";
import { GetTaskListQuery } from "../lib/generated/graphql";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";

async function getTasks() {
  try {
    const { data } = await apolloClient.query<GetTaskListQuery>({
      query: GET_TASK_LIST,
      fetchPolicy: "no-cache",
    });
    return data?.taskList || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export default async function HomePage() {
  const tasks = await getTasks();

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