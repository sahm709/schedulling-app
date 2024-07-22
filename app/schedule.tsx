import { useEffect, useState } from "react";
import CrewList from "./components/crewList";
import Timeline from "./components/timeline";

interface CrewWork {
  crew: string;
  start: Date;
  end: Date;
}

interface ScheduleProps {
  crews: string[];
  workPeriods: CrewWork[];
}

function Schedule({ crews, workPeriods }: ScheduleProps) {
  const [visibleMonths, setVisibleMonths] = useState([0, 1]);

  useEffect(() => {}, [crews, workPeriods]);

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

  return (
    <div className="flex">
      <CrewList crews={crews} />
      <Timeline
        crews={crews}
        workPeriods={workPeriods}
        visibleMonths={visibleMonths}
        shiftLeft={shiftLeft}
        shiftRight={shiftRight}
      />
    </div>
  );
}

export default Schedule;
