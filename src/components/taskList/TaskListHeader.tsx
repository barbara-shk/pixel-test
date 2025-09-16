"use client";

import { useId } from "react";
import { type Task } from "@/src/lib/generated/graphql"; 
import { SortBy } from "./types";

interface TaskListHeaderProps {
  title: string;
  taskCountText: string;
  showCount: boolean;
  tasksLength: number;
  sortBy: SortBy;
  onSortChange: (sortBy: SortBy) => void;
}

export function TaskListHeader({
  title,
  taskCountText,
  showCount,
  tasksLength,
  sortBy,
  onSortChange,
}: TaskListHeaderProps) {
  const selectId = useId();

  return (
    <div className="flex items-center justify-between mb-4">
      <h3
        id="task-list-heading"
        className="text-2xl font-semibold text-gray-800"
      >
        {title}
      </h3>

      <div className="flex items-center gap-4">
        {showCount && (
          <div className="text-sm text-gray-500" aria-live="polite">
            {taskCountText}
          </div>
        )}

        {tasksLength > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor={selectId} className="sr-only">
              Sort tasks by
            </label>
            <select
              id={selectId}
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortBy)}
              className="rounded px-3 py-1 text-sm text-gray-700 outline-none ring-indigo-500 focus:ring-2 border border-gray-300"
            >
              <option value="default">Default order</option>
              <option value="status-az">Status A to Z</option>
              <option value="status-za">Status Z to A</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}