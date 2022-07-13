const Plan = ({ plan }) => {
  return (
    <div className="container flex flex-col w-full pt-36 pb-12">{plan}</div>
  );
};

export default Plan;

export async function getServerSideProps(context) {
  const planNumber = context.query;
  const plan = await fetch(
    `https://madisonbuilders.llc/api/plans?planNumber=${planNumber}`
  );
  return {
    props: { plan: await plan.json() }
  };
}
