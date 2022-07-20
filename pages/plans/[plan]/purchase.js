import Image from "next/image";
import { useState } from "react";
import { Modal, Option, Select } from "../../../components";
import { useForm } from "react-hook-form";

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
      <div className="container w-full pt-32 pb-20 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-gray-900 font-medium">{`Purchase ${plan.planNumber}`}</h1>
          <button
            className="text-sm text-indigo-700 font-sans font-light flex gap-1 items-center"
            onClick={() => setIncludedModal(true)}
          >
            What's included{" "}
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
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="w-full flex flex-col gap-2"
        >
          <h2 className="text-gray-900">Purchase options</h2>
          <Select label="Hello">
            <Option value="World" label="World option">
              <h6>World child</h6>
              <p className="text-gray-600 text-xs font-sans">
                Hello world wtf is up
              </p>
            </Option>
            <Option value="World" label="From the other side">
              From the other side child
            </Option>
            <Option value="Hello" label="Hello">
              Hello child
            </Option>
          </Select>
        </form>
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
