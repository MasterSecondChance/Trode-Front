import React, { useState } from 'react';
import '../assets/styles/containers/App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inbox from '../pages/Inbox';
import ProfileSettings from '../pages/ProfileSettings';
import UploadClothes from '../pages/UploadClothes';
import ModifyClothe from '../pages/ModifyClothe';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';
import User from '../components/User/User';
import FirstStep from '../components/Sign/FirstStep';
import DataProvider from '../utils/DataContext';

function App() {

  return (

    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/firststep' component={FirstStep} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/details/:articleId' component={Details} />
          <Route exact path='/user' component={User} />
          <Route exact path='/inbox' component={Inbox} />
          <Route exact path='/settings' component={ProfileSettings} />
          <Route exact path='/modify/:articleId' component={ModifyClothe} />
          <Route exact path='/upload' component={UploadClothes} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
