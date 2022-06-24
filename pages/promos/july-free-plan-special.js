import { Countdown, PlanCard } from "../../components";
import Image from "next/image";
import Head from "next/head";

const JulyPromo = ({ plans }) => {
  return (
    <>
      <Head>
        <title>Madison Builders - Free Plan July</title>
        <meta name="title" content="Madison Builders - Free Plan July" />
        <meta
          name="description"
          content="For the entire month of July when you start a custom home build with Madison Builders we'll give you the plan of your dreams 100% free.  Choose from over 50k+ house plans and let us make your dream home a reality."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://madisonbuilders.llc/promos/july-free-plan-special"
        />
        <meta property="og:title" content="Madison Builders - Free Plan July" />
        <meta
          property="og:description"
          content="For the entire month of July when you start a custom home build with Madison Builders we'll give you the plan of your dreams 100% free.  Choose from over 50k+ house plans and let us make your dream home a reality."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://madisonbuilders.llc/promos/july-free-plan-special"
        />
        <meta
          property="twitter:title"
          content="Madison Builders - Free Plan July"
        />
        <meta
          property="twitter:description"
          content="For the entire month of July when you start a custom home build with Madison Builders we'll give you the plan of your dreams 100% free.  Choose from over 50k+ house plans and let us make your dream home a reality."
        />
      </Head>
      <div className="w-full container pt-28 pb-36 flex flex-col gap-2 relative">
        <div className="absolute w-[190px] h-[94px] bottom-2 left-72 rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[0].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[0].planNumber}
          />
        </div>
        <div className="absolute w-[110px] h-[68px] bottom-8 -left-4 rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[3].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[3].planNumber}
          />
        </div>
        <div className="absolute w-[150px] h-[80px] bottom-2 left-28 rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[1].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[1].planNumber}
          />
        </div>
        <div className="absolute w-[140px] h-[78px] -bottom-12 left-56 rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[4].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[4].planNumber}
          />
        </div>
        <div className="absolute w-[180px] h-[94px] -bottom-16 rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[2].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[2].planNumber}
          />
        </div>
        <div className="absolute w-[150px] h-[74px] bottom-4 left-[495px] rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[5].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[5].planNumber}
          />
        </div>
        <div className="absolute w-[180px] h-[94px] -bottom-12 left-[610px] rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[2].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[2].planNumber}
          />
        </div>
        <div className="absolute w-[170px] h-[84px] -bottom-[74px] left-[415px] rounded-lg overflow-hidden animate-slide">
          <Image
            src={plans[6].featuredImage}
            layout="fill"
            objectFit="cover"
            priority
            alt={plans[6].planNumber}
          />
        </div>

        <Countdown date={new Date("2022-08-01T00:00:00")} />
        <h1 className="text-3xl text-gray-900 mt-8">
          <strong>July Free Plan Special!</strong>
        </h1>
        <h2 className="text-gray-700 font-sans font-light">
          Start a new custom home build with Madison Builders and we&apos;ll
          give you the plan free!
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
            Want your dream house plan for free? We have you covered! For the
            entire month of July when you start a custom home build with Madison
            Builders we&apos;ll provide the plan of your choice for free. Simply
            pick your plan from our selection of 30k+ plans, use our client
            portal to pick your finishes and get a customized estimate, then
            sign a custom build contract when you're ready to get started.
          </p>
          <p className="text-[11px] text-gray-400 font-sans font-light mt-2">
            <i>
              Only includes plans provided by Madison Builders, LLC. Promotion
              ends July 31st, 2022.
            </i>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg text-white font-semibold">How it works</h3>

          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-teal-300 rounded shadow flex justify-center items-center mr-4">
                <h4 className="text-xl text-gray-900">01</h4>
              </div>
              <h3 className="text-xl text-teal-300">
                Select your <strong>plan</strong>
              </h3>
            </div>
            <p className="text-gray-300 font-light font-sans text-sm ml-[54px] mb-2">
              As an Architectural Designs builder partner, we have access to
              over 31k house plans for you to choose from. Find the home of your
              dreams, then let us make your dream come to life.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-teal-300 rounded shadow flex justify-center items-center mr-4">
                <h4 className="text-xl text-gray-900">02</h4>
              </div>
              <h3 className="text-xl text-teal-300">
                Get your <strong>estimate</strong>
              </h3>
            </div>
            <p className="text-gray-300 font-light font-sans text-sm ml-[54px] mb-2">
              Once you've found your dream plan, use our client portal to select
              your finishes and get a customized estimate to build your home.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-teal-300 rounded shadow flex justify-center items-center mr-4">
                <h4 className="text-xl text-gray-900">03</h4>
              </div>
              <h3 className="text-xl text-teal-300">
                Begin your <strong>custom build</strong>
              </h3>
            </div>
            <p className="text-gray-300 font-light font-sans text-sm ml-[54px] mb-2">
              Once you're ready to begin, use our client portal to view your
              construction contract and schedule a date to sign. Madison
              Builders will provide the plan for your custom home absolutely
              free of charge!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full container bg-gradient-to-br from-indigo-100 to-indigo-200 pt-8 pb-12 flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col pb-3">
            <h3 className="text-lg text-gray-900 font-semibold">
              Featured plans
            </h3>
            <p className="text-sm text-gray-600 font-light font-sans pr-3">
              Pick one of our featured plans, or browse our selection of over
              30k house plans!
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

        <div className="flex flex-col gap-1 bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-gray-900 font-semibold">
            Promotion terms and conditions
          </h3>
          <p className="text-[11px] text-gray-700 font-sans mb-2">
            This promotion, conducted by Madison Builders, LLC, is subject to
            the following terms and conditions. Participation in this promotion
            constitutes acceptance of the these terms and conditions. Please
            read carefully and in full.
          </p>
          <button className="flex w-full justify-center items-center bg-gradient-to-br from-indigo-700 to-indigo-800 text-white px-6 py-[7px] font-semibold text-sm rounded-full hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
            Terms and conditions
          </button>
        </div>
      </div>
    </>
  );
};

export default JulyPromo;

export async function getServerSideProps() {
  const plans = await fetch("https://madisonbuilders.llc/api/featuredPlans");
  return {
    props: { plans: await plans.json() }
  };
}
