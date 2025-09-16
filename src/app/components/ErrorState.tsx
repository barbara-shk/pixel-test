interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message = "Please try again later",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="text-center py-12" role="alert" aria-live="assertive">
      <h2 className="text-lg font-medium text-red-700 mb-2">
        <span className="sr-only">Error occurred: </span>
        {title}
      </h2>
      <p className="text-gray-500 mb-4" id="error-description">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-describedby="error-description"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
