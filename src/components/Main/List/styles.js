import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: '#2B7A0B',
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: '#D2001A',
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));