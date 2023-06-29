export const Pagination: React.FC<{
  previous: () => void;
  current: () => void;
  next: () => void;
}> = (props) => {
  const test = "";

  return (
    <div className="flex flex-row w-1/3 rounded-md bg-white m-4 p-2">
      <div
        className="flex flex-1 justify-center cursor-pointer hover:font-bold"
        onClick={props.previous}
      >
        Previous
      </div>
      <div
        className="flex flex-1 justify-center cursor-pointer hover:font-bold"
        onClick={props.current}
      >
        Current
      </div>
      <div
        className="flex flex-1 justify-center cursor-pointer hover:font-bold"
        onClick={props.next}
      >
        Next
      </div>
    </div>
  );
};
