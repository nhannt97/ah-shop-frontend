import React, { useState, useEffect } from 'react';
import { string, number } from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Grid,
  CircularProgress
} from '@material-ui/core';
import { productSelector } from '../../state/product/selector';
import ImageModal from '../../component/ImageModal';
import useStyles from './styles';
export default function Home({
  device,
  width
}) {
  const classes = useStyles({ device, width })();
  const { loading, products } = useSelector(productSelector);
  const [currentImage, setCurrentImage] = useState(products[0]);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    console.log(loading, products)
  }, [loading, products])

  const handleShowModalImage = (src) => () => {
    setShowImageModal(true);
    setCurrentImage(src);
  }

  const handleCloseModalImage = () => {
    setShowImageModal(false);
  }

  const handleNextImage = () => {
    let currIndex = products.findIndex(it => it === currentImage);
    if (currIndex === products.length - 1) currIndex = 0;
    else currIndex++;
    setCurrentImage(products[currIndex]);
  }

  const handlePreviousImage = () => {
    let currIndex = products.findIndex(it => it === currentImage);
    if (currIndex === 0) currIndex = products.length - 1;
    else currIndex--;
    setCurrentImage(products[currIndex]);
  }

  return (<React.Fragment>
    <Grid container className={classes.homePage} data="image-container">
      {loading && <CircularProgress />}
      {!loading && products && products.length > 0 && products.map(item => (
        <div className={classes.imageWrapper} key={item.id}>
          <img src={item.img} alt="" onClick={handleShowModalImage(item.img)}/>
          <div className={classes.productDes}>
            <div className={classes.productPrice}>{item.price}</div>
            <div className={classes.productName}>{item.name}</div>
            <div className={classes.productTypeWood}>{item.typeWood}</div>
          </div>
        </div>
      ))}
    </Grid>
    <ImageModal
      src={currentImage}
      open={showImageModal}
      onClose={handleCloseModalImage}
      onNextImage={handleNextImage}
      onPreviousImage={handlePreviousImage}
    />
  </React.Fragment>
  )
}

Home.propTypes = {
  device: string,
  width: number
}
