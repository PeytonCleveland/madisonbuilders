const Modal = ({ title, children, onClose }) => {
  return (
    <div className="flex flex-col w-screen h-screen z-[100] bg-white absolute">
      <div className="container flex w-full justify-between items-center py-4 shadow-md">
        <h3 className="text-2xl text-gray-900 font-medium">{title}</h3>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
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
