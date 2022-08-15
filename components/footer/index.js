import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 -mt-1">
      <div className="container flex flex-col py-8 lg:pt-10 lg:pb-4 justify-between">
        <div className="flex w-full">
          <div className="flex flex-1 flex-col gap-2">
            <div className="block lg:hidden">
              <Image
                src="/madison-builders-dark.png"
                width={145}
                height={34}
                alt="Madison Builders"
                lazyBoundary="450px"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/madison-builders-dark.png"
                width={205}
                height={47}
                alt="Madison Builders"
                lazyBoundary="450px"
              />
            </div>
            <Link href="mailto:peyton@madisonbuilders.llc" passHref>
              <a className="text-xs lg:text-base text-white">
                contact@madisonbuilders.llc
              </a>
            </Link>
            <Link href="tel:3347885522" passHref>
              <a className="text-xs lg:text-base text-white">334.788.5522</a>
            </Link>
            <p className="text-white text-sm font-sans mb-2 font-semibold">
              Follow us!
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com/madisonbuilders" passHref>
                <a>
                  <Image
                    src="/facebook.png"
                    width={24}
                    height={24}
                    alt="facebook"
                  />
                </a>
              </Link>
              <Link href="https://www.instagram.com/madisonbuilders/" passHref>
                <a>
                  <Image
                    src="/instagram.png"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </a>
              </Link>
              <Link
                href="https://www.linkedin.com/company/madison-builders"
                passHref
              >
                <a>
                  <Image
                    src="/linkedin.png"
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </a>
              </Link>
            </div>
            <p className="text-white text-sm lg:text-base font-sans mt-3 lg:mt-4 font-light">
              License #26995
            </p>
            <Link
              href="https://alhobprod.glsuite.us/GLSuiteWeb/Clients/ALHOB/Public/LicenseeDetails.aspx?EntityID=1233330"
              passHref
            >
              <a className="mb-4 text-teal-300 flex items-center text-sm lg:text-base font-sans">
                Click to verify
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
          </div>
          <div className="flex flex-1 flex-col pl-12 lg:pl-0 lg:hidden">
            <h4 className="text-teal-300">Quick Links</h4>
            <Link href="/" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Home
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                About
              </a>
            </Link>
            <Link href="/process" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Process
              </a>
            </Link>
            <Link href="/work" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Work
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Blog
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Contact
              </a>
            </Link>
            <Link href="/client-portal" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Client Portal
              </a>
            </Link>
          </div>
          <div className="lg:flex flex-1 flex-col pl-12 lg:pl-28 hidden">
            <h4 className="text-teal-300">Company</h4>
            <Link href="/" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Home
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                About
              </a>
            </Link>
            <Link href="/process" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Process
              </a>
            </Link>
            <Link href="/work" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Work
              </a>
            </Link>
            <Link href="/plans" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Plans
              </a>
            </Link>
          </div>
          <div className="lg:flex flex-1 flex-col lg:pl-0 hidden">
            <h4 className="text-teal-300">Resources</h4>
            <Link href="/blog" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Blog
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                Contact
              </a>
            </Link>
            <Link href="/faq" passHref>
              <a className="text-white text-sm lg:text-base font-sans my-1">
                FAQs
              </a>
            </Link>
          </div>
          <div className="lg:flex w-[375px] h-[200px] flex-col bg-gradient-to-br from-indigo-100 to-indigo-200 hidden rounded-md py-4 px-6">
            <h5 className="text-xl text-gray-900">Join Our Newsletter!</h5>
            <p className="text-sm text-gray-600 font-sans font-light">
              Sign up to get notified when Madison Builders adds new plans,
              promotions, and more!
            </p>
            <input
              type="text"
              className="w-full border text-sm rounded-md px-4 py-2 mt-2"
              placeholder="Enter your email address"
            />
            <button className="w-full bg-gray-900 text-white text-sm rounded-md px-4 py-2 mt-2">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <div className="mt-12 lg:mt-2 mb-5 flex justify-center gap-6 lg:gap-10">
            <Image
              src="/2-10.png"
              width={47}
              height={47}
              alt="2-10 Home Warranty"
              lazyBoundary="450px"
            />
            <Image
              src="/eho.png"
              width={54}
              height={54}
              alt="Equal Housing Opportunity"
              className="ml-1"
              lazyBoundary="450px"
            />
          </div>
          <h5 className="text-center text-indigo-200 text-xs lg:sm">
            Copyright Madison Builders, LLC <br />
            &copy; {new Date().getFullYear()}
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
