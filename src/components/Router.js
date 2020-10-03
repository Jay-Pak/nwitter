import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ( { isLoggedIn } ) => {
        
        return (
            <Router >
                <Switch>
                    {
                        // is Log in? 
                        isLoggedIn ? 
                        <>  {/* 
                                Tag Name이 없는 것은 Fragment라 한다. 앞서 Dom Tag (eg. div나 span 과 같은...?? )를 붙이고 싶지 않을때 쓴다. 
                            */}
                                <Route exact path = "/">
                                    {/* 
                                        if true then <Home> Page's Router 
                                    */}
                                    <Home />
                                </Route>
                        </>:    
                        <>
                                <Route exact path = "/">
                                    {/* 
                                        else if true then <Auth> Page's Router 
                                    */}
                                    <Auth /> 
                                </Route>
                        </>
                    }
                </Switch>
            </Router>
        )
    }

export default AppRouter;