import { useState } from "react";

interface CrewWork {
  crew: string;
  start: Date;
  end: Date;
}

interface TimelineProps {
  crews: string[];
  workPeriods: CrewWork[];
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Timeline({ crews, workPeriods }: TimelineProps) {
  const [visibleMonths, setVisibleMonths] = useState([0, 1]);

  const shiftLeft = () => {
    if (visibleMonths[0] > 0) {
      setVisibleMonths([visibleMonths[0] - 1, visibleMonths[1] - 1]);
    }
  };

  const shiftRight = () => {
    if (visibleMonths[1] < 11) {
      setVisibleMonths([visibleMonths[0] + 1, visibleMonths[1] + 1]);
    }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isWorkDay = (crew: string, day: number, month: number) => {
    return workPeriods.some(
      (work) =>
        work.crew === crew &&
        new Date(work.start).getMonth() === month &&
        new Date(work.end).getMonth() === month &&
        day >= new Date(work.start).getDate() &&
        day <= new Date(work.end).getDate()
    );
  };
  return (
    <div className="flex">
      <div className="w-40 flex-shrink-0">
        <input
          type="text"
          placeholder="Search"
          className="w-full mb-2 p-2 border rounded"
        />
        <div className="space-y-2">
          {crews.map((crew) => (
            <div key={crew} className="p-2 border rounded bg-gray-200">
              {crew}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow overflow-x-auto">
        <div className="flex justify-between mb-2">
          <button
            onClick={shiftLeft}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Left
          </button>
          <button
            onClick={shiftRight}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Right
          </button>
        </div>

        <div className="flex mb-2">
          {visibleMonths.map((month) => (
            <div key={month} className="flex-shrink-0 border border-black">
              <div className="text-center font-bold border border-b-black">
                {months[month]}
              </div>
              <div className="flex overflow-x-auto border-b-black">
                {Array.from({ length: getDaysInMonth(month, 2024) }).map(
                  (_, day) => (
                    <div
                      key={day + 1}
                      className="h-10 w-8 flex-shrink-0 text-center border border-b-black border-l border-l-dashed"
                    >
                      {day + 1}
                    </div>
                  )
                )}
              </div>
              {crews.map((crew) => (
                <div key={crew} className="flex overflow-x-auto border-b-black">
                  {Array.from({ length: getDaysInMonth(month, 2024) }).map(
                    (_, day) => (
                      <div
                        key={day + 1}
                        className={`h-10 w-8 flex-shrink-0 text-center border border-l border-l-dashed ${
                          isWorkDay(crew, day + 1, month) ? "bg-yellow-300" : ""
                        }`}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
