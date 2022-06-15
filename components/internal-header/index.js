import Image from "next/image";

const InternalHeader = () => {
  return (
    <header className="fixed flex container justify-between items-center w-full h-16 bg-gray-900 z-50 shadow-md">
      <Image
        src="/madison-builders-light.png"
        alt="Madison Builders Logo"
        width={36}
        height={27}
      />
      <div className="flex gap-6 items-center">
        <button className="flex items-center text-white border border-gray-300 rounded px-[1px] active:border-teal-300 md:hidden transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default InternalHeader;
