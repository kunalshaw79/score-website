import React from 'react'
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core'
import useStyles from './styles'
import prevYearQues from '../../assets/icons/PrevYearQues.svg'
import studyMaterial from '../../assets/icons/StudyMaterial.svg'
import videoLecture from '../../assets/icons/VideoLecture.svg'
import pracQues from '../../assets/icons/PracticeQuestion.svg'

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

const SubjectChapter = () => {
  const classes = useStyles()

  const [chapter, setChapter] = React.useState('')
  const [value, setValue] = React.useState(0)

  const handleChange = event => {
    setChapter(event.target.value)
  }

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  const renderTabContent = material => {
    switch (material) {
      case 'Video Lecture':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
              <li className={classes.studyLink}>
                https://questions.videoLecture.com/
              </li>
            </ul>
          </>
        )
      case 'Study Material':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
              <li className={classes.studyLink}>
                https://questions.studyMaterial.com/
              </li>
            </ul>
          </>
        )
      case 'Practice Questions':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
              <li className={classes.studyLink}>
                https://questions.pracQues.com/
              </li>
            </ul>
          </>
        )
      case 'Prev. year questions':
        return (
          <>
            <h2 className={classes.linkHead} style={{ marginBottom: '2%' }}>
              Link :
            </h2>
            <ul>
              <li className={classes.studyLink}>
                https://questions.prevYearQues.com/
              </li>
            </ul>
          </>
        )
    }
  }

  return (
    <Box display='flex'>
      <div className={classes.subjectPage}>
        <div className={classes.headerBox}>
          <Box className={classes.subjectHeadRight}>
            <Typography className={classes.switchHead}>
              Switch to different chapter :
            </Typography>
            <FormControl variant='outlined' className={classes.subjectDropdown}>
              <Select
                value={chapter}
                onChange={handleChange}
                className={classes.subjectDropdownOption}
              >
                <MenuItem value={1}>Chapter A</MenuItem>
                <MenuItem value={2}>Chapter B</MenuItem>
                <MenuItem value={3}>Chapter C</MenuItem>
                <MenuItem value={4}>Chapter D</MenuItem>
                <MenuItem value={5}>Show More..</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={{ float: 'left' }}>
            <Typography className={classes.subjectName}>Physics</Typography>
            <Typography className={classes.chapterName}>Chapter :</Typography>
          </Box>
        </div>
        <div className={classes.mainBox}>
          <Box className={classes.content}>
            <Typography className={classes.contentHead}>Contents</Typography>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              className={classes.tabsContainer}
              orientation='vertical'
            >
              <Tab
                {...a11yProps(0)}
                className={classes.contentList}
                // label='Video Lecture'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={videoLecture} className={classes.icon} /> Video
                    Lecture
                  </div>
                }
                iconPosition='start'
                wrapped={true}
              />
              <Tab
                {...a11yProps(1)}
                className={classes.contentList}
                // label='Study Material'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={studyMaterial} className={classes.icon} /> Study
                    Material
                  </div>
                }
                // icon={<img src={studyMaterial} className={classes.icon} />}
                iconPosition='start'
              />
              <Tab
                {...a11yProps(2)}
                className={classes.contentList}
                // label='Practise Questions'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pracQues} className={classes.icon} /> Practise
                    Questions
                  </div>
                }
                // icon={<img src={pracQues} className={classes.icon} />}
                iconPosition='start'
              />
              <Tab
                {...a11yProps(3)}
                className={classes.contentList}
                // label='Pre. year questions'
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={prevYearQues} className={classes.icon} /> Pre.
                    year questions
                  </div>
                }
                // icon={<img src={prevYearQues} className={classes.icon} />}
                iconPosition='start'
              />
            </Tabs>
          </Box>
          <div className={classes.materialLink}>
            <TabPanel value={value} index={0}>
              {renderTabContent('Video Lecture')}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {renderTabContent('Study Material')}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {renderTabContent('Practice Questions')}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {renderTabContent('Prev. year questions')}
            </TabPanel>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default SubjectChapter
