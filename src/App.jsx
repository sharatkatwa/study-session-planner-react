import React, { useState } from "react";

// MAIN APP
export default function App() {
  const [page, setPage] = useState("list");
  const [sessions, setSessions] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* NAV */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Study Planner</h1>
          <button
            onClick={() => setPage(page === "list" ? "create" : "list")}
            className="px-4 py-2 rounded-xl bg-black text-white text-sm"
          >
            {page === "list" ? "+ New Session" : "← Back"}
          </button>
        </div>

        {page === "list" ? (
          <SessionList sessions={sessions} setSessions={setSessions} />
        ) : (
          <CreateSession setSessions={setSessions} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

// CREATE SESSION PAGE



