import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const Plans = ({ housePlans }) => {
  const router = useRouter();
  return (
    <>
      <div className="container w-full pt-36 pb-8 gap-1 flex flex-col">
        <h1 className="text-4xl text-gray-900 font-medium">House Plans</h1>
        <p className="font-sans text-gray-600 font-light text-sm">
          We are an Architectural Designs builder partner, giving us access to
          over 30k plans for you to choose from! When you find the perfect plan,
          get a customized estimate to build through our client portal.
        </p>
        <Link href="https://architecturaldesigns.com" passHref>
          <a className="text-sm bg-gradient-to-br from-indigo-700 to-indigo-800 py-1.5 px-5 text-white font-medium rounded-full w-fit my-2 flex justify-center items-center gap-1.5">
            View all plans{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </Link>
      </div>
      <div className="container w-full flex flex-col gap-6 pt-6 pb-12 bg-gradient-to-br from-gray-800 to-gray-900">
        <h2 className="text-xl text-white font-medium">
          {housePlans.length} Plans found
        </h2>
        <div className="w-full flex flex-col gap-12">
          {housePlans.map((plan) => {
            return (
              <div
                onClick={() => {
                  router.push(`/plans/${plan.planNumber}`);
                }}
                key={planNumber}
                className=" bg-white w-full h-[225px] mr-6 flex flex-col items-center justify-between shadow-md rounded-lg overflow-hidden"
              >
                <div className="flex w-full h-40 min-h-[160px] relative rounded-t-lg overflow-hidden">
                  <Image
                    src={plan.featuredImage}
                    objectFit={"cover"}
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col w-full h-full py-4 px-3 pl-4 justify-center">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xs text-gray-900 font-sans">
                        {plan.sqFeet}
                      </h3>
                      <h4 className="text-xs text-gray-500">Sq Ft</h4>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xs text-gray-900 font-sans">
                        {plan.beds}
                      </h3>
                      <h4 className="text-xs text-gray-500">Beds</h4>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xs text-gray-900 font-sans">
                        {plan.baths}
                      </h3>
                      <h4 className="text-xs text-gray-500">Baths</h4>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xs text-gray-900 font-sans">
                        {plan.width}
                      </h3>
                      <h4 className="text-xs text-gray-500">Width</h4>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xs text-gray-900 font-sans">
                        {plan.depth}
                      </h3>
                      <h4 className="text-xs text-gray-500">Depth</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container w-full bg-gradient-to-br from-indigo-700 to-indigo-800 pt-8 pb-9 flex flex-col gap-4">
        <h4 className="text-white">
          Don&apos;t see the perfect plan? View all 30k+ plans on Architectural
          Designs!
        </h4>
        <Link href="https://architecturaldesigns.com" passHref>
          <a className="text-sm bg-white py-1.5 px-5 text-indigo-900 font-medium rounded-full w-fit flex justify-center items-center gap-1.5">
            View all plans{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Plans;

export async function getServerSideProps() {
  const plans = await fetch("https://madisonbuilders.llc/api/featuredPlans");
  return {
    props: { housePlans: await plans.json() }
  };
}
