import React from 'react'
import useStyles from './styles'
import imagephy from '../../assets/icons/PhysicsIcon.svg'
import imagemat from '../../assets/icons/MathsIcon.svg'
import imageche from '../../assets/icons/ChemistryIcon.svg'
import { Box } from '@material-ui/core'

const ClassTemplate = () => {
  const classes = useStyles()

  return (
    <Box display='flex' justifyContent='center'>
      <div className={classes.mainbox}>
        <Box className={classes.yellowbar}></Box>
        <h1 className={classes.heading}>11th Class</h1>
        <p className={classes.classDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. the industry's standard dummy text ever since the
          1500s.
        </p>
        <div className={classes.subjects}>
          <div className={classes.subject}>
            <img src={imagephy} alt='physics' />
          </div>
          <div className={classes.subject}>
            <img src={imageche} alt='chemistry' />
          </div>
          <div className={classes.subject}>
            <img src={imagemat} alt='math' />
          </div>
        </div>
      </div>
    </Box>
  )
}

export default ClassTemplate
