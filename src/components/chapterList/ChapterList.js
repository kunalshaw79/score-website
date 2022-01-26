import React from 'react'
import useStyles from './styles'

const ChapterList = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainbox}>
      <div className={classes.heading}>
        Select the exam you want to study for :
      </div>

      <div className={classes.exams}>
        <button className={classes.subbox}>JEE Main</button>
        <button className={classes.subbox}>JEE Advanced</button>
        <button className={classes.subbox}>BOARDS</button>
      </div>

      <div className={classes.subheading}>
        Select the chapter you want to study :
      </div>

      <div className={classes.chapters}>
        <div className={classes.chaptername}>1. Chapter Name</div>
      </div>
    </div>
  )
}

export default ChapterList
