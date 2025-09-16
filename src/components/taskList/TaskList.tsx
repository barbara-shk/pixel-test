"use client";

import { statusConfig } from "./TaskCard";
import { useTaskFiltering } from "../hooks/useTaskFiltering";
import { TaskListHeader } from "./TaskListHeader";
import { StatusFilterButtons } from "./StatusFilterButtons";
import { TaskGrid } from "./TaskGrid";
import { LoadMoreButtons } from "./LoadMoreButtons";
import type { TaskListProps } from "./types";
import { EmptyState } from "../ui/EmptyState";

export function TaskList({
  tasks,
  title = "Tasks",
  showCount = true,
  emptyMessage = "No tasks available",
}: TaskListProps) {
  const {
    selectedStatus,
    sortBy,
    setSortBy,
    statusCounts,
    availableStatuses,
    visibleTasks,
    totalFiltered,
    remainingCount,
    handleStatusFilter,
    handleShowMore,
    handleShowAll,
  } = useTaskFiltering(tasks);

  // Create the accessible count text for the header
  const taskCountText = selectedStatus
    ? `${totalFiltered} task${totalFiltered === 1 ? "" : "s"} with status "${statusConfig[selectedStatus].label}"`
    : `${tasks.length} task${tasks.length === 1 ? "" : "s"} available`;

  return (
    <section role="region" aria-labelledby="task-list-heading">
      <div className="mb-6">
        <TaskListHeader
          title={title}
          taskCountText={taskCountText}
          showCount={showCount}
          tasksLength={tasks.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <StatusFilterButtons
          availableStatuses={availableStatuses}
          statusCounts={statusCounts}
          selectedStatus={selectedStatus}
          totalTasks={tasks.length}
          onStatusFilter={handleStatusFilter}
        />
      </div>

      {totalFiltered > 0 ? (
        <>
          <TaskGrid tasks={visibleTasks} onStatusClick={handleStatusFilter} />

          <LoadMoreButtons
            remaining={remainingCount}
            showMoreIncrement={20}
            onShowMore={handleShowMore}
            onShowAll={handleShowAll}
          />
        </>
      ) : (
        <EmptyState title={title} description={emptyMessage} />
      )}
    </section>
  );
}
