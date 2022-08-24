import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc,} from "firebase/firestore";


const FirebaseConfig = {
 apiKey: "AIzaSyBAFj-wFoWGJyrsTMgdy-P8venxs4eQI5M",
 authDomain: "crown-clothing-739cd.firebaseapp.com",
 projectId: "crown-clothing-739cd",
 storageBucket: "crown-clothing-739cd.appspot.com",
 messagingSenderId: "691611465858",
 appId: "1:691611465858:web:22b84672deb6e299dfdc9b",
 measurementId: "G-Y8BSVBDZE1"
};

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
 try {
   const res = await signInWithPopup(auth, googleProvider);
   const user = res.user;
   const q = query(collection(db, "users"), where("uid", "==", user.uid));
   const docs = await getDocs(q);
   if (docs.docs.length === 0) {
     await addDoc(collection(db, "users"), {
       uid: user.uid,
       name: user.displayName,
       authProvider: "google",
       email: user.email,
     });
   }
 } catch (err) {
   console.error(err);
   alert(err.message);
 }
};

export {auth,db,signInWithGoogle};