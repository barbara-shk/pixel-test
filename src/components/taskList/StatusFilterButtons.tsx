"use client";

import { EnumTaskStatus } from "@/src/lib/generated/graphql"; 
import { statusConfig } from "./TaskCard";

interface StatusFilterButtonsProps {
  availableStatuses: EnumTaskStatus[];
  statusCounts: Record<EnumTaskStatus, number>;
  selectedStatus: EnumTaskStatus | null;
  totalTasks: number;
  onStatusFilter: (status: EnumTaskStatus | null) => void;
}

export function StatusFilterButtons({
  availableStatuses,
  statusCounts,
  selectedStatus,
  totalTasks,
  onStatusFilter,
}: StatusFilterButtonsProps) {
  if (availableStatuses.length <= 1) return null;

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter tasks by status">
      <button
        onClick={() => onStatusFilter(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedStatus === null
            ? 'bg-gray-800 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
        }`}
        aria-pressed={selectedStatus === null}
      >
        All Tasks ({totalTasks})
      </button>
      
      {availableStatuses.map((status) => {
        const config = statusConfig[status];
        const count = statusCounts[status];
        const isSelected = selectedStatus === status;
        
        return (
          <button
            key={status}
            onClick={() => onStatusFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-2 ${
              isSelected
                ? `${config.bg} ${config.text} ${config.border} shadow-md`
                : `bg-white ${config.text} ${config.border} border-opacity-30 hover:${config.bg} hover:shadow-sm`
            }`}
            aria-pressed={isSelected}
          >
            {config.label} ({count})
          </button>
        );
      })}
    </div>
  );
}