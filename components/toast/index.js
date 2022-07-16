const Toast = ({ text }) => {
  return (
    <div className="fixed bottom-10 bg-green-600 text-white py-2 px-4 rounded-lg shadow-md left-1/2 transform -translate-x-1/2 w-fit z-[500]">
      {text}
    </div>
  );
};

export default Toast;
