
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import routers from './router.config';
export const MOBILE = 'mobile';
export const DESKTOP = 'desktop';
export const TABLET = 'tablet';


export default function App() {
  const [device, setDevice] = useState(DESKTOP);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const imgContainer = document.querySelector('div[data="image-container"]');
    if (!imgContainer) return;
    const newWidth = imgContainer.offsetWidth;
    setWidth(newWidth);
    if (window.innerWidth >= 1200) return setDevice(DESKTOP);
    if (window.innerWidth >= 768) return setDevice(TABLET);
    return setDevice(MOBILE);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return window.addEventListener('resize', handleResize);
  }, []);

  const routerComponent = (router) => {
    const { component: Page, id, path, ...rest } = router;
    let RenderComponent = <Page
      key={id}
      path={path}
      {...rest}
      device={device}
      width={width}
    />;

    return <Route
      exact
      path={path}
      key={id}
      render={() => RenderComponent}
    />
  }

  return (
    <React.Fragment>
      <Header device={device}/>
      <Router>
        {routers.map(router => routerComponent(router))}
      </Router>
      <Footer device={device}/>
    </React.Fragment>
  );
}
