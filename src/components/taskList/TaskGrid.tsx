"use client";

import { type Task, EnumTaskStatus } from "@/src/lib/generated/graphql";
import { TaskCard } from "./TaskCard";

interface TaskGridProps {
  tasks: Task[];
  onStatusClick: (status: EnumTaskStatus) => void;
}

export function TaskGrid({ tasks, onStatusClick }: TaskGridProps) {
  return (
    <ul
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-label={`${tasks.length} tasks displayed`}
    >
      {tasks.map((task) => (
        <li key={task._id ?? `${task.status}-${Math.random()}`}>
          <TaskCard 
            task={task} 
            onStatusClick={onStatusClick}
          />
        </li>
      ))}
    </ul>
  );
}