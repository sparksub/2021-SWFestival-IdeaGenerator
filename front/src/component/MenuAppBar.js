import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '@material-ui/icons/GitHub';

import logo from '../logo.svg';
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        // marginRight: theme.spacing(2),
        height: "6vmin"
    },
    title: {
        flexGrow: 1,
        marginLeft: '2vh',
    },
    toolbar: {
        backgroundColor: "#375A7C",
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.toolbar}>
                <Toolbar>
                    <img src={logo} className={classes.menuButton} alt={"logo image"} />
                    <Typography className={classes.title}>
                        주제주세요
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">KHU-SWF</Button>
                    <MenuItem>
                        <IconButton color="inherit" href="https://github.com/Daria-SubinPark/2021-SWFestival-IdeaGenerator">
                            <GithubIcon />
                        </IconButton>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </div>
    );
}
