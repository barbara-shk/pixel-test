interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
}

export function EmptyState({
  title,
  description,
  icon = "📝",
}: EmptyStateProps) {
  return (
    <div 
      className="text-center py-12"
      role="status"
      aria-live="polite"
    >
      <div 
        className="text-6xl mb-4 opacity-50"
        role="img"
        aria-label={`${icon} Empty state icon`}
      >
        {icon}
      </div>
      <h2 className="text-lg font-medium text-gray-700 mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500" id="empty-description">
          {description}
        </p>
      )}
    </div>
  );
}
