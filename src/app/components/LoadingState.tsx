
interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ 
  message = "Loading..." 
}: LoadingStateProps) {
  return (
    <div 
      className="text-center py-12"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div 
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
        aria-hidden="true"
      ></div>
      <p className="text-gray-500 sr-only">
        {message}
      </p>
      <p className="text-gray-500" aria-hidden="true">
        {message}
      </p>
    </div>
  );
}