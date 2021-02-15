import { makeStyles } from '@material-ui/core/styles';

const useStyles = () => makeStyles((theme) => ({
  dialog: {
    backgroundColor: 'rgba(0,0,0,0) !important',
  },
  zoom: {
    overflow: 'hidden',
    margin: 'auto',
    width: '100%',
    height: '100%',
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '100%',
    background: 'rgba(0,0,0,0.95)',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'rgba(0,0,0,0.5)',
    color: theme.color.white,
    zIndex: 1
  },
  previousButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 10,
    background: 'rgba(0,0,0,0.5)',
    color: theme.color.white,
    zIndex: 1
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 10,
    background: 'rgba(0,0,0,0.5)',
    color: theme.color.white,
    zIndex: 1
  },
  image: {
    bottom: 0,
    display: 'block',
    left: 0,
    margin: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  }
}));

export default useStyles;
