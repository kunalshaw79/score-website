import React from 'react';
import {Box,MenuItem,FormControl,Select,Tab,Tabs,Typography} from '@material-ui/core';
import useStyles from './styles';
import prevYearQues from '../../assets/icons/VectorPrev_Year_Ques.svg';
import studyMaterial from '../../assets/icons/VectorStudy_Material.svg';
import videoLecture from '../../assets/icons/GroupVideo_Lecture.svg';
import pracQues from '../../assets/icons/GroupPrac_Ques.svg';

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

const SubjectChapter=()=>{

    const classes = useStyles();

    const [subject, setSubject] = React.useState('')
    const [value, setValue] = React.useState(0)

    const handleChange = event => {
    setSubject(event.target.value)
    }

    const handleChangeTab = (event, newValue) => {
    setValue(newValue)
    }

    const renderTabContent= material=>{
        switch(material){
            case 'Video Lecture':
                return(
                    <>
                    <h2 className={classes.linkHead} style={{marginBottom:'2%'}}>Link :</h2>
                    <ul>
                    <li className={classes.studyLink}>https://questions.videoLecture.com/</li>
                    </ul>
                    </>
                )
            case 'Study Material':
                return(
                    <>
                    <h2 className={classes.linkHead} style={{marginBottom:'2%'}}>Link :</h2>
                    <ul>
                    <li className={classes.studyLink}>https://questions.studyMaterial.com/</li>
                    </ul>
                    </>
                )
            case 'Practice Questions':
                return(
                    <>
                    <h2 className={classes.linkHead} style={{marginBottom:'2%'}}>Link :</h2>
                    <ul>
                    <li className={classes.studyLink}>https://questions.pracQues.com/</li>
                    </ul>
                    </>
                )
            case 'Prev. year questions':
                return(
                    <>
                    <h2 className={classes.linkHead} style={{marginBottom:'2%'}}>Link :</h2>
                    <ul>
                    <li className={classes.studyLink}>https://questions.prevYearQues.com/</li>
                    </ul>
                    </>
                )
        }
    }
    return(
        <Box display="flex" >
            <div className={classes.subjectPage}>   
                <div className={classes.headerBox}>           
                    <div className={classes.subjectHeadRight}>
                            <p className={classes.switchHead}>Switch to different chapter : {' '}</p>
                            <FormControl variant='outlined' className={classes.subjectDropdown}>
                                <Select value={subject} onChange={handleChange} className={classes.subjectDropdownOption}>
                                <MenuItem value={1}>Chapter A</MenuItem>
                                <MenuItem value={2}>Chapter B</MenuItem>
                                <MenuItem value={3}>Chapter C</MenuItem>
                                <MenuItem value={4}>Chapter D</MenuItem>
                                <MenuItem value={5}>Show More..</MenuItem>
                                </Select>
                            </FormControl>
                    </div>
                    <div style={{float:'left'}}>
                        <h1 className={classes.subject}>Physics</h1>
                        <h3 className={classes.chapter}>Chapter :</h3>
                    </div> 
                </div>
                <div className={classes.mainBox}>
                <div className={classes.content}>
                    <h1 className={classes.contentHead}>Contents</h1>
                    {/*<ul style={{listStyle:'none',marginBottom:'3%'}}>
                        <li className={classes.contentList}><img src={videoLecture} className={classes.icon} /><span className={classes.iconText}>Video Lectures</span></li>
                        <li className={classes.contentList}><img src={studyMaterial} className={classes.icon} /><span className={classes.iconText}>Study Material</span></li>
                        <li className={classes.contentList}><img src={pracQues} className={classes.icon} /><span className={classes.iconText}>Practice Questions</span></li>
                        <li className={classes.contentList}><img src={prevYearQues} className={classes.icon} /><span className={classes.iconText}>Prev. year questions</span></li>
                    </ul>*/}
                    <Tabs value={value} onChange={handleChangeTab} style={{marginBottom:'3%',}} orientation="vertical">
                        <Tab {...a11yProps(0)} className={classes.contentList} label='Video Lecture' icon={<img src={videoLecture} className={classes.icon} />} iconPosition="start" />
                        <Tab {...a11yProps(1)}className={classes.contentList} label='Study Material' icon={<img src={studyMaterial} className={classes.icon} />} iconPosition="start"/>
                        <Tab {...a11yProps(2)}className={classes.contentList} label='Practise Questions' icon={<img src={pracQues} className={classes.icon} />} iconPosition="start"/>
                        <Tab {...a11yProps(3)} className={classes.contentList} label='Pre. year questions' icon={<img src={prevYearQues} className={classes.icon} />} iconPosition="start"/>
                    </Tabs>
                </div>
                <div className={classes.materialLink}>
                    {/*<h2 className={classes.linkHead} style={{marginBottom:'2%'}}>Link :</h2>
                    <ul>
                    <li className={classes.studyLink}>https://questions.examside.com/</li>
                    </ul>*/}

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

export default SubjectChapter;