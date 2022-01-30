import { colors } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heading: {
    textAlign: 'center',
    fontSize: '2.25rem',
    color: colors.blue,
    margin: '2rem',
    fontFamily: 'Source Sans Pro',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.75rem'
    }
  }
}))

export default useStyles
