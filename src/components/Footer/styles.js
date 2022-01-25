import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../styles/colors'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: colors.blue,
    padding: '3rem 10rem 3rem 7rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 5rem'
    }
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  enactusLogo: {
    transform: 'scale(0.7)'
  },
  footerIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '150px'
  },
  footerDetails: {
    height: '6rem',
    justifyContent: 'space-evenly'
  },
  footerDetailLabel: {
    marginRight: '20px'
  }
}))

export default useStyles
