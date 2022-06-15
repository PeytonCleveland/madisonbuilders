import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Onboarding = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setValue("firstName", session.userData.firstName || "");
      setValue("lastName", session.userData.lastName || "");
      setValue("email", session.userData.email || "");
      setValue("phoneNumber", session.userData.phoneNumber || "");
    }
  }, [session]);

  const onSubmit = async ({ firstName, lastName, email, phoneNumber }) => {
    // if data from form is different from session data, update firebase
    if (
      session.userData.firstName !== firstName ||
      session.userData.lastName !== lastName ||
      session.userData.email !== email ||
      session.userData.phoneNumber !== phoneNumber
    ) {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", session.userData.email));
      const querySnapshot = await getDocs(q);
      const id = querySnapshot.docs[0].id;
      const userRef = doc(db, "users", id);
      try {
        await updateDoc(userRef, {
          onboarded: true,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber
        });
      } catch (e) {
        console.log(e);
      }
      session.userData.firstName = firstName;
      session.userData.lastName = lastName;
      session.userData.email = email;
      session.userData.phoneNumber = phoneNumber;
    }
    session.userData.onboarded = true;
    router.push("/client-portal");
  };

  return (
    <div className="flex items-center bg-gradient-to-br from-gray-200 to-gray-300 h-screen container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 flex flex-col items-center justify-center bg-white w-full rounded-xl shadow-md p-6 gap-4"
      >
        <div className="flex flex-col w-full gap-1 justify-center items-center mb-1">
          <p className="text-4xl">👋🏼</p>
          <h1 className="text-2xl font-semibold">
            Welcome {session?.userData.firstName}!
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
            onBlur={async () => {
              await new Promise((resolve) => setTimeout(resolve, 100));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
            onBlur={async () => {
              await new Promise((resolve) => setTimeout(resolve, 100));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
            onBlur={async () => {
              await new Promise((resolve) => setTimeout(resolve, 100));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
            onBlur={async () => {
              await new Promise((resolve) => setTimeout(resolve, 100));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
          Confirm info
        </button>
      </form>
    </div>
  );
};
export default Onboarding;
