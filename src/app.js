import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/home.jsx';

function App() {
  return (
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
}

export default App;
