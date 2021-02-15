import { makeStyles } from '@material-ui/core/styles';

const useStyles = (device) => makeStyles((theme) => ({
  footerComponent: {
    background: theme.color.blueGrey400,
    color: theme.color.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    fontSize: 14
  }
}));

export default useStyles;
