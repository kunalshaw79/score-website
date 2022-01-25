import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  layoutContainer: {
    position: 'relative',
    // height: '100vh',
    width: '100vw'
  },
  childContainer: {
    minHeight: '90vh',
    backgroundColor: colors.ns2,
    overflowX: 'hidden'
  }
})

export default function BasicLayout ({ children }) {
  const styles = useStyles()

  return (
    <div className={styles.layoutContainer}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid className={styles.childContainer} item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}
