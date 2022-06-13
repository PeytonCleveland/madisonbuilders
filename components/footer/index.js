import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 container -mt-1 flex flex-col py-8 justify-between">
      <div className="flex w-full">
        <div className="flex flex-1 flex-col">
          <div>
            <Image
              src="/madison-builders-dark.png"
              width={145}
              height={35}
              alt="Madison Builders"
            />
          </div>
          <Link href="mailto:peyton@madisonbuilders.llc" passHref>
            <a className="text-xs text-white mt-2 mb-0.5">
              peyton@madisonbuilders.llc
            </a>
          </Link>
          <Link href="mailto:peyton@madisonbuilders.llc" passHref>
            <a className="text-xs text-white">334.782.9357</a>
          </Link>
          <p className="text-white text-sm font-sans mt-3 mb-2 font-semibold">
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
            <Link href="https://facebook.com/madisonbuilders" passHref>
              <a>
                <Image
                  src="/instagram.png"
                  width={24}
                  height={24}
                  alt="facebook"
                />
              </a>
            </Link>
            <Link href="https://facebook.com/madisonbuilders" passHref>
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
          <p className="text-white text-sm font-sans mt-3 font-light">
            License #26995
          </p>
          <Link
            href="https://alhobprod.glsuite.us/GLSuiteWeb/Clients/ALHOB/Public/LicenseeDetails.aspx?EntityID=1233330"
            passHref
          >
            <a className="mb-4 text-teal-300 flex items-center text-sm font-sans mt-0.5">
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
        <div className="flex flex-1 flex-col pl-12">
          <h4 className="text-teal-300">Quick Links</h4>
          <Link href="/" passHref>
            <a className="text-white text-sm font-sans my-1">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-white text-sm font-sans my-1">About</a>
          </Link>
          <Link href="/process" passHref>
            <a className="text-white text-sm font-sans my-1">Process</a>
          </Link>
          <Link href="/work" passHref>
            <a className="text-white text-sm font-sans my-1">Work</a>
          </Link>
          <Link href="/blog" passHref>
            <a className="text-white text-sm font-sans my-1">Blog</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="text-white text-sm font-sans my-1">Contact</a>
          </Link>
          <Link href="/client-portal" passHref>
            <a className="text-white text-sm font-sans my-1">Client Portal</a>
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-12 mb-5 flex justify-center gap-6">
          <Image
            src="/2-10.png"
            width={47}
            height={47}
            alt="2-10 Home Warranty"
          />
          <Image
            src="/eho.png"
            width={54}
            height={54}
            alt="Equal Housing Opportunity"
            className="ml-1"
          />
        </div>
        <h5 className="text-center text-indigo-200 text-xs">
          Copyright Madison Builders, LLC <br />
          &copy; {new Date().getFullYear()}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
