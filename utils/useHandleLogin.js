import { useState } from 'react';
import { auth} from "../firebaseConfig";
import useValidateLogin from "./useValidateLogin";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'expo-router';


const useHandleLogin = () => {
  const [inputErrors, setInputErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  auth.onAuthStateChanged(user => {
    if(user){
      router.push("../../userHome/HomeScreen")
    }
  } )

  const handleLogin = async (email, password) => {
    const errors = useValidateLogin(email, password);
    setInputErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("../../userHome/HomeScreen")
      } catch (error) {
        setLoginError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { handleLogin, inputErrors, loginError, isLoading };
};

export default useHandleLogin;
