const PlanDescription = ({ descriptions }) => {
  return (
    <div className="flex flex-col w-full gap-2 mt-3">
      <h3>Plan Description</h3>
      <ul className="flex flex-col gap-2">
        {descriptions.map((text, index) => {
          return (
            <li
              key={index}
              className="text-xs text-gray-600 font-light font-sans"
            >
              {`• ${text}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanDescription;
