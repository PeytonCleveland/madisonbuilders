import { Countdown, PlanCard } from "../../components";
import Image from "next/image";

const JulyPromo = ({ plans }) => {
  return (
    <>
      <div className="w-full container pt-28 pb-32 flex flex-col gap-2 relative">
        <div className="absolute w-[190px] h-[94px] bottom-2 left-72 rounded-lg overflow-hidden animate-slide">
          <Image src={plans[0].featuredImage} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute w-[110px] h-[68px] bottom-8 -left-4 rounded-lg overflow-hidden animate-slide">
          <Image src={plans[3].featuredImage} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute w-[150px] h-[80px] bottom-2 left-28 rounded-lg overflow-hidden animate-slide">
          <Image src={plans[1].featuredImage} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute w-[140px] h-[78px] -bottom-12 left-56 rounded-lg overflow-hidden animate-slide">
          <Image src={plans[4].featuredImage} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute w-[180px] h-[94px] -bottom-16 rounded-lg overflow-hidden animate-slide">
          <Image src={plans[2].featuredImage} layout="fill" objectFit="cover" />
        </div>

        <Countdown date={new Date("2022-08-01T00:00:00")} />
        <h1 className="text-3xl text-gray-900 mt-8">
          <strong>July Free Plan Special!</strong>
        </h1>
        <h2 className="text-gray-700 font-sans font-light">
          Start a new custom home build with Madison Builders and we'll give you
          the plan free!
        </h2>
        <button className="flex mt-4 w-fit justify-center items-center bg-gradient-to-br from-indigo-700 to-indigo-800 text-white px-6 py-[5px] font-semibold text-lg rounded-full hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
          Search plans
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full container bg-gradient-to-br from-gray-800 to-gray-900 pt-28 pb-10 flex flex-col gap-10">
        <div className="flex flex-col">
          <h3 className="text-lg text-white font-semibold">
            Promotion details
          </h3>
          <p className="text-sm text-gray-300 font-sans font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg text-white font-semibold">How it works</h3>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-teal-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-gray-900">01</h4>
            </div>
            <h3 className="text-xl text-teal-300">
              Determine your <strong>budget</strong>
            </h3>
          </div>
          <p className="text-gray-300 font-light font-sans text-sm ml-[54px] mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-teal-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-gray-900">02</h4>
            </div>
            <h3 className="text-xl text-teal-300">
              Determine your <strong>budget</strong>
            </h3>
          </div>
          <p className="text-gray-300 font-light font-sans text-sm ml-[54px] mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-teal-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-gray-900">03</h4>
            </div>
            <h3 className="text-xl text-teal-300">
              Determine your <strong>budget</strong>
            </h3>
          </div>
          <p className="text-gray-300 font-light font-sans text-sm ml-[54px] mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>

      <div className="w-full container bg-gradient-to-br from-indigo-100 to-indigo-200 pt-8 pb-10 flex flex-col gap-2">
        <div className="flex flex-col pb-3">
          <h3 className="text-lg text-gray-900 font-semibold">
            Featured plans
          </h3>
          <p className="text-sm text-gray-600 font-light font-sans pr-3">
            Pick one of our featured plans, or browse our selection of over 30k
            house plans!
          </p>
        </div>
        <div className="snap-x mx-auto snap-mandatory flex w-full overflow-scroll pb-2">
          {plans.map((plan) => (
            <PlanCard plan={plan} key={plan.planNumber} />
          ))}
        </div>
        <button className="w-fit bg-white text-indigo-900 px-5 py-[5px] gap-1 flex justify-center items-center font-semibold rounded-full mt-2 hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
          View all plans{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default JulyPromo;

export async function getServerSideProps() {
  const plans = await fetch("http://localhost:3000/api/featuredPlans");
  return {
    props: { plans: await plans.json() }
  };
}
