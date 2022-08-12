import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdb6ysVvim5UwB6Jx36mgxhB0c3lj6RUM",
  authDomain: "tailwind-task.firebaseapp.com",
  projectId: "tailwind-task",
  storageBucket: "tailwind-task.appspot.com",
  messagingSenderId: "519765893022",
  appId: "1:519765893022:web:4f148d76a29038ab80c08f",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
