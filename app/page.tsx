"use client";

import { useState } from "react";
import ScheduleForm from "./scheduleForm";
import ScheduleList from "./scheduleList";
import Timeline from "./timeline";
import Modal from "./modal";

const crews = ["Crew 1", "Crew 2", "Crew 3"];
const workPeriods = [
  {
    crew: "Crew 1",
    start: new Date("2024-01-03"),
    end: new Date("2024-01-05"),
  },
  {
    crew: "Crew 1",
    start: new Date("2024-03-03"),
    end: new Date("2024-03-05"),
  },
  {
    crew: "Crew 2",
    start: new Date("2024-02-10"),
    end: new Date("2024-02-12"),
  },
  {
    crew: "Crew 3",
    start: new Date("2024-01-15"),
    end: new Date("2024-01-20"),
  },
];

export default function Home() {
  const [schedules, setSchedules] = useState<
    { start: string; end: string; user: string }[]
  >([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddSchedule = (schedule: {
    start: string;
    end: string;
    user: string;
  }) => {
    setSchedules([...schedules, schedule]);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="mx-3 p-4">
      <div className="grid grid-cols-2 mt-4">
        <div className="mb-4 flex justify-start">
          <h1 className="text-3xl font-bold mb-4 text-center">Schedule</h1>
        </div>
        <div className="mb-4 flex justify-end">
          <button
            onClick={handleOpenModal}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            ADD SCHEDULE
          </button>
        </div>
      </div>

      <div className="mb-4">
        <Timeline crews={crews} workPeriods={workPeriods} />
      </div>

      <div>
        <ScheduleList schedules={schedules} />
      </div>

      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <ScheduleForm onAddSchedule={handleAddSchedule} />
      </Modal>
    </div>
  );
}
