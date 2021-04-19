import React, { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Loader from 'react-loader-spinner'

import background from './assets/background.jpg'
import { Navbar } from './components/Navbar'
import { myTheme } from './theme/myTheme'
import { Home } from './pages/Home'



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
                        </Route>

                        <Route path="/aboutMe" exact>
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


