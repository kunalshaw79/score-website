import React from 'react'
import ChapterList from '../../../components/chapterList/ChapterList.js'
import ClassTemplate from '../../../components/Classes/ClassTemplate.js'
import SubjectHead from '../../../components/SubjectHead/SubjectHead.js'
import useStyles from './styles.js'

export default function Course () {
  const classes = useStyles()

  return (
    <div>
      <SubjectHead />
      <ClassTemplate />
      <ClassTemplate />
      <ChapterList />
    </div>
  )
}
