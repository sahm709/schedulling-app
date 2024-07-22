"use client";

import { useEffect, useState } from "react";
import ScheduleForm from "./components/scheduleForm";
import Modal from "./components/modal";
import Schedule from "./schedule";

export default function Home() {
  // const [schedules, setSchedules] = useState<
  //   { start: string; end: string; user: string }[]
  // >([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [crews, setCrews] = useState(["Crew 1", "Crew 2", "Crew 3"]);
  const [workPeriods, setWorkPeriods] = useState([
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
  ]);

  useEffect(() => {}, [crews, workPeriods]);

  const handleAddSchedule = (schedule: {
    start: string;
    end: string;
    user: string;
  }) => {
    if (!crews.includes(schedule.user)) {
      setCrews((prevCrews) => [...prevCrews, schedule.user]);
    }

    setWorkPeriods((prevWorkPeriods) => [
      ...prevWorkPeriods,
      {
        crew: schedule.user,
        start: new Date(schedule.start),
        end: new Date(schedule.end),
      },
    ]);

    setIsModalVisible(false); // Close the modal after adding the schedule
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
            className="bg-green-300 text-black text-xs font-bold px-4 py-2 rounded-md border border-green-700 border-solid"
          >
            ADD SCHEDULE
          </button>
        </div>
      </div>

      <div>
        <Schedule crews={crews} workPeriods={workPeriods} />
      </div>

      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <ScheduleForm
          onAddSchedule={handleAddSchedule}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
