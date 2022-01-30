import React from 'react'
import ClassTemplate from '../../components/Classes/ClassTemplate.js'
import Footer from '../../components/Footer/Footer.js'
import Home from '../../components/Home/Home.js'
import BasicLayout from '../../layouts/BasicLayout.js'
import useStyles from './styles.js'

export default function Homepage () {
  const classes = useStyles()

  return (
    <BasicLayout>
      <Home />
    </BasicLayout>
  )
}
