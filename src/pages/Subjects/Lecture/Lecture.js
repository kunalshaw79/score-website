import React from 'react'
import { useParams } from 'react-router-dom'
import BasicLayout from '../../../layouts/BasicLayout.js'
import useStyles from './styles.js'

export default function Lecture () {
  const classes = useStyles()
  const { cls, sub, exam, chap } = useParams()

  return <BasicLayout>SubjectChapter here</BasicLayout>
}
