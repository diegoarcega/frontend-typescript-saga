import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import { Theme } from '@material-ui/core'
import withStyle from '@material-ui/core/styles/withStyles'
import { Classes } from 'jss'
import { NavLink } from 'react-router-dom'

interface Props {
  children: any
  classes: Classes
}

const styles = (theme: Theme) => ({
  content: {
    flexGrow: 1,
    margin: '0 16px',
    paddingTop: '20px',
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
  },
  navLink: {
    color: '#fff',
  },
})

const ROUTES = [
  {
    label: 'Home',
    pathname: '',
  },
  {
    label: 'Login',
    pathname: 'login',
  },
  {
    label: 'Users',
    pathname: 'users',
  },
  {
    label: 'Dashboard',
    pathname: 'dashboard',
  },
]

const Application = ({ children, classes }: Props) => (
  <React.Fragment>
    <CssBaseLine />
    <AppBar position="relative">
      <Toolbar className={classes.toolBar}>
        <List className={classes.links}>
          {ROUTES.map(route => (
            <ListItem key={route.label}>
              <NavLink to={route.pathname} className={classes.navLink}>
                {route.label}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
    <Grid container>
      <Grid className={classes.content}>{children}</Grid>
    </Grid>
  </React.Fragment>
)

export const App = withStyle(styles)(Application)
