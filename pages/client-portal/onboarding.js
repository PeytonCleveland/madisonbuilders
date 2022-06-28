import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Spinner } from "../../components";

const Onboarding = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(0);
  let timeoutId = null;

  useEffect(() => {
    if (session) {
      setValue("firstName", session.userData.firstName || "");
      setValue("lastName", session.userData.lastName || "");
      setValue("email", session.userData.email || "");
      setValue("phoneNumber", session.userData.phoneNumber || "");
    }
  }, [session]);

  const cancelTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const onSubmitContactInfo = async ({
    firstName,
    lastName,
    email,
    phoneNumber
  }) => {
    setLoading(true);
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", session.userData.email));
    const querySnapshot = await getDocs(q);
    const id = querySnapshot.docs[0].id;
    const userRef = doc(db, "users", id);
    try {
      await updateDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        phoneNumber: phoneNumber
      });
    } catch (e) {
      console.log(e);
    }
    session.userData.firstName = firstName;
    session.userData.lastName = lastName;
    session.userData.email = email.toLowerCase();
    session.userData.phoneNumber = phoneNumber;
    session.userData.firestoreId = id;
    setLoading(false);
    setStage(1);
  };

  const onSubmitProjectInfo = async ({
    hasLot,
    hasPlans,
    hasRealtor,
    budget,
    timeline
  }) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "projects"), {
        created: new Date().toUTCString(),
        hasLot: hasLot,
        hasPlans: hasPlans,
        hasRealtor: hasRealtor,
        budget: budget,
        timeline: timeline,
        clientId: session.userData.firestoreId
      });
    } catch (error) {
      console.log(error);
    }
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", session.userData.email));
    const querySnapshot = await getDocs(q);
    const id = querySnapshot.docs[0].id;
    const userRef = doc(db, "users", id);
    try {
      await updateDoc(userRef, {
        onboarded: true
      });
    } catch (e) {
      console.log(e);
    }
    session.userData.onboarded = true;
    setLoading(false);
    router.push("/client-portal");
  };

  return (
    <div className="flex items-center bg-gradient-to-br from-gray-200 to-gray-300 h-screen container">
      {stage === 0 ? (
        <form
          onSubmit={handleSubmit(onSubmitContactInfo)}
          className="flex-1 flex flex-col items-center justify-center bg-white w-full rounded-xl shadow-md p-6 gap-4"
        >
          <div className="flex flex-col w-full gap-1 justify-center items-center mb-1">
            <p className="text-4xl">👋🏼</p>
            <h1 className="text-2xl font-semibold">
              {session?.userData.firstName !== null &&
              session?.userData.firstName !== undefined
                ? `Welcome ${session.userData.firstName}!`
                : "Welcome!"}
            </h1>
            <p className="text-gray-600 font-sans font-light text-center text-sm">
              We&apos;re glad you&apos;re here. Let&apos;s get started.
              <br /> Please confirm your information:
            </p>
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between">
              <label className="block text-gray-600 font-sans font-light text-sm">
                First Name
              </label>
              <p className="text-red-600 font-sans text-xs text-right">
                {errors.firstName?.message}
              </p>
            </div>
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First name"
              onBlur={() => {
                timeoutId = setTimeout(function () {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 150);
              }}
              onFocus={cancelTimeout}
              className={
                errors.firstName
                  ? "px-4 py-3 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow"
                  : "px-4 py-3 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
              }
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between">
              <label className="block text-gray-600 font-sans font-light text-sm">
                Last Name
              </label>
              <p className="text-red-600 font-sans text-xs text-right">
                {errors.lastName?.message}
              </p>
            </div>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last name"
              onBlur={() => {
                timeoutId = setTimeout(function () {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 150);
              }}
              onFocus={cancelTimeout}
              className={
                errors.lastName
                  ? "px-4 py-3 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow"
                  : "px-4 py-3 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
              }
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between">
              <label className="block text-gray-600 font-sans font-light text-sm">
                Email
              </label>
              <p className="text-red-600 font-sans text-xs text-right">
                {errors.email?.message}
              </p>
            </div>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              onBlur={() => {
                timeoutId = setTimeout(function () {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 150);
              }}
              onFocus={cancelTimeout}
              className={
                errors.email
                  ? "px-4 py-3 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow"
                  : "px-4 py-3 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
              }
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between">
              <label className="block text-gray-600 font-sans font-light text-sm">
                Phone number
              </label>
              <p className="text-red-600 font-sans text-xs text-right">
                {errors.phoneNumber?.message}
              </p>
            </div>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required"
              })}
              type="tel"
              placeholder="Phone number"
              onBlur={() => {
                timeoutId = setTimeout(function () {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 150);
              }}
              onFocus={cancelTimeout}
              className={
                errors.phoneNumber
                  ? "px-4 py-3 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow"
                  : "px-4 py-3 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
              }
            />
          </div>
          <button
            className="mt-1 bg-gradient-to-br from-indigo-600 to-indigo-700 w-full py-3 rounded-full text-white font-semibold flex items-center justify-center shadow-md gap-2"
            type="Submit"
          >
            {loading ? (
              <Spinner size="sm" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            Confirm info
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmitProjectInfo)}
          className="flex-1 flex flex-col items-center justify-center bg-white w-full rounded-xl shadow-md p-6 gap-3"
        >
          <div className="flex flex-col w-full gap-1 justify-center items-center mb-1">
            <p className="text-4xl">🏗</p>
            <h1 className="text-2xl font-semibold">Project details</h1>
            <p className="text-gray-600 font-sans font-light text-center text-base">
              Tell us a bit about your project
            </p>
          </div>
          <div className="flex flex-col w-full gap-1 mb-1">
            <p className="font-sans font-light text-sm">
              1. Do you own a lot you plan on building on?
            </p>
            <div className="flex items-center gap-3 ml-3">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="yes_lot"
                  name="hasLot"
                  value={true}
                  {...register("hasLot")}
                />
                <label htmlFor="hasLot" className="text-sm">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="no_lot"
                  name="hasLot"
                  value={false}
                  {...register("hasLot")}
                />
                <label htmlFor="hasLot" className="text-sm">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 mb-1">
            <p className="font-sans font-light text-sm">
              2. Do you already have house plans drawn?
            </p>
            <div className="flex items-center gap-3 ml-3">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="yes_plans"
                  name="hasPlans"
                  value={true}
                  {...register("hasPlans")}
                />
                <label htmlFor="hasPlans" className="text-sm">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="no_plans"
                  name="hasPlans"
                  value={false}
                  {...register("hasPlans")}
                />
                <label htmlFor="hasPlans" className="text-sm">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 mb-1">
            <p className="font-sans font-light text-sm">
              3. Are you currently working with a realtor?
            </p>
            <div className="flex items-center gap-3 ml-3">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="yes_realtor"
                  name="hasRealtor"
                  value={true}
                  {...register("hasRealtor")}
                />
                <label htmlFor="hasRealtor" className="text-sm">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="no_realtor"
                  name="hasRealtor"
                  value={false}
                  {...register("hasRealtor")}
                />
                <label htmlFor="hasRealtor" className="text-sm">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 mb-1">
            <p className="font-sans font-light text-sm">
              4. What is the budget for your project?
            </p>
            <div className="flex items-center ml-3 gap-1 w-full">
              <p>$</p>
              <input
                type="number"
                placeholder="Project budget"
                name="budget"
                className="text-sm bg-gray-100 p-2 rounded-lg"
                {...register("budget")}
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 mb-1">
            <p className="font-sans font-light text-sm">
              5. How soon are you looking to get started?
            </p>
            <div className="flex items-center gap-3 ml-3">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="lt_one_month"
                  name="timeline"
                  value="< 1 month"
                  {...register("timeline")}
                />
                <label htmlFor="timeline" className="text-sm font-sans">
                  &lt; 1 month
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="one_to_three"
                  name="timeline"
                  value="1 - 3 months"
                  {...register("timeline")}
                />
                <label htmlFor="timeline" className="text-sm font-sans">
                  1 - 3 months
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="unsure"
                  name="timeline"
                  value="Not sure"
                  {...register("timeline")}
                />
                <label htmlFor="timeline" className="text-sm font-sans">
                  Not sure
                </label>
              </div>
            </div>
          </div>

          <button
            className="mt-3 bg-gradient-to-br from-indigo-600 to-indigo-700 w-full py-3 rounded-full text-white font-semibold flex items-center justify-center shadow-md gap-1"
            type="Submit"
          >
            {loading ? (
              <Spinner size="sm" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            Submit project details
          </button>
        </form>
      )}
    </div>
  );
};
export default Onboarding;
