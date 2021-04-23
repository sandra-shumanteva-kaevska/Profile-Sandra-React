import React, { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Loader from 'react-loader-spinner'

import { Navbar } from './components/Navbar'
import { myTheme } from './theme/myTheme'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { AboutMe } from './pages/AboutMe'



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    },
}))

export const App = () => {
    const classes = useStyles()
    const [loader, setLoader] = useState(false)
    return (
        <ThemeProvider theme={myTheme}>
            <Router>
                <Box className={classes.root}>
                    <Navbar />

                    {loader && <Loader
                        type="Hearts"
                        color="pink"
                        height={200}
                        width={200}
                        className="loader" />}

                    <Switch>

                        <Route path="/" exact>
                            <Home />
                        </Route>

                        <Route path="/projects" exact>
                            <Projects showLoader={setLoader} />
                        </Route>

                        <Route path="/aboutMe" exact>
                            <AboutMe />
                        </Route>

                        <Route path="/contactMe" exact>
                        </Route>

                    </Switch>
                </Box>
            </Router>
        </ThemeProvider>
    )
}


render(<App />, document.getElementById("root"))


