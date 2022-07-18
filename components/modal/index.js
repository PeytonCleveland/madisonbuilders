const Modal = ({ title, children, onClose }) => {
  return (
    <div className="flex flex-col w-screen h-screen z-[100] bg-white absolute">
      <div className="container flex w-full justify-between items-center py-4 shadow-md">
        <h3 className="text-2xl text-gray-900 font-medium">{title}</h3>
        <button
          className="flex items-center text-gray-900 border border-gray-900 rounded px-[1px] active:border-indigo-900 active:bg-indigo-100  md:hidden transition-all duration-500 ease-in-out shadow-md"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="container flex flex-col w-full py-4 gap-2">
        {children}
      </div>
    </div>
  );
};

export default Modal;
