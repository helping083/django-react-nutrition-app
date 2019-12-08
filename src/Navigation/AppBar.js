import React from 'react'
import Link from '@material-ui/core/Link'; 
import { NavLink as RouterLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './AppBar.module.scss';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));

const Link1 = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref}  {...props} activeClassName={styles.active}/>
));
const Cards = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref}  {...props} activeClassName={styles.active}/>
));
const linkHome = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref}  {...props} activeClassName={styles.active} exact/>
));

export default function AppBars(props) {
  const classes = useStyles();
  return (
    <div className={[classes.root].join(' ')}>
        <AppBar position="static" className ={[styles.appBars].join(' ')}>
          <Hidden mdUp>
            <Toolbar  variant="dense">
              <IconButton 
                edge="start" 
                size="small"
                color="inherit" 
                aria-label="menu"
                onClick={props.openDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Hidden>
          <Hidden smDown>
            <Typography variant="h6" className={classes.title}>
              <nav>
               <Link component={Link1} to="/auth" className={classes.link}>auth</Link>   
              </nav>
            </Typography>
          </Hidden>
        </AppBar>
    </div>
  )
}