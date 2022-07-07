import { useForm } from "react-hook-form";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Spinner } from "../components";
import Head from "next/head";
import Script from "next/script";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  let timeoutId = null;

  const buttonStyle = showSuccessMessage
    ? "mt-1 bg-gradient-to-br from-green-600 to-green-700 w-full py-3 rounded-full text-white text-lg font-medium flex items-center justify-center shadow-md gap-2"
    : "mt-1 bg-gradient-to-br from-indigo-700 to-indigo-800 w-full py-3 rounded-full text-white text-lg font-medium flex items-center justify-center shadow-md gap-2";

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
    setShowSuccessMessage(true);
    setTimeout(clearSuccessMessage, 3000);
  };

  const cancelTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const clearSuccessMessage = () => {
    setShowSuccessMessage(false);
  };
  return (
    <>
      <Head>
        <title>Madison Builders - Contact Us</title>
        <meta type="og:title" content="Madison Builders - Contact Us" />
        <meta
          type="og:description"
          content="Madison Builders is Alabama's premier custom home builder, focused on utilizing the latest in building science to construct high-performing, energy-efficient homes."
        />
        <meta type="og:author" content="Peyton Cleveland" />
        <meta type="og:url" content="https://madisonbuilders.com" />
        <meta
          type="og:image"
          content="https://madisonbuilders.com/madison-builders.png"
        />
        <meta type="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@madisonbuilders" />
        <meta name="twitter:creator" content="@madisonbuilders" />
        <meta name="twitter:title" content="Madison Builders" />
        <meta
          name="twitter:description"
          content="Madison Builders is Alabama's premier custom home builder, focused on utilizing the latest in building science to construct high-performing, energy-efficient homes."
        />
        <meta
          name="twitter:image"
          content="https://madisonbuilders.com/madison-builders.png"
        />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-177583514-1" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-177583514-1');
                  `
        }}
      />
      <div className="container w-full flex flex-col pt-36 pb-16">
        <h1 className="text-gray-900 font-medium text-2xl">
          We&apos;d love to hear from you,
          <br />
          let&apos;s chat! 👋
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
          <button className={buttonStyle} type="Submit">
            {showSuccessMessage
              ? "Message sent"
              : loading
              ? "Sending your message"
              : "Send your message"}
            {showSuccessMessage ? (
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
            ) : loading ? (
              <Spinner size="sm" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
      <div className="container w-full bg-gradient-to-br from-indigo-700 to-indigo-800 flex flex-col py-8 gap-3">
        <h2 className="text-white text-2xl font-medium">Contact info</h2>
        <div className="flex items-center gap-3">
          <div className="bg-indigo-900 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <a href="tel:3347885522" className="text-white text-lg font-light">
            (334) 788-5522
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-indigo-900 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <a
            href="mailto:contact@madisonbuilders.llc"
            className="text-white text-lg font-light"
          >
            contact@madisonbuilders.llc
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
