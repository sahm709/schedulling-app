import React, { useState } from "react";

interface ScheduleFormProps {
  onAddSchedule: (schedule: {
    start: string;
    end: string;
    user: string;
  }) => void;
  onClose: () => void;
}

function ScheduleForm({ onAddSchedule, onClose }: ScheduleFormProps) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSchedule({ start, end, user });
    setStart("");
    setEnd("");
    setUser("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
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
      <div className="grid gap-4 my-4 md:grid-cols-2">
        <div className="flex flex-col">
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
        <div className="flex flex-col">
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
      </div>
      <button
        type="submit"
        className="w-full bg-green-300 text-black font-bold py-2 rounded-md border border-green-700 border-solid"
      >
        SUBMIT
      </button>
    </form>
  );
}

export default ScheduleForm;
