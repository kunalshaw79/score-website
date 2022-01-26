import React from 'react'
import ClassTemplate from '../../components/Classes/ClassTemplate.js'
import Footer from '../../components/Footer/Footer.js'
import Home from '../../components/Home/Home.js'
import useStyles from './styles.js'

export default function Homepage () {
  const classes = useStyles()

  return (
    <div className={classes.home}>
      <Home />
      <Footer />
    </div>
  )
}
