import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const SessionCard = ({ session }) => {
  const { handleDelete } = useContext(MyContext);
  const PriorityCapsule = () => {
    if (session.priority === "high")
      return (
        <span className={"rounded-full border border-red-600 text-red-800 px-2 bg-[#d1030367] leading-none"}>
          {session.priority}
        </span>
      );
    else if (session.priority === "medium")
      return (
        <span className={"rounded-full border border-yellow-600 text-yellow-800 px-2 bg-[#d1ce0367] leading-none"}>
          {session.priority}
        </span>
      );

    return (
      <span className={"rounded-full border border-green-600 text-green-800 px-2 bg-[#03d11e67] leading-none"}>
        {session.priority}
      </span>
    );
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-medium text-sm">{session.topic}</h3>
        <p className="text-xs text-gray-500">
          {session.subject} • {session.duration} min • <PriorityCapsule/>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-400">{session.date}</span>

        <button onClick={() => handleDelete(session.id)} className="text-xs px-3 py-1 rounded-lg bg-red-500 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SessionCard;
