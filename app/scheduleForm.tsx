import React, { useState } from "react";

interface ScheduleFormProps {
  onAddSchedule: (schedule: {
    start: string;
    end: string;
    user: string;
  }) => void;
}

function ScheduleForm({ onAddSchedule }: ScheduleFormProps) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSchedule({ start, end, user });
    setStart("");
    setEnd("");
    setUser("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md shadow-md bg-white"
    >
      <div>
        <label
          htmlFor="user"
          className="block text-sm font-medium text-gray-700"
        >
          User
        </label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="start"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          id="start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="end"
          className="block text-sm font-medium text-gray-700"
        >
          End Date
        </label>
        <input
          type="date"
          id="end"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        SUBMIT
      </button>
    </form>
  );
}

export default ScheduleForm;
