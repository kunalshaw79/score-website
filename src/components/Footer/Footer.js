import { Box, SvgIcon, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles.js'
import EnactusLogo from '../../assets/images/enactusLogo.png'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { StyledTypographyWhite } from '../../styles/typography.js'

export default function Homepage () {
  const classes = useStyles()

  return (
    <Box className={classes.footerContainer}>
      <Box className={classes.footer}>
        <Box className={classes.enactusLogo}>
          <img src={EnactusLogo} />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          className={classes.footerDetails}
        >
          <Box display='flex'>
            <StyledTypographyWhite className={classes.footerDetailLabel}>
              Connect with us on:{' '}
            </StyledTypographyWhite>
            <Box className={classes.footerIcons}>
              <FacebookIcon style={{ fill: '#F0F0F0' }} />
              <InstagramIcon style={{ fill: '#F0F0F0' }} />
              <TwitterIcon style={{ fill: '#F0F0F0' }} />
              <LinkedInIcon style={{ fill: '#F0F0F0' }} />
            </Box>
          </Box>
          <Box display='flex'>
            <StyledTypographyWhite className={classes.footerDetailLabel}>
              Email id:
            </StyledTypographyWhite>
            <StyledTypographyWhite>enactus@ee.iitr.ac.in</StyledTypographyWhite>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
