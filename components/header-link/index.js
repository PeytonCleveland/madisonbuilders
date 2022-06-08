import Link from "next/link";
import { useRouter } from "next/router";

const HeaderLink = ({ text, href, active = false }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  console.log(router.pathname, href);
  const className =
    isActive || active
      ? "text-indigo-900 font-semibold text-lg ml-16 my-0 self-center"
      : "text-gray-500 font-semibold text-lg ml-16 my-0 self-center hover:text-indigo-900/80";
  return (
    <Link href={href} passHref>
      <a className={className}>{text}</a>
    </Link>
  );
};

export default HeaderLink;
