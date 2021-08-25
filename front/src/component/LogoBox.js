import React from "react";
import "./LogoBox.css"
import logo from "../logo.svg";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function LogoBox() {
    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h4">
                <Box fontWeight="fontWeightBold">
                    {"주제주세요"}
                </Box>
            </Typography>
            <Typography variant="h6">
                <Box fontWeight="fontWeightLight">
                    {"아래 버튼을 눌러서 새롭게 생성 되는 주제를 참고해 보세요!"}
                </Box>
            </Typography>
        </div>
    );
}