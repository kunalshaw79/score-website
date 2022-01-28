import { makeStyles } from '@material-ui/core'
import { colors } from '../../styles/colors'

// import {ArrowCircleRightIcon} from '@mui/icons-material/ArrowCircleRight'

const useStyles = makeStyles({
  mainbox: {
    width: '77%',
    height: '80%',
    padding: '8%',
    paddingTop: '3%',
    color: colors.blue,
    marginLeft: '15%',
    position: 'absolute'
  },

  heading: {
    fontSize: '2.25rem',
    lineHeight: '6rem',
    fontFamily: 'Source Sans Pro'
  },

  exams: {
    width: '38.125rem',
    height: '4.448rem'
  },

  subbox: {
    width: 'fit-content',
    borderRadius: '2rem',
    //display: 'flex',
    float: 'left',
    marginRight: '1.25rem',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    display: 'flex',

    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    color: colors.blue,
    border: 0,
    backgroundColor: colors.yellow,
    borderColor: colors.blue,
    opacity: '0.85',

    fontSize: '1.75rem',
    fontWeight: 'normal',

    '&:hover': {
      boxShadow: '0rem 0.282rem 0.777rem rgba(0, 0, 0, 0.15)',
      fontWeight: '600'
    }
  },

  learnbtn: {
    float: 'right',
    marginRight: '1.25rem',
    fontSize: '1.75 rem',
    fontWeight: 'normal',
    color: colors.blue
  },

  subheading: {
    position: 'absolute',
    width: '70%', //586px
    height: '17%', //96px

    fontFamily: 'Source Sans Pro',
    lineHeight: '6rem',
    fontSize: '2.25rem'
  },

  chapterName: {
    borderColor: colors.blue,
    borderRadius: '1.25rem',
    color: colors.blue,
    fontSize: '1.463rem',

    position: 'absolute',
    width: '69.5rem',
    height: '6.341rem',
    left: '10.25rem',
    top: '24.563rem'
  },

  chapters: {
    position: 'absolute',
    width: '77%',
    height: '6.341rem',
    top: '19.688rem', //393px

    border: '0.061rem solid #313576',
    borderRadius: '1.25rem'
  },

  chaptername: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: '1.463rem',
    lineHeight: '1.438rem',
    paddingLeft: '4%',
    paddingTop: '4%',
    justifyContent: 'center',
    color: colors.blue
  }
})

export default useStyles
