import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    buttonGreen: {
        backgroundColor: '#76ff03',
        '&:hover': {
            backgroundColor: '#64dd17'
        }
    }
})

export const SplitButton = ({ preview }) => {
    const options = Object.keys(preview ?? {})
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    let selectedPreview = options[selectedIndex]

    return (
        options.length === 0 ?
            null
            : options.length === 1 ?
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} >
                        <Button className={classes.buttonGreen} href={preview[selectedPreview]} target='blank'> View {selectedPreview} </Button>
                    </Grid>
                </Grid>
                : <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} >
                        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                            <Button className={classes.buttonGreen} href={preview[selectedPreview]} target='blank'> View {selectedPreview} </Button>
                            <Button className={classes.buttonGreen}
                                color="primary"
                                size="small"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                                <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="split-button-menu">

                                                {options.map((option, index) => (
                                                    <MenuItem
                                                        key={option}
                                                        disabled={index === selectedIndex}
                                                        selected={index === selectedIndex}
                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Grid>
                </Grid>
    )
}
