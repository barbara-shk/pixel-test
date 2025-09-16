"use client";

import { useMemo, useId, useState } from "react";
import type { Task } from "@/src/lib/generated/graphql";
import { TaskCard } from "./TaskCard";

type SortBy = "default" | "status-az" | "status-za";

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
  emptyMessage = "No tasks available",
}: TaskListProps) {
  const selectId = useId();
  const [sortBy, setSortBy] = useState<SortBy>("default");
  const [displayCount, setDisplayCount] = useState(20);

  const comparators: Record<
    Exclude<SortBy, "default">,
    (a: Task, b: Task) => number
  > = {
    "status-az": (a, b) =>
      (a.status ?? "").localeCompare(b.status ?? "", undefined, {
        sensitivity: "base",
      }),
    "status-za": (a, b) =>
      (b.status ?? "").localeCompare(a.status ?? "", undefined, {
        sensitivity: "base",
      }),
  };

  const sortedTasks = useMemo(() => {
    if (sortBy === "default") return tasks;
    return [...tasks].sort(comparators[sortBy]);
  }, [tasks, sortBy]);

  const visibleTasks = sortedTasks.slice(0, displayCount);
  const remaining = sortedTasks.length - displayCount;
  const showMoreIncrement = 20;

  const taskCountText = `${tasks.length} task${tasks.length === 1 ? "" : "s"} available`;

  return (
    <section role="region" aria-labelledby="task-list-heading">
      <div className="mb-8 flex items-center justify-between">
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

          {tasks.length > 0 && (
            <div className="flex items-center gap-2">
              <label htmlFor={selectId} className="sr-only">
                Sort tasks by
              </label>
              <select
                id={selectId}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
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

      {sortedTasks.length > 0 ? (
        <>
          <ul
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-label={`${visibleTasks.length} tasks displayed`}
          >
            {visibleTasks.map((task) => (
              <li key={(task as any)._id ?? `${task.status}-${Math.random()}`}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>

          {remaining > 0 && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() =>
                  setDisplayCount((prev) => prev + showMoreIncrement)
                }
                className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Show {Math.min(remaining, showMoreIncrement)} More
              </button>

              {remaining > showMoreIncrement && (
                <button
                  onClick={() => setDisplayCount(sortedTasks.length)}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Show All ({remaining} remaining)
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="py-12 text-center" role="status" aria-live="polite">
          <div className="text-lg text-gray-500">{emptyMessage}</div>
        </div>
      )}
    </section>
  );
}
