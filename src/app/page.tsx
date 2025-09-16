import { ErrorState } from "@/src/components/ui/ErrorState";
import { EmptyState } from "@/src/components/ui/EmptyState";
import { getTaskList } from "@/src/lib/graphql/queries";
import { TaskList } from "../components/taskList";

export default async function HomePage() {
  try {
    const tasks = await getTaskList();

    if (!tasks || tasks.length === 0) {
      return (
        <EmptyState
          title="No Tasks Available"
          description="No public tasks available at the moment"
          icon="📝"
        />
      );
    }

    return <TaskList tasks={tasks} title="Latest Tasks" showCount={true} />;
  } catch (error) {
    return (
      <ErrorState
        title="Failed to Load Tasks"
        message="Unable to fetch tasks from the server. Please try again later."
      />
    );
  }
}
