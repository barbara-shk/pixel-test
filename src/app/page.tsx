import { apolloClient } from '@/lib/apollo-client';
import { GET_TASK_LIST } from '@/lib/graphql/queries';
import { GetTaskListQuery, Task } from '../../lib/generated/graphql';

 
const statusConfig = {
  NEW: { bg: 'bg-emerald-100', text: 'text-emerald-700', emoji: '🆕', label: "NEW" },
  OFFER_ACCEPTED: { bg: 'bg-amber-100', text: 'text-amber-700', emoji: '⚡', label: "OFFER ACCEPTED" },
  COMPLETED: { bg: 'bg-blue-100', text: 'text-blue-700', emoji: '✅', label: "COMPLETED" }
};

async function getTasks() {
  try {
    const { data } = await apolloClient.query<GetTaskListQuery>({
      query: GET_TASK_LIST,
      fetchPolicy: 'no-cache',  
    });
    return data?.taskList || [];
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
}


export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
 
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Latest Tasks
          </h3>
          <div className="text-sm text-gray-500">
            {tasks.length} available
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task: Task) => {
            const statusStyle = statusConfig[task.status as keyof typeof statusConfig];
            return (
              <div 
                key={task._id} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2"> 
                    <span className={`${statusStyle.bg} ${statusStyle.text} px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1`}>
                      <span>{statusStyle.emoji}</span>
                      <span>{statusStyle.label}</span>
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {task.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {task.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1"> 
                      <span>{task.number_of_offers} offers</span>
                    </span>
                    <span className="flex items-center space-x-1"> 
                      <span>{task.number_of_likes} likes</span>
                    </span>
                  </div>
                  <span className="text-sm font-medium text-indigo-600">
                    {task.human_friendly_end_date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}