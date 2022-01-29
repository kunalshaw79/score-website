import React from 'react';
import {Box,MenuItem,FormControl,Select} from '@material-ui/core';
import useStyles from './styles';
import prevYearQues from '../../assets/icons/VectorPrev_Year_Ques.svg';
import studyMaterial from '../../assets/icons/VectorStudy_Material.svg';
import videoLecture from '../../assets/icons/GroupVideo_Lecture.svg';
import pracQues from '../../assets/icons/GroupPrac_Ques.svg';

const SubjectChapter=()=>{

    const classes = useStyles();

    const [subject, setSubject] = React.useState('')

    const handleChange = event => {
    setSubject(event.target.value)
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
                    <ul style={{listStyle:'none',marginBottom:'3%'}}>
                        <li className={classes.contentList}><img src={videoLecture} className={classes.icon} /><span className={classes.iconText}>Video Lectures</span></li>
                        <li className={classes.contentList}><img src={studyMaterial} className={classes.icon} /><span className={classes.iconText}>Study Material</span></li>
                        <li className={classes.contentList}><img src={pracQues} className={classes.icon} /><span className={classes.iconText}>Practice Questions</span></li>
                        <li className={classes.contentList}><img src={prevYearQues} className={classes.icon} /><span className={classes.iconText}>Prev. year questions</span></li>
                    </ul>
                </div>
                <div className={classes.materialLink}>
                    <h2 className={classes.linkHead} style={{marginBottom:'2%'}}>Link :</h2>
                    <ul>
                    <li className={classes.studyLink}>https://questions.examside.com/</li>
                    </ul>
                </div>
            </div>
            </div>
        </Box>
    )
}

export default SubjectChapter;