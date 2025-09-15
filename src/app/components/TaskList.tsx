"use client";

import { useState, useMemo } from "react";
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
  const [sortBy, setSortBy] = useState<string>("default");

  const sortedTasks = useMemo(() => {
    if (sortBy === "status-az") {
      return [...tasks].sort((a, b) => (a.status || "").localeCompare(b.status || ""));
    }
    if (sortBy === "status-za") {
      return [...tasks].sort((a, b) => (b.status || "").localeCompare(a.status || ""));
    }
    return tasks;  
  }, [tasks, sortBy]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center gap-4">
          {showCount && (
            <div className="text-sm text-gray-500">
              {tasks.length} available
            </div>
          )}
          {tasks.length > 0 && (
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            >
              <option value="default">Default</option>
              <option value="status-az">Status A-Z</option>
              <option value="status-za">Status Z-A</option>
            </select>
          )}
        </div>
      </div>

      {sortedTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTasks.map((task: Task) => (
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