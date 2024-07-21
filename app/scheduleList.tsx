interface Schedule {
  start: string;
  end: string;
  user: string;
}

interface ScheduleListProps {
  schedules: Schedule[];
}

function ScheduleList({ schedules }: ScheduleListProps) {
  return (
    <ul className="space-y-2">
      {schedules.map((schedule, index) => (
        <li key={index} className="border p-2 rounded-md shadow-md bg-white">
          <div>User: {schedule.user}</div>
          <div>Start Date: {schedule.start}</div>
          <div>End Date: {schedule.end}</div>
        </li>
      ))}
    </ul>
  );
}

export default ScheduleList;
