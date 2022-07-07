import { useForm } from "react-hook-form";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  let timeoutId = null;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ name, email, message }) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "contactMessages"), {
        created: new Date().toUTCString(),
        name: name,
        email: email,
        message: message
      });
    } catch (error) {
      console.log(error);
    }
    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
    setLoading(false);
  };

  const cancelTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  return (
    <div className="container w-full flex flex-col pt-36 pb-20">
      <h1 className="text-gray-900 font-medium text-2xl">
        We'd love to hear from you,
        <br />
        let's chat! 👋
      </h1>
      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label className="block text-gray-600 font-sans font-light text-sm">
            Your Name
          </label>
          <input
            {...register("name", { required: "Your name is required" })}
            placeholder="Jane Doe"
            onBlur={() => {
              timeoutId = setTimeout(function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 150);
            }}
            onFocus={cancelTimeout}
            className={
              errors.name
                ? "px-4 py-2 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow"
                : "px-4 py-2 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-600 font-sans font-light text-sm">
            Your Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Email@domain.com"
            type="email"
            onBlur={() => {
              timeoutId = setTimeout(function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 150);
            }}
            onFocus={cancelTimeout}
            className={
              errors.email
                ? "px-4 py-2 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow"
                : "px-4 py-2 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-600 font-sans font-light text-sm">
            Your Message
          </label>
          <textarea
            {...register("message", { required: "A message is required" })}
            placeholder="Leave your message here"
            onBlur={() => {
              timeoutId = setTimeout(function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 150);
            }}
            onFocus={cancelTimeout}
            className={
              errors.message
                ? "px-4 py-2 w-full rounded-lg bg-white border border-red-600 focus:outline-red-600 focus:border-red-600 shadow min-h-[150px]"
                : "px-4 py-2 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow min-h-[150px]"
            }
          />
        </div>
        <button
          className="mt-1 bg-gradient-to-br from-indigo-600 to-indigo-700 w-full py-3 rounded-full text-white text-lg font-semibold flex items-center justify-center shadow-md gap-2"
          type="Submit"
        >
          Send your message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Contact;
