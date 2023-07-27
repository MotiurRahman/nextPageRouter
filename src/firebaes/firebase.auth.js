import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";
// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
