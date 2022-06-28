import Image from "next/image";
import { useRouter } from "next/router";

const PlanCard = ({ plan }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/plans/${plan.planNumber}`);
      }}
      className="snap-start bg-white w-[310px] flex-shrink-0 h-[225px] mr-6 flex flex-col items-center justify-between shadow-md rounded-lg overflow-hidden"
    >
      <div className="flex w-full h-40 min-h-[160px] relative rounded-t-lg overflow-hidden">
        <Image src={plan.featuredImage} objectFit={"cover"} layout="fill" />
      </div>
      <div className="flex flex-col w-full h-full py-4 px-3 pl-4 justify-center">
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
    </div>
  );
};

export default PlanCard;
