import React from 'react';
import {
  Grid
} from '@material-ui/core';
import useStyles from './styles';

export default function HeaderMobile() {
  const classes = useStyles()();

  return (
    <Grid container className={classes.headerComponent}>
      <div className={classes.brandName}>
        Đồ gỗ An Hạnh
      </div>
    </Grid>
  )
}
