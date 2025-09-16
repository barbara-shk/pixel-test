/**
 * useTaskFiltering Hook
 *
 * Manages filtering, sorting, and pagination for a list of tasks.
 *
 * Flow:
 * 1. Filter tasks by selected status (or show all if no filter)
 * 2. Sort the filtered tasks by status (A-Z, Z-A, or default order)
 * 3. Apply pagination to show limited number of tasks
 * 4. Automatically reset pagination when filter/sort changes
 *
 * @param tasks - Array of tasks to process
 * @returns Object with filtered/sorted/paginated results and control functions
 */

"use client";

import { useMemo, useState, useEffect } from "react";
import { EnumTaskStatus, type Task } from "@/src/lib/generated/graphql";
import type { SortBy } from "../taskList/types";

export function useTaskFiltering(tasks: Task[]) {
  const [selectedStatus, setSelectedStatus] = useState<EnumTaskStatus | null>(
    null,
  );
  const [sortBy, setSortBy] = useState<SortBy>("default");
  const [displayCount, setDisplayCount] = useState(20);

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    tasks.forEach((task) => {
      if (task.status) {
        counts[task.status] = (counts[task.status] || 0) + 1;
      }
    });

    return counts as Record<EnumTaskStatus, number>;
  }, [tasks]);

  const availableStatuses = Object.keys(statusCounts) as EnumTaskStatus[];

  const filteredTasks = useMemo(() => {
    if (!selectedStatus) return tasks;
    return tasks.filter((task) => task.status === selectedStatus);
  }, [tasks, selectedStatus]);

  // Sort the tasks
  const sortedTasks = useMemo(() => {
    if (sortBy === "default") return filteredTasks;

    return [...filteredTasks].sort((a, b) => {
      const statusA = a.status ?? "";
      const statusB = b.status ?? "";

      if (sortBy === "status-az") {
        return statusA.localeCompare(statusB, undefined, {
          sensitivity: "base",
        });
      }

      if (sortBy === "status-za") {
        return statusB.localeCompare(statusA, undefined, {
          sensitivity: "base",
        });
      }

      return 0;
    });
  }, [filteredTasks, sortBy]);

  // Paginate the tasks
  const visibleTasks = sortedTasks.slice(0, displayCount);
  const remainingCount = Math.max(0, sortedTasks.length - displayCount);

  useEffect(() => {
    setDisplayCount(20);
  }, [selectedStatus, sortBy]);

  const handleStatusFilter = (status: EnumTaskStatus | null) => {
    setSelectedStatus(status);
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 20);
  };

  const handleShowAll = () => {
    setDisplayCount(sortedTasks.length);
  };

  return {
    selectedStatus,
    sortBy,
    setSortBy,
    statusCounts,
    availableStatuses,
    visibleTasks,
    totalFiltered: sortedTasks.length,
    remainingCount,
    handleStatusFilter,
    handleShowMore,
    handleShowAll,
  };
}
