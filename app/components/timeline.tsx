interface CrewWork {
  crew: string;
  start: Date;
  end: Date;
}

interface TimelineProps {
  crews: string[];
  workPeriods: CrewWork[];
  visibleMonths: number[];
  shiftLeft: () => void;
  shiftRight: () => void;
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

const Timeline = ({
  crews,
  workPeriods,
  visibleMonths,
  shiftLeft,
  shiftRight,
}: TimelineProps) => {
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

  const getWorkPeriodText = (crew: string, day: number, month: number) => {
    const workPeriod = workPeriods.find(
      (work) =>
        work.crew === crew &&
        new Date(work.start).getMonth() === month &&
        day === new Date(work.start).getDate()
    );

    if (workPeriod) {
      const startDate = new Date(workPeriod.start);
      const endDate = new Date(workPeriod.end);
      const startDay = startDate.getDate();
      const endDay = endDate.getDate();
      const startMonth = months[startDate.getMonth()].slice(0, 3);
      const endMonth = months[endDate.getMonth()].slice(0, 3);

      return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
    }

    return null;
  };
  return (
    <div className="flex-grow h-full overflow-x-auto">
      <div className="flex">
        {visibleMonths.map((month) => (
          <div key={month} className="flex-shrink-0">
            <div className="h-20 grid grid-cols-1">
              <div className="text-center font-bold border-t border-b border-r border-black">
                {months[month]}
              </div>
              <div className="flex overflow-x-auto border-b border-black">
                {Array.from({ length: getDaysInMonth(month, 2024) }).map(
                  (_, day) => (
                    <div
                      key={day + 1}
                      className="w-8 flex-shrink-0 text-center border-r border-black"
                    >
                      {day + 1}
                    </div>
                  )
                )}
              </div>
            </div>
            {crews.map((crew) => (
              <div key={crew} className="relative flex overflow-x-auto">
                {Array.from({ length: getDaysInMonth(month, 2024) }).map(
                  (_, day) => {
                    const workPeriodText = getWorkPeriodText(
                      crew,
                      day + 1,
                      month
                    );

                    return (
                      <div
                        key={day + 1}
                        className={`relative h-20 w-8 flex-shrink-0 text-center border-r border-b border-black ${
                          isWorkDay(crew, day + 1, month) ? "bg-green-300" : ""
                        }`}
                      >
                        {workPeriodText && (
                          <div className="absolute top-0 left-0 w-full text-xs text-black bg-green-300">
                            {workPeriodText}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between my-2">
        <button
          onClick={shiftLeft}
          className="px-4 py-2 bg-green-300 text-black rounded border border-green-700 border-solid"
        >
          Left
        </button>
        <button
          onClick={shiftRight}
          className="px-4 py-2 bg-green-300 text-black rounded border border-green-700 border-solid"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Timeline;
