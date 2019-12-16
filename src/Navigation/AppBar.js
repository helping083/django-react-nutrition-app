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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const AppBars = (props) => {
  const classes = useStyles();
  let uuidRoute = `cart${props.uuid}`
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
               <Link component={Link1} to="/" className={classes.link}>home</Link>
               <Link component={Link1} to="/auth" className={classes.link}>auth</Link>
               { props.isSignUp ?
                 <Link component={Link1} to="/logout" className={classes.link}>logout</Link>
                 :null
               }
               {
                 props.isSignUp ? 
                 <Link component={Link1} to={`/orders/usersList/${props.uuid}`} className={classes.link}>cart</Link>
                 :null
               }   
              </nav>
            </Typography>
          </Hidden>
        </AppBar>
    </div>
  )
}
AppBars.propTypes = {
  to: PropTypes.string,
  isSignUp: PropTypes.bool
}
const mapStateToProps = state=> {
  return {
    isSignUp: state.auth.isSignUp,
    uuid: state.auth.userId
  }
}
export default connect(mapStateToProps,null)(AppBars);