import React from 'react';
import { string, bool, func } from 'prop-types';
import {
  Dialog,
  IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import zoomImage from '../../helper/zoom';
import useStyles from './styles';

export default function ImageModal({
  src,
  open,
  onClose,
  onNextImage,
  onPreviousImage
}) {
  const classes = useStyles()();

  const handleOnloadImage = () => zoomImage();

  return (
    <Dialog fullScreen open={open} onClose={onClose} classes={{paper: classes.dialog}}>
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <IconButton aria-label="close" className={classes.previousButton} onClick={onPreviousImage}>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton aria-label="close" className={classes.nextButton} onClick={onNextImage}>
        <ChevronRightIcon />
      </IconButton>
      <div type="zoom" className={classes.zoom}>
        <img src={src} alt="" className={classes.image} onLoad={handleOnloadImage} />
      </div>
    </Dialog>
  )
}

ImageModal.propTypes = {
  src: string,
  open: bool,
  onClose: func,
  onNextImage: func,
  onPreviousImage: func
}
