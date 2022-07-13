import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  const resQuery = req.query;
  const { planNumber } = resQuery;

  const q = query(
    collection(db, "plans"),
    where("planNumber", "==", planNumber)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.length === 0) res.status(404);

  res.status(200).json(querySnapshot[0].data());
}
