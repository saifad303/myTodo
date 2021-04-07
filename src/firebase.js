import firebase from "firebase/app";
import "firebase/database";

let app = firebase.initializeApp({
  apiKey: "AIzaSyDg9tTThFneJws4n8dJHJjsSkSm-HBHVRY",
  authDomain: "crudreact-ee4a9.firebaseapp.com",
  databaseURL: "https://crudreact-ee4a9-default-rtdb.firebaseio.com",
  projectId: "crudreact-ee4a9",
  storageBucket: "crudreact-ee4a9.appspot.com",
  messagingSenderId: "258786023918",
  appId: "1:258786023918:web:d7c575b47c1d1d394216ff",
});

export const database = app.database();

export default app;
