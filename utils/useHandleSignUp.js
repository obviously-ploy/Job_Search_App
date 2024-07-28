import useValidateSignUp from "./useValidateSignUp";
import {auth, firestore} from "../firebaseConfig"

const useHandleSignUp = async (fullName, email, phone, password, confirmPassword) => {
    // console.log("\n FULL NAME: " + fullName)
    // console.log("EMAIL: " + email)
    // console.log("PHONE: " + phone)
    // console.log("PASSWORD: " + password)
    // console.log("CONFIRM PASSWORD: " + confirmPassword)

    let errors = useValidateSignUp(fullName, email, phone, password, confirmPassword)
    console.log(errors)

    // if (!useValidateSignUp()) return;

    // setLoading(true);
    // try {
    //   const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    //   const user = userCredential.user;
    //   await firestore.collection('users').doc(user?.uid).set({
    //     fullName,
    //     email,
    //     phone,
    //   });
    //   Alert.alert('Success', 'Account created successfully');
    // } catch (error) {
    //   Alert.alert('Error', error.message);
    // } finally {
    //   setLoading(false);
    // }
};

export default useHandleSignUp

