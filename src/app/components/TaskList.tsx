import { Task } from "@/src/lib/generated/graphql";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  title?: string;
  showCount?: boolean;
  emptyMessage?: string;
}

export function TaskList({ 
  tasks, 
  title = "Tasks", 
  showCount = true,
  emptyMessage = "No tasks available"
}: TaskListProps) {
  return (
    <div> 
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        {showCount && (
          <div className="text-sm text-gray-500">
            {tasks.length} available
          </div>
        )}
      </div>
 
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task: Task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">{emptyMessage}</div>
        </div>
      )}
    </div>
  );
}