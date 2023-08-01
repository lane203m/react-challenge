import React from 'react';
import { useMemo } from 'react';

import Modal from 'react-modal';

import { ToastContainer } from 'react-toastify';

import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
} from './Routes';

import { useTheme } from 'styled-components';
import { useWindowSize } from 'utils/windowSize/useWindowSize';
import  HomePage from 'pages/homePage/HomePage';

import { IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

Modal.setAppElement('#root');

library.add(fas as IconPack, fab as IconPack);

const App = () => {
  const history = useHistory();
  const theme = useTheme();
  const [width, height] = useWindowSize();
  const location = useLocation();

  const appStyleProps = useMemo(() => ({ height: height, width: '100%' }), [height]);

  return (
    <div style={appStyleProps}>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE}>
          <HomePage />
        </Route>
      </Switch>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default App;
