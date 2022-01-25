import { makeStyles } from '@material-ui/core'
import { colors } from '../../styles/colors'

const useStyles = makeStyles(theme => ({
  mainbox: {
    width: '70%',
    borderRadius: '20px',
    padding: '6rem',
    marginBottom: '50px',
    backgroundColor: colors.blue,
    color: colors.white,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: '3rem'
    }
  },
  heading: {
    fontSize: '4.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem'
    }
  },
  classDesc: {
    marginTop: '10px',
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  },
  yellowbar: {
    width: '100px',
    height: '50%',
    top: '25%',
    left: '-3.5rem',
    backgroundColor: colors.yellowBar,
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      width: '70px',
      left: '-2.5rem'
    }
  },
  subjects: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  subject: {
    backgroundColor: colors.lightblue,
    width: '9rem',
    height: '9rem',
    paddingTop: '1.2rem',
    borderRadius: '1rem',
    marginRight: '1rem',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '0.2rem',
    [theme.breakpoints.down('md')]: {
      width: '6rem',
      height: '6rem'
    }
  }
}))

export default useStyles
