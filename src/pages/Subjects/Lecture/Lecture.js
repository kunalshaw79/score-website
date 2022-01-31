import React from 'react'
import { useParams } from 'react-router-dom'
import SubjectChapter from '../../../components/SubjectChapter/SubjectChapter.js'
import BasicLayout from '../../../layouts/BasicLayout.js'
import useStyles from './styles.js'

export default function Lecture () {
  const classes = useStyles()
  const { cls, sub, exam, chap } = useParams()

  return (
    <BasicLayout>
      <SubjectChapter />
    </BasicLayout>
  )
}
