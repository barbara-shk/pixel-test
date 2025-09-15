import { EnumTaskStatus, Task } from "@/src/lib/generated/graphql";

const statusConfig = {
  [EnumTaskStatus.New]: {
    bg: "bg-gradient-to-r from-emerald-50 to-emerald-100",
    text: "text-emerald-800",
    border: "border-l-emerald-500", 
    label: "NEW",
  },
  [EnumTaskStatus.OfferAccepted]: {
    bg: "bg-gradient-to-r from-amber-50 to-orange-100",
    text: "text-amber-800",
    border: "border-l-amber-500", 
    label: "ACCEPTED",
  },
  [EnumTaskStatus.Completed]: {
    bg: "bg-gradient-to-r from-blue-50 to-cyan-100",
    text: "text-blue-800",
    border: "border-l-blue-500", 
    label: "DONE",
  },
};



export const TaskCard = ({ task }: { task: Task }) => {
  const statusStyle = statusConfig[task.status as keyof typeof statusConfig] || statusConfig[EnumTaskStatus.New];
  
  return (
    <article 
      className={`group relative bg-white rounded-xl border-l-4 ${statusStyle.border} shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2`}
      aria-labelledby={`task-title-${task._id}`}
      role="article"
    > 
      <div className={`h-1 ${statusStyle.bg}`} aria-hidden="true" />
      
      <div className="p-6"> 
        <div className="flex justify-between items-start mb-4">
          <div 
            className={`${statusStyle.bg} ${statusStyle.text} px-3 py-1.5 rounded-lg text-sm font-semibold inline-flex items-center space-x-2 shadow-sm`}
            role="status"
            aria-label={`Task status: ${statusStyle.label}`}
          > 
            <span aria-hidden="true">{statusStyle.label}</span>
          </div>
          
          {task.is_remote && (
            <div 
              className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1"
              role="status"
              aria-label="Remote work available"
            >
              <span aria-hidden="true">🌍</span>
              <span>Remote</span>
            </div>
          )}
        </div>
 
        <h3 
          id={`task-title-${task._id}`}
          className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors"
        >
          {task.title}
        </h3>
 
        {task.description && (
          <p 
            className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3"
            aria-label={`Task description: ${task.description}`}
          >
            {task.description}
          </p>
        )}
 
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div 
            className="flex items-center space-x-4"
            role="group" 
            aria-label="Task engagement statistics"
          >
            <div className="flex items-center space-x-1 text-gray-600">
              <div className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
              <span className="text-sm font-medium" aria-label={`${task.number_of_offers} offers received`}>
                {task.number_of_offers}
              </span>
              <span className="text-xs text-gray-500" aria-hidden="true">offers</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-600">
              <div className="w-2 h-2 bg-pink-400 rounded-full" aria-hidden="true"></div>
              <span className="text-sm font-medium" aria-label={`${task.number_of_likes} likes received`}>
                {task.number_of_likes}
              </span>
              <span className="text-xs text-gray-500" aria-hidden="true">likes</span>
            </div>
          </div>

          {task.human_friendly_end_date && (
            <div className="text-right" role="group" aria-label="Task deadline">
              <div className="text-xs text-gray-500" aria-hidden="true">Ends</div>
              <div 
                className="text-sm font-semibold text-gray-800"
                aria-label={`Deadline: ${task.human_friendly_end_date}`}
              >
                {task.human_friendly_end_date}
              </div>
            </div>
          )}
        </div>
 
        {task.createdAt && (
          <div className="mt-3 pt-2 border-t border-gray-50">
            <div 
              className="text-xs text-gray-400 flex items-center space-x-1"
              role="group"
              aria-label={`Task created on ${new Date(task.createdAt).toLocaleDateString()}`}
            > 
              <span>Created {new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
 
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
    </article>
  );
};