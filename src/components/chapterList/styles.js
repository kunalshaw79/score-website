import { makeStyles } from '@material-ui/core'
import { colors } from '../../styles/colors'

const useStyles = makeStyles(theme => ({
  mainbox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '10%',
    paddingBottom: '20rem',
    color: colors.blue,
    [theme.breakpoints.down('md')]: {
      padding: '3rem'
    }
  },
  heading: {
    fontFamily: 'Source Sans Pro',
    fontSize: '2.25rem',
    lineHeight: '2rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      marginBottom: '2rem'
    }
  },
  tabsCourse: {
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
  tabs: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      '& .MuiTabs-flexContainer': {
        flexDirection: 'column',
        alignItems: 'center'
      }
    }
  },
  tabButton: {
    width: 'fit-content',
    borderRadius: '2rem',
    marginRight: '1.25rem',
    color: colors.blue,
    border: 0,
    backgroundColor: colors.yellow,
    borderColor: colors.blue,
    opacity: '0.85',
    fontSize: '1.75rem',
    marginBottom: '3rem',
    '&:hover': {
      boxShadow: '0rem 0.282rem 0.777rem rgba(0, 0, 0, 0.15)',
      fontWeight: '600',
      cursor: 'pointer'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
      marginBottom: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginRight: '0.8rem'
    }
  },
  subheading: {
    fontFamily: 'Source Sans Pro',
    fontSize: '2rem',
    lineHeight: '2rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
      marginBottom: '2rem'
    }
  },
  chaptersList: {
    width: '90%'
  },
  chapter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '1.25rem',
    border: '0.061rem solid #313576',
    padding: '1rem',
    lineHeight: '1.438rem',
    color: colors.blue,
    fontFamily: 'Roboto'
  },
  chapterName: {
    fontSize: '1.3rem',
    fontFamily: 'Roboto',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem'
    }
  },
  learnbtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '1.25rem',
    fontSize: '1.3rem',
    color: colors.blue,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0.5rem'
    }
  },
  learnIcon: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

export default useStyles
