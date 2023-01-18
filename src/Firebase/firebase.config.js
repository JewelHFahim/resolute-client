import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBguEAmyKTRg1GyebK63RFyKtT3ITIb1sA",
  authDomain: "crud-job-task.firebaseapp.com",
  projectId: "crud-job-task",
  storageBucket: "crud-job-task.appspot.com",
  messagingSenderId: "684480602835",
  appId: "1:684480602835:web:0548b78bf9bc5e2535aa26"
};

const app = initializeApp(firebaseConfig);
export default app;