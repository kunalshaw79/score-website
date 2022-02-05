import { makeStyles } from '@material-ui/core'
import { colors } from '../../styles/colors'

const useStyles=makeStyles(theme=>({
    header: {
        backgroundColor:colors.blue,
        paddingRight: "8rem",
        paddingLeft: "6rem",
        "@media (max-width: 900px)": {
          paddingLeft: 0,
        },
        boxSizing:'border-box'
      },
      logo: {
        maxWidth:'11.5vw',
        textAlign: "left",
        paddingBottom:'1%',
        "@media (max-width: 900px)": {
            maxWidth:'25vw',
          },
      },
      menuButton: {
        fontFamily: "Roboto",
        fontWeight: '400',
        fontSize: "1.2rem",
        marginLeft: "1.5rem",
        '&:hover':{
            color:colors.yellow,
            webkitTransform:'translate3d(0,0,0)'
        }
      },
      toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
      dropDownContainer: {
        padding: "2rem 1.5rem",
        borderTop:'1px solid white'
      },
      drawerPaper:{
        backgroundColor:colors.blue
      }
}))

export default useStyles;