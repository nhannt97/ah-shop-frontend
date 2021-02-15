import React from 'react';
import { string } from 'prop-types';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { MOBILE, DESKTOP, TABLET } from '../../App';

export default function Header({
  device
}) {

  return (
    <React.Fragment>
      {device === MOBILE && <HeaderMobile/>} 
      {device === DESKTOP && <HeaderDesktop />} 
      {device === TABLET && <HeaderDesktop />} 
    </React.Fragment>
  )
}

Header.propTypes = {
  device: string,
}
