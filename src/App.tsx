import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactGA from 'react-ga4';

import LoadingScreen from './pages/LoadingScreen';
import LoginPage from './pages/Login';
import DesktopPage from './pages/Desktop';

import { setDeployId } from './containers/Misc/slice';
import {
  currentPageSelector,
  deployIdSelector,
} from './containers/Misc/selectors';
import ScreenTypes from './types/screens';

//ReactGA.initialize(process.env.REACT_APP_GA_KEY);

const defaultPageToDesktop =
  process.env.REACT_APP_DEFAULT_PAGE_TO_DESKTOP == 'true';

function App() {
  const currentPage = useSelector(currentPageSelector);

  const dispatch = useDispatch();
  const deployId = useSelector(deployIdSelector);

  React.useEffect(() => {
    const currentDeployId = process.env.REACT_APP_DEPLOY_ID;

    dispatch(setDeployId(currentDeployId));
  }, [dispatch]);

  React.useEffect(() => {
    const storedDeployId = localStorage.getItem('deployId');

    if (deployId !== storedDeployId) {
      localStorage.clear();
      localStorage.setItem('deployId', deployId);
    }
  }, [deployId]);

  return currentPage === ScreenTypes.login && !defaultPageToDesktop ? (
    <LoginPage />
  ) : (
    <DesktopPage />
  );

  // return <LoadingScreen/>
}

export default App;
