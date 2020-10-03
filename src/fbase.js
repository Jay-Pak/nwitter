import * as firebase from "firebase/app";
import "firebase/auth"
// npx create-react-app 으로 만든 app은 env를 쓸때 무조건 [REACT_APP]의 prefix를 써줘야 함. 

const firebaseConfig = {
    apiKey:             process.env.REACT_APP_API_KEY                   ,
    authDomain:         process.env.REACT_APP_AUTH_DOMAIN               ,
    databaseURL:        process.env.REACT_APP_DATABASE_URL              ,
    projectId:          process.env.REACT_APP_PROJECT_ID                ,
    storageBucket:      process.env.REACT_APP_STORAGE_BUCKET                      ,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID                 ,
    appId:              process.env.REACT_APP_APP_ID
  };
  
firebase.initializeApp(firebaseConfig);
//  해당 Service 만 Export

export const authService = firebase.auth();