import { makeStyles } from '@material-ui/core/styles';

const useStyles = (device) => makeStyles((theme) => ({
  headerComponent: {
    background: theme.color.lightBlue900,
    color: theme.color.white,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    padding: '0 50px'
  },
  logo: {
    fontFamily: theme.font.monoton,
    fontSize: 30
  },
  brandName: {
    fontFamily: theme.font.dancingMonoton,
    fontSize: 30,
    fontWeight: 700,
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  }
}));

export default useStyles;
