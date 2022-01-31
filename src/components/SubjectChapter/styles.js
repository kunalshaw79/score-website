import { makeStyles } from '@material-ui/core'
import { colors } from '../../styles/colors'

const useStyles = makeStyles(theme => ({
  subjectPage: {
    padding: '3rem 6rem',
    width: '100vw',
    [theme.breakpoints.down('md')]: {
      padding: ' 3rem'
    }
  },
  headerBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  subjectHeadRight: {
    order: '2',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2%'
    }
  },
  switchHead: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '1.5rem',
    [theme.breakpoints.up('md')]: {
      marginRight: '2%',
      whiteSpace: 'nowrap'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem'
    }
  },
  subjectDropdown: {
    borderRadius: '0.625rem',
    [theme.breakpoints.down('md')]: {
      margin: 'auto'
    }
  },
  subjectDropdownOption: {
    width: '8.25rem',
    height: '1rem',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1rem',
    color: colors.white,
    background: colors.lightblue,
    padding: '1rem 0rem',
    '& .MuiSelect-icon': {
      color: colors.white
    },
    '& .MuiSelect-select:focus': {
      background: 'none'
    }
  },
  subjectName: {
    color: colors.blue,
    fontFamily: 'Roboto',
    fontSize: '3rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    }
  },
  chapterName: {
    color: colors.blue,
    fontFamily: 'Roboto',
    fontSize: '2rem',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem'
    }
  },
  mainBox: {
    marginTop: '2%',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '4%'
    }
  },
  content: {
    background: colors.blue,
    width: '35%',
    padding: '3rem 1.2rem',
    borderRadius: '1vw 0 0 1vw',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderRadius: '1vw 1vw 0 0'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '55vh'
    }
  },
  contentHead: {
    fontSize: '2rem',
    color: colors.white,
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginBottom: '2%',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem'
    }
  },
  tabsContainer: {
    marginBottom: '3%',
    '& .MuiTabs-flexContainerVertical': {
      alignItems: 'center',
      justifyContent: 'center'
    },
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .MuiTab-root': {
      maxWidth: '100%'
    }
  },
  contentList: {
    width: '100%',
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: colors.white,
    fontSize: '1.5rem',
    textTransform: 'none',
    padding: '1rem',
    marginBottom: '0.5rem',

    cursor: 'pointer',
    display: 'flex',
    '&:hover': {
      background: colors.lightPurple,
      borderRadius: '1vw'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    }
  },
  icon: {
    marginRight: '1rem',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '4rem'
    }
  },
  iconText: {
    marginLeft: '5%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  materialLink: {
    width: '65%',
    padding: '5rem 3rem',
    background: colors.lightPurple,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: '50vh',
      borderRadius: '0 0 1vw 1vw'
    },
    borderRadius: '0 1vw 1vw 0'
  },
  linkHead: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: colors.white,
    fontSize: '1.5rem'
  },
  studyLink: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: colors.white,
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}))

export default useStyles
