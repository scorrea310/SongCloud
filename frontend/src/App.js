import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SignUpFormModal from "./components/SignUpformModal";
import { useSelector } from 'react-redux';
import UpLoadSong from "./components/UploadSong";
import MySongs from "./components/MySongs";

function App() {

  // use selector is what gives you acess to data stored in the redux store!!!!
  const sessionUser = useSelector(state => state.session.user);


  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // if there is user session ins store, then we make sessionLinks true
  let sessionLinks;
  if (sessionUser) sessionLinks = true

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && sessionLinks && (
        <Switch>
          <Route exact path="/mysongs">
            <MySongs />
          </Route>
          <Route path="/upload">
            <UpLoadSong />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
