import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDwkGGE9uBlz8e8Pyk5HQFkG8IYn-Epod8",
    authDomain: "movies-site-75f88.firebaseapp.com",
    projectId: "movies-site-75f88",
    storageBucket: "movies-site-75f88.appspot.com",
    messagingSenderId: "689744845737",
    appId: "1:689744845737:web:2928e15d8de02a2ad282b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// ​​const auth = getAuth(app);
// const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();

// export const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };