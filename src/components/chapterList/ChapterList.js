import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const ChapterList = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const renderChapterDetails = course => {
    switch (course) {
      case 'Jee Main':
        return (
          <>
            <Typography className={classes.subheading}>
              Select the chapter you want to study for Jee Main :
            </Typography>
            <Box className={classes.chaptersList}>
              <Box className={classes.chapter}>
                <Typography className={classes.chapterName}>
                  1. Chapter Name
                </Typography>
                <Typography className={classes.learnbtn}>
                  <span className={classes.learnIcon}>Learn </span>
                  <KeyboardArrowRightIcon />
                </Typography>
              </Box>
            </Box>
          </>
        )
      case 'Jee Advanced':
        return (
          <>
            <Typography className={classes.subheading}>
              Select the chapter you want to study for Jee Advanced :
            </Typography>
            <Box className={classes.chaptersList}>
              <Box className={classes.chapter}>
                <Typography className={classes.chapterName}>
                  1. Chapter Name
                </Typography>
                <Typography className={classes.learnbtn}>
                  Learn <KeyboardArrowRightIcon />
                </Typography>
              </Box>
            </Box>
          </>
        )
      case 'Boards':
        return (
          <>
            <Typography className={classes.subheading}>
              Select the chapter you want to study for Boards :
            </Typography>
            <Box className={classes.chaptersList}>
              <Box className={classes.chapter}>
                <Typography className={classes.chapterName}>
                  1. Chapter Name
                </Typography>
                <Typography className={classes.learnbtn}>
                  Learn <KeyboardArrowRightIcon />
                </Typography>
              </Box>
            </Box>
          </>
        )
      default:
        return (
          <>
            <Typography className={classes.subheading}>
              Please select a course
            </Typography>
          </>
        )
    }
  }

  return (
    <div className={classes.mainbox}>
      <Typography className={classes.heading}>
        Select the exam you want to study for :
      </Typography>

      <Box className={classes.tabsCourse}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          aria-label='simple tabs example'
        >
          <Tab
            label='Jee Main'
            className={classes.tabButton}
            {...a11yProps(0)}
          />
          <Tab
            label='Jee Advanced'
            className={classes.tabButton}
            {...a11yProps(1)}
          />
          <Tab label='Boards' className={classes.tabButton} {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          {renderChapterDetails('Jee Main')}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {renderChapterDetails('Jee Advanced')}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {renderChapterDetails('Boards')}
        </TabPanel>
      </Box>
    </div>
  )
}

export default ChapterList
