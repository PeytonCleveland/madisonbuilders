import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 container -mt-1 flex flex-col py-6 justify-between">
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
          <p className="text-white text-sm font-sans mt-3 mb-1.5 font-semibold">
            Follow us!
          </p>
          <div className="flex items-center gap-3">
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
                  src="/facebook.png"
                  width={24}
                  height={24}
                  alt="facebook"
                />
              </a>
            </Link>
          </div>
          <p className="text-white text-sm font-sans mt-2 font-light">
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
        <div className="flex flex-1">2</div>
      </div>
      <div>
        <div className="mt-10 mb-5 flex justify-center gap-6">
          <Image
            src="/2-10.png"
            width={47}
            height={47}
            alt="2-10 Home Warranty"
          />
          <Image
            src="/eho.png"
            width={53}
            height={53}
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
