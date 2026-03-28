import { useState } from "react";
function CreateSession({ setSessions, setPage }) {
  const [form, setForm] = useState({
    topic: "",
    subject: "",
    duration: "",
    priority: "medium",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(form.duration) < 10) {
      alert("Duration must be at least 10 minutes");
      return;
    }

    setSessions((prev) => [...prev, form]);
    setPage("list");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm space-y-4"
    >
      <h2 className="text-lg font-medium">Create Study Session</h2>

      <input
        type="text"
        name="topic"
        placeholder="Topic"
        value={form.topic}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />

      <input
        type="number"
        name="duration"
        placeholder="Duration (min 10)"
        value={form.duration}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none bg-white"
      >
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />

      <button
        type="submit"
        className="w-full py-3 bg-black text-white rounded-lg text-sm"
      >
        Save Session
      </button>
    </form>
  );
}

export default CreateSession