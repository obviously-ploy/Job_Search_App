import { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const useFetchUserData = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userRefs = collection(db, "users");
        const q = query(userRefs, where("email", "==", currentUser.email));

        const querySnapshot = await getDocs(q);
        const userDocs = querySnapshot.docs.map((doc) => doc.data());

        setUserData(userDocs);
      }
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return { userData, error, isLoading };
};

export default useFetchUserData;
