import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

export default async function handler(req, res) {
  const querySnapshot = await getDocs(collection(db, "plans"));

  res.status(200).json(querySnapshot.docs.map((doc) => doc.data()));
}
