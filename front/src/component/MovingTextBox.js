import React, {useState} from 'react';
import Typist from "react-typist";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const metaText = ["내 방의 인테리어를 도와주는 증강현실 앱",
                "스캔해서 PDF로 변환해주는 앱",
                "건강과 식단을 관리하는 앱",
                "전철 운행 상황을 보여주는 앱",
                "언어 학습 앱",
                "통역 앱",
                "스캔해서 구입할 수 있게 해주는 앱",
                "쇼핑 네비게이션 앱",
                "범죄 관련 정보를 보여주는 앱",
                "실시간 차량 공유 앱",
                "음식 추천 앱",
                "주차 장소를 찾아주는 앱",
                "레스토랑 내부를 확인해서 좌석을 예약하는 앱",
                "온라인 스터디 그룹 앱",
                "노래방 앱",
                "슈퍼마켓 계산대 앱",
                "친구에게 줄 선물을 추천해주는 앱",
                "물건을 사고팔거나 빌려줄 수 있는 앱",
                "가상 의류 쇼핑 앱",
                "냉장고에 무엇이 있는지를 보여주는 앱",
                "최고의 휴가지를 찾아주는 앱"]

const useStyles = makeStyles((theme) => ({
    root:{
        width: "60%",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "4vh"
    },
    textBox: {
        marginTop: "1vh",
        padding: "1vh",
        width: "100%",
        backgroundColor: "#CFD7E0",
    },
    resetButton: {
        margin: theme.spacing(2),
        backgroundColor: "#F57281",
        color: "#FFFFFF",
        fontSize: "2vh",
    },
}));


export default function MovingTextBox() {
    const classes = useStyles();
    const [idea, setIdea] = useState("아래 버튼을 눌러보세요 :)");
    const [key, setKey] = useState(0);

    const onChangeText = () =>
    {
        if(key > 20)
        {
            setKey(0)
            setIdea(metaText[0])
        }
        else
        {
            setKey(key+1)
            setIdea(metaText[key])
        }
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.textBox} variant="h6">
                <Box fontWeight="fontWeightBold">
                    <Typist key={key}>
                        {idea}
                    </Typist>
                </Box>
            </Typography>

            <Button className={classes.resetButton}
                    onClick={onChangeText}>
                {"다시!"}
            </Button>
        </div>
    );

}