import { makeStyles } from '@material-ui/core'
import { borderRadius, width } from '@mui/system'
import { colors } from '../../styles/colors'

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
    fontSize: '36px',
    lineHeight: '96px',
    fontFamily: 'Source Sans Pro',

    width: '62%', //586px
    height: '5%px' //96px
  },

  exams: {
    width: '610px',
    height: '71.16px'
  },

  subbox: {
    width: 'fit-content',
    borderRadius: '32px',
    //display: 'flex',
    float: 'left',
    marginRight: '20px', //43px

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
    border:0,
    backgroundColor: colors.yellow,
    borderColor: colors.blue,
    opacity: '0.85',

    fontSize: '28px',
    fontWeight: 'normal',

    '&:hover':{
      boxShadow: '0px 4.51988px 12.4297px rgba(0, 0, 0, 0.15)',
      fontWeight: '600',
    },
  },

  subheading: {
    position: 'absolute',
    width: '70%px', //586px
    height: '17%', //96px

    fontFamily: 'Source Sans Pro',
    lineHeight: '96px',
    fontSize: '36px'
  },

  chapterName: {
    borderColor: colors.blue,
    borderRadius: '20px',
    color: colors.blue,
    fontSize: '23.41px',

    position: 'absolute',
    width: '1112px',
    height: '101.45px',
    left: '164px',
    top: '393px'
  },

  chapters: {
    position: 'absolute',
    width: '77%',
    height: '101.45px',
    top: '315px', //393px

    border: '0.975439px solid #313576',
    borderRadius: '20px'

    // marginBottom: '40px'
  },

  chaptername: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: '23.4105px',
    lineHeight: '23px',
    paddingLeft: '4%',
    paddingTop: '4%',
    justifyContent: 'center',
    color: colors.blue
  }
})

export default useStyles

