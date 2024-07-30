import { useState } from 'react';
import { Alert } from 'react-native';
import { auth, db } from "../firebaseConfig";
import useValidateSignUp from "./useValidateSignUp";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const useHandleSignUp = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [userCreationError, setUserCreationError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (fullName, email, phone, password, confirmPassword) => {
    const errors = useValidateSignUp(fullName, email, phone, password, confirmPassword);
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const docref = await addDoc(collection(db, "users"), {
            fullName,
            email,
            phone
        });
        Alert.alert('Success', 'Account created successfully');
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

export default useHandleSignUp;
