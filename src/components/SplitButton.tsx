import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

interface IProps {
    preview: any
}

export const SplitButton = ({ preview }: IProps) => {
    const options = Object.keys(preview ?? {});
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<any>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (anchorRef.current?.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const selectedPreview = options[selectedIndex];

    return (
        options.length === 0
            ? null
            : options.length === 1
                ? <Button href={preview[selectedPreview]} target='blank' variant="contained" color="secondary" size='small'>View {selectedPreview}</Button>
                : <>
                    <ButtonGroup variant='text' ref={anchorRef} aria-label='split button'>
                        <Button href={preview[selectedPreview]} target='blank' variant="contained" color="secondary" size='small'>View {selectedPreview}</Button>
                        <Button
                            variant="contained"
                            color='secondary'
                            size='small'
                            aria-controls={open ? "split-button-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-label='select merge strategy'
                            aria-haspopup='menu'
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper style={{ zIndex: 10 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === "bottom" ? "center top" : "center bottom"
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id='split-button-menu'>
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
                </>
    );
};
