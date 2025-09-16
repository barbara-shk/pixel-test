"use client";

import { LoadMoreButtonsProps } from "./types";

export function LoadMoreButtons({
  remaining,
  showMoreIncrement,
  onShowMore,
  onShowAll,
}: LoadMoreButtonsProps) {
  if (remaining <= 0) return null;

  return (
    <div className="mt-8 flex justify-center gap-4">
      <button
        onClick={onShowMore}
        className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Show {Math.min(remaining, showMoreIncrement)} More
      </button>

      {remaining > showMoreIncrement && (
        <button
          onClick={onShowAll}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Show All ({remaining} remaining)
        </button>
      )}
    </div>
  );
}
