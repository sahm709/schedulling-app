interface CrewListProps {
  crews: string[];
}

const CrewList = ({ crews }: CrewListProps) => {
  return (
    <div className="w-40 flex-shrink-0 h-full">
      <div className="border border-black p-4 h-20">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded"
        />
      </div>
      {crews.map((crew) => (
        <div
          key={crew}
          className="p-4 h-20 border-b border-l border-black border-r"
        >
          <div className="bg-green-300 p-2 border rounded bg-gray-200 h-full flex items-center justify-center">
            {crew}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CrewList;
