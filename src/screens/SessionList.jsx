function SessionList({ sessions, setSessions }) {
  const handleDelete = (indexToDelete) => {
    setSessions((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  if (sessions.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-20">
        No study sessions yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sessions.map((session, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="font-medium text-sm">{session.topic}</h3>
            <p className="text-xs text-gray-500">
              {session.subject} • {session.duration} min • {session.priority}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{session.date}</span>

            <button
              onClick={() => handleDelete(index)}
              className="text-xs px-3 py-1 rounded-lg bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SessionList