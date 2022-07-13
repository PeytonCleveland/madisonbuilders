const Plan = ({ plan }) => {
  return (
    <div className="container flex flex-col w-full pt-36 pb-12">
      {plan.planNumber}
    </div>
  );
};

export default Plan;

export async function getServerSideProps(context) {
  const query = context.query;
  const plan = await fetch(
    `http://localhost:3000/api/plans?planNumber=${query.plan}`
  );
  return {
    props: { plan: await plan.json() }
  };
}
