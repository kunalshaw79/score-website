import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../styles/colors'
import BlueBgImage from '../../assets/images/homeBackground.png' // Import using relative path

const useStyles = makeStyles(theme => ({
  scoreHome: {
    width: '100%',
    marginTop: '-1%',
    backgroundImage: `url(${BlueBgImage})`,
    flexDirection: 'row',
    backgroundSize: '100% 100%',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      height: '100vh'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '110vh'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
      backgroundSize: '100% 100%'
    }
  },
  enactusDetail: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: '10rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  scorePage: {
    marginTop: '5%',
    marginLeft: '7%',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '14%'
    }
  },
  heading: {
    fontFamily: 'Source Sans Pro',
    fontSize: '8rem',
    fontWeight: '900',
    color: colors.yellow,
    marginBottom: '-1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '4.3rem',
      marginBottom: '-0.5rem'
    }
  },
  iitHead: {
    fontSize: '4rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'normal',
    color: colors.white,
    marginBottom: '0.8%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      marginBottom: '3.7%'
    }
  },
  desc: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    color: colors.white,
    textAlign: 'justify',
    marginBottom: '3.5%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.35rem',
      marginBottom: '5.8%',
      maxWidth: '70vw'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem'
    }
  },
  homeButton: {
    marginRight: '1.5%'
  },
  learnCase: {
    padding: '10px 20px',
    background: colors.yellow
  },
  knowMoreCase: {
    padding: '0.5% 1%',
    boxSizing: 'border-box',
    border: '1px solid #FFC220',
    background: 'transparent'
  },
  enactus: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '5rem',
    color: colors.yellow,
    textTransform: 'uppercase',
    marginBottom: '-2%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6.5rem'
    }
  },
  iitRoorkee: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '3rem',
    color: colors.blue,
    marginBottom: '3%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem'
    }
  },
  imgEnactus: {
    width: '80%',
    height: 'auto',
    borderRadius: '18px',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '6%'
    }
  },
  descEnactus: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '1.2rem',
    color: colors.blue,
    textAlign: 'justify',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.35rem',
      maxWidth: '70vw'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.7rem'
    }
  },
  btnKnow: {
    padding: '1% 2%',
    background: colors.yellow,
    borderRadius: '6px'
  },
  btnText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1.5rem',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem'
    }
  },
  htag: {
    marginLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      marginTop: '0%'
    },
    [theme.breakpoints.up('xs')]: {
      // marginTop: '15%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '10%'
    }
  },
  enactusImg: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      marginTop: '8%'
    }
  }
}))

export default useStyles
