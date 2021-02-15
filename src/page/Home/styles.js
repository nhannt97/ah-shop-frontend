import { makeStyles } from '@material-ui/core/styles';

const useStyles = ({device, width}) => makeStyles((theme) => {
  return ({
  homePage: {
    minHeight: 'calc(100vh - 50px - 30px)',
    display: 'grid',
    gridTemplateColumns: `repeat(${Math.floor(width / 200)}, auto)`,
    gridGap: 20,
    padding: 30
  },
  imageWrapper: {
    position: 'relative',
    '& img': {
      maxWidth: '100%',
      width: '100%',
      maxHeight: '100%'
    }
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 700,
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 3,
    color: theme.color.white,
    background: 'rgba(0,0,0,0.6)'
  },
  productName: {
    fontWeight: 700,
  }
})});

export default useStyles;
