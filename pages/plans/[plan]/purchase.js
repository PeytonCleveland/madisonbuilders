import Image from "next/image";
import { useState } from "react";
import { Modal, Option, Select } from "../../../components";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Purchase = ({ plan }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  const [includedModal, setIncludedModal] = useState(false);

  const onSubmitForm = ({ planOptions }) => {};

  return (
    <>
      {includedModal && (
        <Modal title="What's Included" onClose={() => setIncludedModal(false)}>
          <h4>Each plan set includes:</h4>
          <ul className="text-xs text-gray-700 font-sans font-light list-disc px-4 flex flex-col gap-2">
            <li>
              FLOOR PLAN: Showing all dimensions, window & door locations,
              laminated beams, columns, floor materials, ceiling heights,
              fireplace size, window & door schedules and specifications
            </li>
            <li>
              DOOR, WINDOW AND ROOF FINISH SCHEDULES: Window & Door schedules as
              well as room finish schedules showing flooring specs, crown
              molding, cabinets, countertop materials, & ceiling heights.
            </li>
            <li>
              FOUNDATION PLAN AND CEILING JOISTS LAYOUT: Dimensioned plan
              detailing the location and size of footings, slabs, brick shelves
              reinforcing steel, direction and size of ceiling joists, Laminate
              beam locations, specifications covering soil pressure, concrete
              strength, and requirements for the contractor to follow accepted
              practices.
            </li>
            <li>
              ELECTRICAL PLAN: Specifications, notes, schedules, and plan
              defining the location of panels, service, lighting fixtures,
              switches, outlets, smoke detectors, cable TV and telephones.
            </li>
            <li>
              FRONT AND REAR ELEVATIONS: The front and rear elevation of the
              house as drawn. Shows placement of doors & windows on exterior of
              house, as well as roof pitches, and locations of chimney, exterior
              vents, etc. and also includes any necessary details.
            </li>
            <li>
              SIDE ELEVATIONS, ROOF PLANS, WALL SECTIONS AND FRAMING DETAILS:
              Side views of house, and necessary framing and roofing details.
              Also included are wall sections, and any other necessary details
              for your framer or other subcontractors.
            </li>
          </ul>
          <h4>
            The following are <strong>not</strong> included:
          </h4>
          <ul className="text-xs text-gray-700 font-sans font-light list-disc px-4 flex flex-col gap-2">
            <li>
              Architectural or Engineering Stamp - handled locally if required
            </li>
            <li>Site Plan - handled locally when required</li>
            <li>
              Mechanical Drawings (location of heating and air equipment and
              duct work) - your subcontractors handle this
            </li>
            <li>
              Plumbing Drawings (drawings showing the actual plumbing pipe sizes
              and locations) - your subcontractors handle this
            </li>
            <li>Energy calculations - handled locally when required</li>
          </ul>
        </Modal>
      )}
      <div className="container w-full pt-32 pb-8 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-gray-900 font-medium">{`Purchase ${plan.planNumber}`}</h1>
          <button
            className="text-sm text-indigo-700 font-sans font-light flex gap-1 items-center"
            onClick={() => setIncludedModal(true)}
          >
            What&apos;s included{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex w-full h-40 min-h-[175px] relative">
          <Image
            src={plan.featuredImage}
            alt={`Plan ${plan.planNumber}`}
            layout="fill"
            objectFit={"cover"}
          />
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
        <hr className="mt-2" />
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="w-full flex flex-col gap-5 py-2"
        >
          <Select label="Plan set options">
            <Option value="pdfSingle" label="PDF – Single Use">
              <h6>PDF – Single Use</h6>
              <p className="text-gray-600 text-xs font-sans mt-1">
                A PDF file with a license to build and a copyright release
                giving you legal permission to make changes to the plan and make
                copies to build the house. Delivered digitally, typically within
                1 to 2 days. Comes with a Single-Build License giving you
                permission to build the home one time.
              </p>
            </Option>
            <Option value="fiveSets" label="5 Sets">
              <h6>5 Sets</h6>
              <p className="text-gray-600 text-xs font-sans mt-1">
                Five full sets of copyrighted plans that are mailed to you. This
                is the minimum package you can build from.
              </p>
            </Option>
            <Option value="fiveSetsPdf" label="5 Sets + PDF">
              <h6>5 Sets + PDF</h6>
              <p className="text-gray-600 text-xs font-sans mt-1">
                Five printed set and a digital PDF set of construction documents
                with a copyright release and a single license to build.
              </p>
            </Option>
            <Option value="fiveSetsPdf" label="PDF – Unlimited Builds">
              <h6>PDF – Unlimited Builds</h6>
              <p className="text-gray-600 text-xs font-sans mt-1">
                Five printed set and a digital PDF set of construction documents
                with a copyright release and a single license to build.
              </p>
            </Option>
          </Select>
          <Select label="Foundation options">
            <Option value="pdfSingle" label="Slab – No charge">
              <h6>Slab – No charge</h6>
            </Option>
            <Option value="pdfSingle" label="Basement +$395">
              <h6>Basement +$395</h6>
            </Option>
            <Option value="pdfSingle" label="Crawlspace +$150">
              <h6>Crawlspace +$150</h6>
            </Option>
          </Select>
          <div className="flex gap-2 pt-1">
            <h2 className="text-lg font-semibold">Total:</h2>
            <h3 className="text-lg font-sans">$1,295.00 (Tax included)</h3>
          </div>
          <button className="w-full text-xl mt-1 gap-2 flex justify-center items-center py-[10px] bg-gradient-to-br from-indigo-700 to-indigo-800 rounded-full shadow-md text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Purchase this plan
          </button>
        </form>
        <hr className="mt-4 mb-6" />
        <div className="flex flex-col gap-1 w-full bg-indigo-100 rounded-lg shadow-md p-4 pb-5">
          <h3 className="text-xl font-semibold text-gray-900">
            Modify this plan
          </h3>
          <p className="text-gray-700 font-sans">
            Need to make changes? We will get you a free price quote within 2 to
            4 business days.
          </p>
          <Link
            href={`https://www.architecturaldesigns.com/services/modification-request?plan_id=${plan.externalId}`}
            passHref
          >
            <a className="w-full mt-2 gap-2 flex justify-center items-center py-2 rounded-full shadow-md text-indigo-700 border-2 border-indigo-700 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              Modify this plan
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Purchase;

export async function getServerSideProps(context) {
  const query = context.query;
  const plan = await fetch(
    `https://madisonbuilders.llc/api/plans?planNumber=${query.plan}`
  );
  return {
    props: { plan: await plan.json() }
  };
}
