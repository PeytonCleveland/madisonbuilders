import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import Image from "next/image";
import "rc-slider/assets/index.css";
import timeSince from "../utils/time-since";
import Head from "next/head";
import Script from "next/script";

const Home = () => {
  const blogPosts = [
    {
      title:
        "Be A Pioneer In The Home Building Industry. Here's What You'll Need.",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "5 Common Mistakes Everyone Makes In Home Building.",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Blog Post 3",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Blog Post 4",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Blog Post 5",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Blog Post 6",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const [mortgage, setMortgage] = useState({
    amount: 350_000,
    rate: 4.5,
    term: 30,
    downPayment: 25_000,
  });

  const calculatePayment = () => {
    const apr = mortgage.rate / 1_200;
    const term = mortgage.term * 12;
    const loanAmount = mortgage.amount - mortgage.downPayment;
    const tax = (loanAmount * 0.0033) / 12;
    const insurance = (loanAmount * 0.0067) / 12;
    const payment =
      (loanAmount * (apr * Math.pow(1 + apr, term))) /
      (Math.pow(1 + apr, term) - 1);
    return payment + tax + insurance;
  };

  const [payment, setPayment] = useState(calculatePayment);

  useEffect(() => {
    setPayment(calculatePayment);
  }, [mortgage]);

  return (
    <>
      <Head>
        <title>Madison Builders</title>
        <meta type="og:title" content="Madison Builders" />
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
                  `,
        }}
      />
      <div className="container pt-[200px] bg-white">
        <div className="flex flex-col justify-end md:w-5/12 h-full md:items-start">
          <h1 className="text-indigo-800 text-3xl md:text-[40px] md:leading-[44px] mb-2">
            Alabama&apos;s Premier <br />
            <strong>Custom Home Builder</strong>
          </h1>
          <h2 className="text-gray-700 font-sans font-light text-sm md:text-base md:pr-12">
            We specialize in constructing the most high performing, energy
            efficient custom homes in Alabama
          </h2>
          <div className="flex mt-6 mb-32 md:mb-14">
            <Link href="/process" passHref>
              <a className="flex flex-1 mr-2 whitespace-nowrap justify-center items-center border-2 border-indigo-700 text-indigo-700 px-5 md:px-6 py-[5px] font-semibold text-lg md:text-xl rounded-full hover:bg-indigo-100 hover:scale-105 duration-150 shadow-md">
                Our Process
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="flex flex-1 ml-2 whitespace-nowrap justify-center items-center bg-gradient-to-br from-indigo-700 to-indigo-800 text-white px-5 md:px-6 py-[5px] font-semibold text-lg md:text-xl  rounded-full hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
                Let&apos;s Talk{" "}
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
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-screen bg-gradient-to-br from-indigo-700 to-indigo-800 lg:pb-12 relative">
        <div className="container flex flex-col justify-center">
          <iframe
            width="560"
            height="315"
            className="w-full h-[201px] -mt-16 mb-6 rounded-lg md:w-1/2 md:self-end md:h-[315px] md:-mt-[260px]"
            src="https://www.youtube.com/embed/2s0zEChGQKM?autoplay=1&mute=1&enablejsapi=1"
            title="Brownstone Home"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="text-white text-xl md:text-3xl mb-2 md:w-1/2">
            Discover <strong>Our Difference</strong>
          </h3>
          <p className="text-gray-200 font-light font-sans text-sm md:text-base mb-6 lg:pr-2 md:w-1/2">
            Madison Builders is a custom home builder that is dedicated to
            utilizing the finest materials and best practices that building
            science has to offer. We pride ourselves on building beautiful,
            high-performing homes that will last for generations to come.
          </p>
          <button className="w-fit bg-white text-indigo-900 px-5 md:px-6 py-[5px] font-semibold text-lg md:text-xl rounded-full mb-10 hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
            Learn more
          </button>
        </div>
        <div className="absolute right-0 -bottom-[7px]">
          <Image src="/home.png" width={370} height={370} alt="house" />
        </div>
      </div>

      <div className="w-screen bg-gradient-to-br from-indigo-100 to-indigo-200 py-10">
        <div className="container flex flex-col">
          <h3 className="text-indigo-900 text-xl lg:text-3xl mb-2">
            Our <strong>Process</strong>
          </h3>
          <p className="text-gray-800 font-light font-sans text-sm lg:text-base mb-6 pr-8">
            Discover how Madison Builders turns your dream home into a reality.
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-indigo-900">01</h4>
            </div>
            <h3 className="text-xl text-indigo-900">
              Determine your <strong>budget</strong>
            </h3>
          </div>
          <p className="text-gray-800 font-light pr-6 font-sans text-sm mt-2 ml-[54px] mb-8">
            Determine the budget for your custom build. If you do not yet have a
            lot, be sure to consider the cost of land when determining your
            budget. Use our{" "}
            <a
              className="text-indigo-600 font-semibold text-sm"
              href="#calculator"
            >
              mortgage calculator
            </a>{" "}
            below to estimate your monthly payment.
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-indigo-900">02</h4>
            </div>
            <h3 className="text-xl text-indigo-900">
              Select your <strong>land</strong>
            </h3>
          </div>
          <p className="text-gray-800 font-light font-sans text-sm mt-2 ml-[54px] mb-8">
            If you have a lot that you intend to build on, we&apos;ll need the
            lot information. If you need a lot, reach out to our realtor friends
            at&nbsp;
            <a
              className="text-indigo-600 font-semibold text-sm"
              href="https://myriverrockrealty.com/staff/meagan-thrash-2/"
            >
              Exit River Rock Realty.
            </a>
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-indigo-900">03</h4>
            </div>
            <h3 className="text-xl text-indigo-900">
              Choose your <strong>houseplan</strong>
            </h3>
          </div>
          <p className="text-gray-800 font-light font-sans pr-4 text-sm mt-2 ml-[54px] mb-8">
            We are an{" "}
            <a
              className="text-indigo-600 font-semibold text-sm"
              href="https://www.architecturaldesigns.com/"
            >
              Architectural Designs
            </a>{" "}
            builder partner, giving us access to over 30k houseplans for you to
            choose from. Browse our selection to find your dream plan, or bring
            your own!
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-indigo-900">04</h4>
            </div>
            <h3 className="text-xl text-indigo-900">
              Select your <strong>finishes</strong>
            </h3>
          </div>
          <p className="text-gray-800 font-light pr-4 font-sans text-sm mt-2 ml-[54px] mb-8">
            Utilize our client portal to choose the finishes for your home.
            We&apos;ll use the details you provide to create a customized
            estimate to build your home.
          </p>
          <div className="flex items-center">
            <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
              <h4 className="text-xl text-indigo-900">05</h4>
            </div>
            <h3 className="text-xl text-indigo-900">
              Start your <strong>build</strong>
            </h3>
          </div>
          <p className="text-gray-800 font-light pr-6 font-sans text-sm mt-2 ml-[54px] mb-8">
            When you are ready to build, use our client portal to schedule a
            date to sign your new construction contract. After that, we&apos;ll
            get started and bring your dream home to life!
          </p>
        </div>
      </div>

      <div className="w-screen bg-gradient-to-br from-gray-800 to-gray-900 pt-8 lg:py-12">
        <div className="container flex flex-col">
          <h3 className="text-white text-xl lg:text-3xl mb-2">
            Unmatched <strong>Transparency</strong>
          </h3>
          <p className="text-gray-200 font-light font-sans text-sm lg:text-base mb-4 pr-8">
            Madison Builders&apos; client portal allows unparalleled
            transparency into the homebuilding process.
          </p>
          <Link href="/client-portal" passHref>
            <a className="mb-4 text-teal-300 flex items-center text-sm lg:text-base font-sans">
              Explore client portal
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
            </a>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 mt-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-white mb-3">
                Choose finishes <strong>for your home</strong>
              </h3>
              <div className="w-full h-52 mb-8 flex relative">
                <Image
                  src="/finishes.png"
                  alt="finishes"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white mb-3">
                Make change orders <strong>in minutes</strong>
              </h3>
              <div className="w-full h-52 bg-gray-600 mb-8"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white mb-3">
                Easily track <strong>updates and expenses</strong>
              </h3>
              <div className="w-full h-52 bg-gray-600 -mb-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-20 pb-10" id="calculator">
        <h3 className="text-indigo-900 text-xl mb-2">
          Mortgage <strong>Calculator</strong>
        </h3>
        <p className="text-gray-800 font-light font-sans text-sm mb-4 pr-8">
          Find out how much home you can afford.
        </p>
        <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
          Mortgage Amount
        </label>
        <input
          type="text"
          value={`$${mortgage.amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          onChange={(e) =>
            setMortgage({
              ...mortgage,
              amount:
                parseInt(
                  e.target.value.replace(/,/g, "").replace(/\$/g, ""),
                  10
                ) || 0,
            })
          }
          className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300 mb-4"
        />
        <Slider
          min={200000}
          max={1000000}
          step={5000}
          value={mortgage.amount}
          onChange={(value) =>
            setMortgage({ ...mortgage, amount: parseInt(value, 10) })
          }
          trackStyle={{ backgroundColor: "#6366f1" }}
          handleStyle={{
            backgroundColor: "white",
            border: "none",
            boxShadow: "0 0 0 2px #312e81",
            opacity: 1,
            height: "12px",
            width: "12px",
            marginTop: "-4px",
          }}
        />
        <div className="flex items-center mt-4 mb-5">
          <div className="flex flex-col w-2/3 mr-6">
            <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
              Loan Term
            </label>
            <select
              className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300"
              value={mortgage.term}
              onChange={(e) =>
                setMortgage({ ...mortgage, term: e.target.value })
              }
            >
              <option value="30">30 Years</option>
              <option value="15">15 Years</option>
              <option value="10">10 Years</option>
            </select>
          </div>

          <div className="flex flex-col w-1/3">
            <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
              Interest Rate
            </label>
            <div className="flex items-center relative">
              <input
                type="text"
                value={mortgage.rate}
                onChange={(e) =>
                  setMortgage({
                    ...mortgage,
                    rate: e.target.value,
                  })
                }
                className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300 group"
              />
              <h4 className="text-lg text-gray-500 font-sans rounded-r-lg h-10 flex items-center absolute right-3">
                %
              </h4>
            </div>
          </div>
        </div>

        <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
          Down Payment
        </label>
        <input
          type="text"
          value={`$${mortgage.downPayment
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          onChange={(e) =>
            setMortgage({
              ...mortgage,
              downPayment:
                parseInt(
                  e.target.value.replace(/,/g, "").replace(/\$/g, ""),
                  10
                ) || 0,
            })
          }
          className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300 mb-4"
        />
        <Slider
          min={0}
          max={mortgage.amount}
          step={5000}
          value={mortgage.downPayment}
          onChange={(value) =>
            setMortgage({ ...mortgage, downPayment: parseInt(value, 10) })
          }
          trackStyle={{ backgroundColor: "#6366f1" }}
          handleStyle={{
            backgroundColor: "white",
            border: "none",
            boxShadow: "0 0 0 2px #312e81",
            opacity: 1,
            height: "12px",
            width: "12px",
            marginTop: "-4px",
          }}
        />

        <div className="bg-indigo-100 p-5 pt-[19px] rounded-md mt-6 shadow-md flex flex-col items-center">
          <label className="block text-indigo-900 text-sm mb-1">
            Estimated Monthly Payment
          </label>
          <h5 className="text-4xl">
            $
            {payment
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
        </div>
      </div>

      {false && (
        <div className="bg-gradient-to-br from-indigo-700 to-indigo-800 w-full container pt-12 pb-14">
          <h3 className="text-white text-xl mb-4">
            Explore Our <strong>Blog</strong>
          </h3>
          <div className="snap-x mx-auto snap-mandatory flex w-full overflow-scroll">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="snap-start bg-indigo-200 w-3/4 flex-shrink-0 h-[330px] mr-6 flex flex-col items-center justify-between shadow-md rounded-lg overflow-hidden"
              >
                <div className="flex w-full h-40 min-h-[160px] relative">
                  <Image src={post.image} layout="fill" alt="blog post" />
                </div>
                <div className="flex flex-col w-full h-full p-5 justify-between">
                  <div className="flex flex-col">
                    <h4 className="text-base">{post.title}</h4>
                    <p className="text-xs text-gray-700 font-sans">
                      {timeSince(post.date)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-indigo-900 font-semibold mr-2">
                      Tags:
                    </p>
                    <p className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-md flex items-center mr-1">
                      Smart Home
                    </p>
                    <p className="text-xs font-sans">+3 More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
