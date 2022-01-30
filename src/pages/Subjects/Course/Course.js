import { Typography } from '@material-ui/core'
import React from 'react'
import ClassTemplate from '../../../components/Classes/ClassTemplate.js'
import data from '../../../data.js'
import BasicLayout from '../../../layouts/BasicLayout.js'
import useStyles from './styles.js'

export default function Course () {
  const classes = useStyles()

  return (
    <BasicLayout>
      <Typography className={classes.heading}>
        Select the class and subject you want to study
      </Typography>
      {data.map((detail, index) => {
        return (
          <div key={index}>
            <ClassTemplate cls={detail.class} />
          </div>
        )
      })}
    </BasicLayout>
  )
}
