import React from 'react';
import { string } from 'prop-types';
import {
  Grid
} from '@material-ui/core';
import useStyles from './styles';

export default function Footer({
  device
}) {
  const classes = useStyles(device)();

  return (
    <Grid container className={classes.footerComponent}>
      <div className={classes.phone}>
        SĐT: 0986565484 hoac 0348970191
      </div>
      <div className={classes.email}>
        Email: dogoanhanh@gmail.com
      </div>
      <div className={classes.address}>
        Địa chỉ: Xóm 1, thôn Đa Hòa, xã Bình Minh, Khoái Châu, Hưng Yn
      </div>
    </Grid>
  )
}

Footer.propTypes = {
  device: string,
}
