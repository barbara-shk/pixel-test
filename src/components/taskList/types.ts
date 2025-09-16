import { EnumTaskStatus, Task } from "@/src/lib/generated/graphql";

export type SortBy = "default" | "status-az" | "status-za";

export interface TaskListProps {
  tasks: Task[];
  title?: string;
  showCount?: boolean;
  emptyMessage?: string;
}

export interface TaskListHeaderProps {
  title: string;
  taskCountText: string;
  showCount: boolean;
  tasksLength: number;
  sortBy: SortBy;
  onSortChange: (sortBy: SortBy) => void;
}
export interface TaskGridProps {
  tasks: Task[];
  onStatusClick: (status: EnumTaskStatus) => void;
}
export interface StatusFilterButtonsProps {
  availableStatuses: EnumTaskStatus[];
  statusCounts: Record<EnumTaskStatus, number>;
  selectedStatus: EnumTaskStatus | null;
  totalTasks: number;
  onStatusFilter: (status: EnumTaskStatus | null) => void;
}
export interface LoadMoreButtonsProps {
  remaining: number;
  showMoreIncrement: number;
  onShowMore: () => void;
  onShowAll: () => void;
}
