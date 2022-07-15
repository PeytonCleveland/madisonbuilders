import Image from "next/image";
import Link from "next/link";
import { PlanDescription } from "../../components";

const Plan = ({ plan }) => {
  return (
    <div className="container flex flex-col w-full pt-32 pb-12 gap-3">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-gray-900 text-xl font-medium">{`Plan #${plan.planNumber}`}</h1>
        <div className="flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>
      <div className="flex w-full h-40 min-h-[175px] relative">
        <Image
          src={plan.featuredImage}
          alt={`Plan ${plan.planNumber}`}
          layout="fill"
          objectFit={"cover"}
        />
        <div className="absolute w-7 h-7 rounded-full bg-indigo-700 shadow-md -left-3 top-1/2 bottom-1/2 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-0.5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute w-7 h-7 rounded-full bg-indigo-700 shadow-md -right-3 top-1/2 bottom-1/2 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-gray-900 text-sm font-light">{plan.planTagline}</h2>
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-5 gap-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xs text-gray-900 font-sans">{plan.sqFeet}</h3>
            <h4 className="text-xs text-gray-500">Sq Ft</h4>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xs text-gray-900 font-sans">{plan.beds}</h3>
            <h4 className="text-xs text-gray-500">Beds</h4>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xs text-gray-900 font-sans">{plan.baths}</h3>
            <h4 className="text-xs text-gray-500">Baths</h4>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xs text-gray-900 font-sans">{plan.width}</h3>
            <h4 className="text-xs text-gray-500">Width</h4>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xs text-gray-900 font-sans">{plan.depth}</h3>
            <h4 className="text-xs text-gray-500">Depth</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-1">
        <Link href="/" passHref>
          <a className="w-full text-lg mt-1 gap-2 flex justify-center items-center py-2 bg-gradient-to-br from-indigo-700 to-indigo-800 rounded-full shadow-md text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            Customized cost estimate
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="w-full text-lg mt-1 gap-2 flex justify-center items-center py-2 rounded-full shadow-md text-indigo-700 border-2 border-indigo-700 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Purchase this plan
          </a>
        </Link>
      </div>
      <h3>Purchase Options</h3>
      <h3>Floorplan</h3>
      {plan.floorplan.map((level, index) => {
        return (
          <>
            <h4 className="text-gray-600 text-sm font-sans font-light">
              {index === 0 ? "Main Floor" : "Second Floor"}
            </h4>
            <div className={`flex w-full min-h-[350px] relative`}>
              <Image
                src={level}
                alt={`Plan ${index}`}
                layout="fill"
                objectFit={"contain"}
              />
            </div>
          </>
        );
      })}
      <h3>Plan Details</h3>

      <PlanDescription descriptions={plan.planDescription} />
    </div>
  );
};

export default Plan;

export async function getServerSideProps(context) {
  const query = context.query;
  const plan = await fetch(
    `https://madisonbuilders.llc/api/plans?planNumber=${query.plan}`
  );
  return {
    props: { plan: await plan.json() }
  };
}
