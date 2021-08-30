import React from "react";
import "./LogoBox.css"
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root:{
        width: "60%",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        margin: "2%",
        padding: '1vh',
    },
    eachBox:{
        marginLeft: '1vh',
        marginRight: '1vh'
    },
    setButton: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#375A7C",
        color: "#FFFFFF",
        fontSize: "2vh",
        height: '95%'
    },
    setBox: {
        flexDirection: "row",
        display: "flex",
        width: "100%"
    },
    textBox: {
        flexDirection: "row",
        display: "flex",
        width: "100%",
        alignItems: "center",
    },
    extendedIcon: {
        marginLeft: theme.spacing(1),
    },
    fabBox: {
        margin: '1vh',
        backgroundColor: "#F57281",
        color: "#FFFFFF",
    }
}));



export default function InputBox() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textBox}>
                <Typography variant="subtitle1"
                            style={{marginLeft: '1vh',
                                    marginRight: '1vh'}}>
                    <Box fontWeight="fontWeightBold">
                        {"생성되는 주제에 포함되었으면 하는 단어를 입력하세요: "}
                    </Box>
                </Typography>
                <Fab className={classes.fabBox}
                     variant="extended"
                     size="small"
                     aria-label="add"
                >
                    {"코로나"}
                    <CloseIcon className={classes.extendedIcon}
                               fontSize="small" />
                </Fab>
                <Fab className={classes.fabBox}
                     variant="extended"
                     size="small"
                     aria-label="add"
                >
                    {"카페"}
                    <CloseIcon className={classes.extendedIcon}
                               fontSize="small" />
                </Fab>
                <Fab className={classes.fabBox}
                     variant="extended"
                     size="small"
                     aria-label="add"
                >
                    {"추천"}
                    <CloseIcon className={classes.extendedIcon}
                               fontSize="small" />
                </Fab>
            </div>
            <div className={classes.setBox}>
                <TextField
                    id="text-field-idea"
                    helperText="여기에 입력해 주세요! 최대 3개! (예: 코로나, 카페, 추천)"
                    style={{marginLeft: '1vh',
                            marginRight: '1vh',
                            width: "98%"}}
                />
                <Button className={classes.setButton}>
                    {"등록"}
                </Button>
            </div>
        </div>
    );
}