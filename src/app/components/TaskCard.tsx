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

const getTimeLeftColor = (timeLeft?: string) => {
  if (!timeLeft) return "text-gray-500";
   
  if (timeLeft.includes("hour") || /^[1-2]\s*day/.test(timeLeft)) {
    return "text-red-600 animate-pulse";
  }
  
  if (timeLeft.includes("week") || /^[3-7]\s*day/.test(timeLeft)) {
    return "text-amber-600";
  }
  
  return "text-green-600";
};

export const TaskCard = ({ task }: { task: Task }) => {
  const statusStyle = statusConfig[task.status as keyof typeof statusConfig] || statusConfig.NEW;
  
  return (
    <div className="group relative bg-white rounded-xl border-l-4 ${statusStyle.border} shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"> 
      <div className={`h-1 ${statusStyle.bg}`} />
      
      <div className="p-6"> 
        <div className="flex justify-between items-start mb-4">
          <div className={`${statusStyle.bg} ${statusStyle.text} px-3 py-1.5 rounded-lg text-sm font-semibold inline-flex items-center space-x-2 shadow-sm`}> 
            <span>{statusStyle.label}</span>
          </div>
          
          {task.is_remote && (
            <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
              <span>🌍</span>
              <span>Remote</span>
            </div>
          )}
        </div>
 
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors">
          {task.title}
        </h3>
 
        {task.description && (
          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
            {task.description}
          </p>
        )} 
        <div className="flex items-center gap-3 mb-4">
          {task.type && (
            <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-xs font-medium border border-indigo-200">
              {task.type === "EXPRESS" ? "⚡ EXPRESS" : task.type.replace("_", " ")}
            </span>
          )}
          
          {task.time_left && (
            <div className={`text-xs font-semibold flex items-center space-x-1 ${getTimeLeftColor(task.time_left)}`}>
              <span>⏳</span>
              <span>{task.time_left}</span>
            </div>
          )}
        </div>
 
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">{task.number_of_offers}</span>
              <span className="text-xs text-gray-500">offers</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-600">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-sm font-medium">{task.number_of_likes}</span>
              <span className="text-xs text-gray-500">likes</span>
            </div>
          </div>

          {task.human_friendly_end_date && (
            <div className="text-right">
              <div className="text-xs text-gray-500">Ends</div>
              <div className="text-sm font-semibold text-gray-800">
                {task.human_friendly_end_date}
              </div>
            </div>
          )}
        </div>
 
        {task.createdAt && (
          <div className="mt-3 pt-2 border-t border-gray-50">
            <div className="text-xs text-gray-400 flex items-center space-x-1"> 
              <span>Created {new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
 
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};