import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import SessionCard from "../components/SessionCard";


function SessionList() {
const {sessions} = useContext(MyContext)
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
        <SessionCard key={index} session={session}/>
      ))}
    </div>
  );
}
export default SessionList