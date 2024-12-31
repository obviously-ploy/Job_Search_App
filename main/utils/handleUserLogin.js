import { useState } from 'react';
import { auth} from "../firebaseConfig";
import validateUserLogin from "./validateUserLogin";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'expo-router';

const handleUserLogin = () => {
  const [inputErrors, setInputErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleLogin = async (email, password) => {
    const errors = validateUserLogin(email, password);
    setInputErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        router.push("../../userHome/HomeScreen");
      } catch (error) {
        setLoginError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { handleLogin, inputErrors, loginError, isLoading };
};

export default handleUserLogin;
