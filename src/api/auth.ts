import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "./firebaseConfig"; 


export const RegisterAPI = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(userCredential?.user, { displayName: name });
  
      return userCredential;
    } catch (error:any) {
      alert(error?.message);
      throw error;
    }
  };

  export const LoginAPI = (email:string, password:string) => {
    try {
      const response = signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (err:any) {
      alert(err.message);
      throw err;
    }
  };
