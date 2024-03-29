import { useSession } from "next-auth/react";
import getGreeting from "../../utils/get-greeting";
import Link from "next/link";

const ClientPortal = () => {
  const { data: session } = useSession();
  return (
    <div className="container pt-24 pb-20 flex flex-col gap-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex flex-col gap-5 bg-gradient-to-br from-indigo-700 to-indigo-800 p-4 pb-5 rounded-lg shadow-md">
        <h1 className="text-white font-semibold text-lg">{`${getGreeting()}, ${
          session?.userData.firstName
        }!`}</h1>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <p className="text-white font-light text-sm">Project progress</p>
            <p className="text-white font-light text-xs font-sans">
              2% Complete
            </p>
          </div>
          <div className="w-full bg-indigo-500 rounded-full h-2">
            <div
              className="bg-teal-300 h-2 rounded-full"
              style={{ width: "4%" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-light text-sm">Next step:</p>
          <button className="bg-white text-indigo-800 rounded-full shadow-md py-2 flex items-center justify-center gap-1.5 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            Contract signature
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-medium">My project details</p>
          <button className="text-sm text-indigo-700 font-medium flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            Edit info
          </button>
        </div>
        <div className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-gray-600 font-sans">Project name</p>
            <h6>305 Brownstone Loop</h6>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-gray-600 font-sans">Project type</p>
            <h6>Custom - New Construction</h6>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-gray-600 font-sans">Project status</p>
            <h6>Not started (contract pending)</h6>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-gray-600 font-sans">Financing</p>
            <h6>Cash - No Financing</h6>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-gray-900 font-medium">Support</p>
        <div className="flex flex-col gap-4 bg-gradient-to-br from-gray-800 to-gray-900 p-4 pb-5 rounded-lg shadow-md">
          <p className="text-white font-light text-sm font-sans">
            Need some help? Click below for support or browse our{" "}
            <Link href="/support">
              <a className="text-teal-300">frequently asked questions.</a>
            </Link>
          </p>
          <button className="bg-white text-gray-900 rounded-full shadow-md py-2 flex items-center justify-center gap-1.5 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Customer support
          </button>
        </div>
      </div>
    </div>
  );
};
export default ClientPortal;
