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
    <div className="text-center py-12">
      <div className="text-6xl mb-4 opacity-50">{icon}</div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  );
}
