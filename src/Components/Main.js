import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashBoard from './DashBoard';
import  Login from './Account/login';
import Register from './Account/register';
import useToken from  "./common/useToken";

export default function Main() {

     const [token, setToken] = useToken("");

     useEffect(function(){
       console.log("token state changes");
       console.log(token);
     },[token])
     
     if(!token){
          const LoginPage = ()=>{
               return(<Login setToken={setToken}/>);
          }
          const RegisterPage = ()=>{
               return(<Register setToken={setToken}/>);
          }
          return (
               <div>
               <BrowserRouter>
                         <Switch>
                                 <Route exact path = "/" component={LoginPage}/>
                                 <Route exact path = "/register" component={RegisterPage}/>
                         </Switch>
                 </BrowserRouter>
          </div> 
          );
     }
     return(<div>
          <BrowserRouter>
                    <Switch>
                        <Route path = "/" component={DashBoard}/>
                            <Route exact path = "/login" component={Login}/>
                            <Route exact path = "/register" component={Register}/>
                    </Switch>
            </BrowserRouter>
     </div>);
}
