import React, { useState } from "react"
import AppRouter from "components/Router";
import { authService } from "fbase";


/** 
 * App.js 가 이 Application의 모든 Logic을 담당 한다. 
 * 
*/
function App() {
  // console.log(authService.currentUser)
  const auth = authService;

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser) ;
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer> &copy; {new Date().getFullYear()} Jaypark </footer>
    </>
  );
}

export default App;
