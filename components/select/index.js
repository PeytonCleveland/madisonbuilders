import { useState, Children } from "react";

const Select = ({
  children,
  defaultSelection,
  label,
  placeholder = "Select an option"
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultSelection ?? null);
  const options = Children.map(children, (child) => {
    return child;
  });

  return (
    <>
      <span className="text-sm text-gray-600 font-sans">{label}</span>
      <div
        className={`py-2 px-4 flex bg-gray-200 rounded-t-lg ${
          open ? "rounded-b-none" : "rounded-b-lg"
        } ${
          selected === null || open ? "text-gray-600" : "text-gray-900"
        } shadow-md justify-between items-center relative`}
        onClick={() => setOpen(!open)}
      >
        {options[selected]?.props.label ?? placeholder}
        <div className="border-l-2 border-gray-300 pl-3">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div
          className={
            open
              ? "flex flex-col w-full px-4 py-1 absolute top-[44px] left-0 bg-gray-200 rounded-b-lg border-t-2 border-gray-300 z-50"
              : "hidden"
          }
        >
          {options.map((child, index) => {
            return (
              <div
                onClick={() => setSelected(index)}
                className="py-2 text-gray-900"
              >
                {child.props.children}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Select;
