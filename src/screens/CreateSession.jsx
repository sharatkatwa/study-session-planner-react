import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
function CreateSession() {
  const { sessions, setSessions } = useContext(MyContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const today = new Date();

  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 2);

  const formattedMax = maxDate.toISOString().split("T")[0];
  const formattedToday = today.toISOString().split("T")[0];
  //   const handleChange = (e) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   };
  console.log(sessions);
  const handleData = (e) => {
    setSessions((prev) => [
      ...prev,
      {
        topic: e.topic,
        subject: e.subject,
        priority: e.priority,
        duration: e.duration,
        date: e.date,
        id: nanoid(),
      },
    ]);
    reset();
    navigate("/");
    // setPage("list");
  };

  return (
    <form onSubmit={handleSubmit(handleData)} className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
      <h2 className="text-lg font-medium">Create Study Session</h2>

      <input
        {...register("topic", { required: "Topic is Required" })}
        type="text"
        name="topic"
        placeholder="Topic"
        // value={form.topic}
        // onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />
      {errors.topic && <p className="text-red-500">{errors.topic.message}</p>}
      <input
        {...register("subject")}
        type="text"
        name="subject"
        placeholder="Subject"
        // value={form.subject}
        // onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />

      <input
        {...register("duration", {
          required: "Duration required",
          min: {
            value: 10,
            message: "Minimum duration is 10 minutes",
          },
          max: {
            value: 999,
            message: "Max duration is 999 minutes",
          },
        })}
        type="number"
        name="duration"
        placeholder="Duration (min 10)"
        // value={form.duration}
        // onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />
      {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}

      <select
        {...register("priority")}
        name="priority"
        // value={form.priority}
        // onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none bg-white"
      >
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      <input
        defaultValue={new Date().toISOString().split("T")[0]}
        {...register("date", {
          max: {
            value: formattedMax,
            message: "Date cannot be more than 2 years ahead",
          },
          min: {
            value: formattedToday,
            message: "Minimum date should be today",
          },
        })}
        type="date"
        name="date"
        // value={form.date}
        // onChange={handleChange}
        className="w-full border rounded-lg p-3 text-sm outline-none"
      />
      {errors.date && <p className="text-red-500">{errors.date.message}</p>}
      

      <button type="submit" className="w-full py-3 bg-black text-white rounded-lg text-sm">
        Save Session
      </button>
    </form>
  );
}

export default CreateSession;
