import { useState } from 'react';
import { Alert } from 'react-native';
import { auth, db } from "../firebaseConfig";
import validateUserSignUp from "./validateUserSignUp";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getCountFromServer } from 'firebase/firestore';
import { useRouter } from 'expo-router';

const handleUserSignUp = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [userCreationError, setUserCreationError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (fullName, email, phone, password, confirmPassword) => {
    const errors = validateUserSignUp(fullName, email, phone, password, confirmPassword);
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const coll = collection(db, "users")
        const snapshot = await getCountFromServer(coll)
        const userId = snapshot.data().count + 1
        const docref = await addDoc(coll, {
            fullName,
            email,
            phone,
            userId
        });
        Alert.alert('Success', 'Account created successfully');
        router.push("../../login/LoginScreen")
      } catch (error) {
        console.log(error.message)
        setUserCreationError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { handleSignUp, validationErrors, userCreationError, isLoading };
};

export default handleUserSignUp;
