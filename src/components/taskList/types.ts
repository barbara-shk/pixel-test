import { Task } from "@/src/lib/generated/graphql";

export type SortBy = "default" | "status-az" | "status-za";

export interface TaskListProps {
  tasks: Task[];
  title?: string;
  showCount?: boolean;
  emptyMessage?: string;
}
