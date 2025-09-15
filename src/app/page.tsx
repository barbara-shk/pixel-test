import { apolloClient } from "@/lib/apollo-client";
import { GET_TASK_LIST } from "@/lib/graphql/queries";
import { GetTaskListQuery, Task } from "../../lib/generated/graphql";
import { TaskCard } from "./components/TaskCard";
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
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Latest Tasks</h3>
          <div className="text-sm text-gray-500">{tasks.length} available</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task: Task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </main>
    </div>
  );
}