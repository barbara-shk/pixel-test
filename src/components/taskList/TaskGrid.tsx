"use client";

import { TaskCard } from "./TaskCard";
import { TaskGridProps } from "./types";

export function TaskGrid({ tasks, onStatusClick }: TaskGridProps) {
  return (
    <ul
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-label={`${tasks.length} tasks displayed`}
    >
      {tasks.map((task) => (
        <li key={task._id ?? `${task.status}-${Math.random()}`}>
          <TaskCard task={task} onStatusClick={onStatusClick} />
        </li>
      ))}
    </ul>
  );
}
