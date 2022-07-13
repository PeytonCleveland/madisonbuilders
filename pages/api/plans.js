import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  const {
    query: { planNumber }
  } = req;

  const q = query(
    collection(db, "plans"),
    where("planNumber", "==", planNumber)
  );

  const querySnapshot = await getDocs(q);
  const plan = querySnapshot.docs[0].data();

  plan.length === 0 ? res.status(404) : res.status(200).json(plan);
}
