import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../styles/colors'

const useStyles = makeStyles(theme => ({
  subjectHeadContainer: {
    background: colors.blue,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem',
    marginBottom: '2rem',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  subjectHeadLeft: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
    // width: '100%'
  },
  subjectHeadClass: {
    display: 'inline-block',
    marginTop: '10%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '3rem',
    lineHeight: '3.75rem',
    letterSpacing: '0.03em',
    color: colors.white,
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem'
    }
  },
  subjectHeadName: {
    textTransform: 'capitalize',
    marginTop: '2%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '9rem',
    lineHeight: '11.31rem',
    letterSpacing: '0.03em',
    color: colors.yellow,
    [theme.breakpoints.down('md')]: {
      fontSize: '6rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem'
    }
  },
  subjectHeadContent: {
    width: '40rem',
    marginTop: '4%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    textAlign: 'justify',
    letterSpacing: '0.03em',
    color: colors.white,
    [theme.breakpoints.up('sm')]: {
      height: '13.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  subjectHeadRight: {
    display: 'flex',
    flexDirection: 'column'
  },
  subjectHeadRightTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
    alignSelf: 'flex-end'
  },
  subjectHeadSelectSubject: {
    display: 'block',
    width: '78%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    color: colors.white,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem'
    }
  },
  subjectHeadDropdown: {
    borderRadius: '0.625rem'
  },
  subjectHeadDropdownOption: {
    width: '8.25rem',
    height: '1.375rem',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1rem',
    color: colors.white,
    background: colors.lightblue,
    padding: '1rem 0rem',
    '& .MuiSelect-root': {
      color: colors.white
    }
  },
  subjectHeadRightbottom: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    display: 'inline-block',
    padding: '2rem',
    background: colors.lightblue,
    opacity: 0.85,
    marginTop: '14%',
    borderRadius: '0.625rem',
    alignSelf: 'flex-end',
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.8)'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  subjectHeadImage: {
    width: '15vw'
  }
}))

export default useStyles
