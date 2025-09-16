import { EnumTaskStatus, Task } from "@/src/lib/generated/graphql";

export const statusConfig = {
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
    label: "OFFER ACCEPTED",
  },
  [EnumTaskStatus.Completed]: {
    bg: "bg-gradient-to-r from-blue-50 to-cyan-100",
    text: "text-blue-800",
    border: "border-l-blue-500",
    label: "COMPLETED",
  },
} as const;

const UNKNOWN_STATUS_STYLE = {
  bg: "bg-gray-50",
  text: "text-gray-700",
  border: "border-l-gray-400",
  label: "UNKNOWN",
} as const;

const StatusBadge = ({
  status,
  onStatusClick,
}: {
  status?: EnumTaskStatus;
  onStatusClick?: (status: EnumTaskStatus) => void;
}) => {
  const statusStyle = status ? statusConfig[status] : UNKNOWN_STATUS_STYLE;
  const isClickable = status && onStatusClick;

  const badgeContent = (
    <>
      <span className="sr-only">Task status: </span>
      <span aria-hidden="false">{statusStyle.label}</span>
    </>
  );

  const baseClasses = `${statusStyle.bg} ${statusStyle.text} px-3 py-1.5 rounded-lg text-sm font-semibold inline-flex items-center space-x-2 shadow-sm`;

  if (isClickable) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onStatusClick(status);
        }}
        className={`${baseClasses} transition-all duration-200 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer`}
        title={`Filter by ${statusStyle.label} status`}
        aria-label={`Filter tasks by ${statusStyle.label} status`}
      >
        {badgeContent}
      </button>
    );
  }

  return <div className={baseClasses}>{badgeContent}</div>;
};

const RemoteBadge = () => (
  <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
    <span aria-hidden="true">🌍</span>
    <span>Remote</span>
  </div>
);

const TaskHeader = ({
  status,
  isRemote,
  onStatusClick,
}: {
  status?: EnumTaskStatus;
  isRemote?: Task["is_remote"];
  onStatusClick?: (status: EnumTaskStatus) => void;
}) => (
  <div className="flex justify-between items-start mb-4">
    <StatusBadge status={status} onStatusClick={onStatusClick} />
    {isRemote && <RemoteBadge />}
  </div>
);

const TaskTitle = ({
  title,
  taskId,
}: {
  title: Task["title"];
  taskId: Task["_id"];
}) => (
  <h3
    id={`task-title-${taskId}`}
    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors"
  >
    {title}
  </h3>
);

const TaskDescription = ({
  description,
}: {
  description?: Task["description"];
}) => {
  if (!description) return null;

  return (
    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
      {description}
    </p>
  );
};

const TaskStats = ({
  offers,
  likes,
}: {
  offers?: Task["number_of_offers"];
  likes?: Task["number_of_likes"];
}) => (
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-1 text-gray-600">
      <div className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true" />
      <span className="text-sm font-medium">{offers ?? 0}</span>
      <span className="text-xs text-gray-500" aria-hidden="true">
        offers
      </span>
    </div>

    <div className="flex items-center space-x-1 text-gray-600">
      <div className="w-2 h-2 bg-pink-400 rounded-full" aria-hidden="true" />
      <span className="text-sm font-medium">{likes ?? 0}</span>
      <span className="text-xs text-gray-500" aria-hidden="true">
        likes
      </span>
    </div>
  </div>
);

const TaskDeadline = ({
  endDate,
}: {
  endDate?: Task["human_friendly_end_date"];
}) => {
  if (!endDate) return null;

  return (
    <div className="text-right">
      <div className="text-xs text-gray-500" aria-hidden="true">
        Ends
      </div>
      <div className="text-sm font-semibold text-gray-800">{endDate}</div>
    </div>
  );
};

const TaskFooter = ({
  offers,
  likes,
  endDate,
}: {
  offers?: Task["number_of_offers"];
  likes?: Task["number_of_likes"];
  endDate?: Task["human_friendly_end_date"];
}) => (
  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
    <TaskStats offers={offers} likes={likes} />
    <TaskDeadline endDate={endDate ?? undefined} />
  </div>
);

const TaskMeta = ({ createdAt }: { createdAt?: Task["createdAt"] }) => {
  if (!createdAt) return null;
  const d = new Date(createdAt);
  if (Number.isNaN(d.getTime())) return null;

  const formattedDate = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/London",
  });

  return (
    <div className="mt-3 pt-2 border-t border-gray-50">
      <p className="text-xs text-gray-400">
        Created <time dateTime={d.toISOString()}>{formattedDate}</time>
      </p>
    </div>
  );
};

export const TaskCard = ({
  task,
  onStatusClick,
}: {
  task: Task;
  onStatusClick?: (status: EnumTaskStatus) => void;
}) => {
  const statusStyle = task.status
    ? statusConfig[task.status]
    : UNKNOWN_STATUS_STYLE;

  return (
    <article
      className={`group relative bg-white rounded-xl border-l-4 ${statusStyle.border} shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2`}
      aria-labelledby={`task-title-${task._id}`}
    >
      <div className={`h-1 ${statusStyle.bg}`} aria-hidden="true" />

      <div className="p-6">
        <TaskHeader
          status={task.status ?? undefined}
          isRemote={task.is_remote || false}
          onStatusClick={onStatusClick}
        />

        <TaskTitle title={task.title} taskId={task._id} />

        <TaskDescription description={task.description ?? undefined} />

        <TaskFooter
          offers={task.number_of_offers}
          likes={task.number_of_likes}
          endDate={task.human_friendly_end_date}
        />

        <TaskMeta createdAt={task.createdAt ?? undefined} />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />
    </article>
  );
};
