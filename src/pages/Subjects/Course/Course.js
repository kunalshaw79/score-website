import React from 'react'
import ClassTemplate from '../../../components/Classes/ClassTemplate.js'
import useStyles from './styles.js'

export default function Course () {
  const classes = useStyles()

  return (
    <div>
      <ClassTemplate />
      <ClassTemplate />
    </div>
  )
}
