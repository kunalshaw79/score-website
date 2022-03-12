import React,{useState,useEffect} from 'react';
import {AppBar,Toolbar,Typography,Button,IconButton,Drawer,Link,MenuItem,} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './styles';
import logo from '../../assets/images/enactusLogo.png';
import { colors } from '../../styles/colors'

const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Subjects",
      href: "/course",
    },
    {
      label: "About Us",
      href: "/about",
    },
  ];

 const Navbar=()=>{

    const classes=useStyles();

    const [state, setState] = useState({mobileView: false,dropDown: false,});
    
    const { mobileView, dropDown } = state;
    
    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
    
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);
    
      const DesktopView = () => {
        return (
          <Toolbar className={classes.toolbar}>{enactusLogo}<div>{getMenuButtons()}</div></Toolbar>
        );
      };
    
      const MobileView = () => {
        const handleDropDownOpen = () =>setState((prevState) => ({ ...prevState, dropDown: true }));
        const handleDropDownClose = () =>setState((prevState) => ({ ...prevState, dropDown: false }));
    
        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDropDownOpen,
              }}
            >
              <MenuIcon style={{fontSize:'2rem'}}/>
            </IconButton>
    
            <Drawer
              {...{
                anchor: "left",
                open: dropDown,
                onClose: handleDropDownClose,
                style:{backdropFilter:'blur(5px)'}
              }}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.dropDownContainer}>{getDropdownChoices()}</div>
            </Drawer>
    
            <div>{enactusLogo}</div>
          </Toolbar>
        );
      };
    
      const getDropdownChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                key: label,
                style:{textDecoration:'none',color:colors.white,'&:hover':{color:colors.yellow},fontFamily:'Roboto'},
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };
    
      const enactusLogo = (
        <img src={logo} className={classes.logo}/>
      );
    
      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className:classes.menuButton,
                style:{textTransform:'none'},
              }}
            >
              {label}
            </Button>
          );
        });
      };

    return(
      <header>
      <AppBar elevation={0} className={classes.header} position='sticky'>
        {mobileView ? MobileView() : DesktopView()}
      </AppBar>
      </header>
    )
}

export default Navbar;