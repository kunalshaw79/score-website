import React, { useEffect, useState } from 'react'
import useStyles from './style.js'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import PhysicsLogo from '../../assets/icons/PhysicsLogo.svg'
import ChemistryLogo from '../../assets/icons/ChemistryLogo.svg'
import MathsLogo from '../../assets/icons/MathsLogo.svg'
import data from '../../data.js'

export default function SubjectHead ({ cls, sub, handleChangeSubject }) {
  const [subject, setSubject] = React.useState('')
  const [details, setDetails] = useState()

  const handleChange = event => {
    handleChangeSubject(event.target.value)
    setSubject(event.target.value)
  }

  const renderLogoImage = sub => {
    switch (sub) {
      case 'physics':
        return (
          <img
            className={classes.subjectHeadImage}
            src={PhysicsLogo}
            alt='Physics'
          />
        )
      case 'chemistry':
        return (
          <img
            className={classes.subjectHeadImage}
            src={ChemistryLogo}
            alt='Chemistry'
          />
        )
      case 'maths':
        return (
          <img
            className={classes.subjectHeadImage}
            src={MathsLogo}
            alt='Maths'
          />
        )
    }
  }

  useEffect(() => {
    let updatedData = data.filter(detail => {
      return detail.class === cls
    })
    setDetails(updatedData[0])
  }, [cls, sub])

  const classes = useStyles()

  return (
    <div className={classes.subjectHeadContainer}>
      <div className={classes.subjectHeadLeft}>
        {details && (
          <>
            <p className={classes.subjectHeadClass}>{cls}th Class</p>
            <h1 className={classes.subjectHeadName}>{sub}</h1>
            <p className={classes.subjectHeadContent}>
              {details[`${sub}`]['desc']}
            </p>
          </>
        )}
      </div>
      <div className={classes.subjectHeadRight}>
        <div className={classes.subjectHeadRightTop}>
          <p className={classes.subjectHeadSelectSubject}>
            Switch to different subject :{' '}
          </p>
          <FormControl
            variant='outlined'
            className={classes.subjectHeadDropdown}
          >
            <Select
              value={subject}
              onChange={handleChange}
              displayEmpty
              value={sub}
              className={classes.subjectHeadDropdownOption}
            >
              <MenuItem value={'physics'}>Physics</MenuItem>
              <MenuItem value={'chemistry'}>Chemistry</MenuItem>
              <MenuItem value={'maths'}>Maths</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.subjectHeadRightbottom}>
          {renderLogoImage(sub)}
        </div>
      </div>
    </div>
  )
}
