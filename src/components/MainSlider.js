import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { NavLink } from "react-router-dom";
import main_img from "../assets/images/main_img.png";
import leftpart from "../assets/images/leftpart.png";
import rightpart from "../assets/images/rightpart.png";
import ReactPlayer from "react-player";
import slides from "../constant/slides";
// import gif from "../asssets/images/gif.gif";
import Button from "@material-ui/core/Button";
import numbers from "../constant/numbers";
import axios from "axios";
import findDataFromCategory from "../utils/findDataFromCategory";
import SendForm from "./SendForm";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",
    height: "100vh",
  },
  content: {
    padding: "60px 0px 100px",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: "100%",
    height: "100vh",
    backgroundColor: "#E5E5E5",
  },
  button: {
    // position:"absolute",
    // bottom:"100px",
    // right:"280px",
    borderRadius: "0",
    height: "36px",
    marginLeft: "auto",
    border: "1px solid",
  },
  mainVideoBox: {
    position: "relative",
    // position:"fixed",
    // top:"50%",
    // right:"280px",
    width: "480px",
    height: "100%",

    // transform: "translate(0%, -50%)",
  },
  fullImg: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: (param) => 1 - 0.1 * param.scrol,
  },
  leftpartImg: {
    position: "absolute",
    top: "47%",
    left: "3%",
    // transform: "translate(-50%) scale(1.15)",
    transform: (param) =>
      `translate(0%,${-50 - param.scrol * 10}% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scrol,
    // opacity:1,
  },
  rightpartImg: {
    position: "absolute",
    top: "47%",
    left: "62%",
    transform: (param) =>
      `translate(${-50 + param.scrol * 10}%, ${
        -50 - param.scrol * 10
      }% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scrol,
    // opacity:1,
  },
  langBox: {
    // position:"absolute",
    top: "90px",
    right: "280px",
    display: "flex",
    gap: "6px",
    cursor: "pointer",
    marginLeft: "auto",
  },
  midleBlock: {
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    gap: "50px",
    width: "100%",
    height: "90%",
    // border:"1px solid",
    alignItems: "center",
    justifyContent: "space-between",
  },
  midleLine: {
    width: "75px",
    height: "1px",
    backgroundColor: "black",
  },
  article: {
    display: "flex",
    gap: "40px",
    width: "350px",
    flexDirection: "column",
  },
  header: {
    fontSize: "48px",
    fontWeight: "600",
    color: "white",
  },
  text: {
    fontSize: "12px",
    width: "250px",
  },

  bottomLine: {
    position: "relative",
    width: (param) => param.lineLength + "px",
    height: "1px",
    backgroundColor: "black",
    "&::before": {
      transformOrigin: "100% 50%",
      position: "absolute",
      content: `''`,
      display: "block",
      width: "10px",
      height: "1px",
      top: "0",
      right: "0",
      backgroundColor: "black",
      transform: "rotate(40deg)",
    },
    "&::after": {
      transformOrigin: "100% 50%",
      position: "absolute",
      content: `''`,
      display: "block",
      width: "10px",
      height: "1px",
      top: "0",
      right: "0",
      backgroundColor: "black",
      transform: "rotate(330deg)",
    },
    transition: "0.5s",
  },
  numbers: {
    position: "absolute",
    bottom: "125px",
    left: "215px",
    display: "flex",
    // width:"272px",
    height: "20px",
    // border:"1px solid black",
  },
  number: {
    cursor: "pointer",
    fontSize: "20px",
    width: "80px",
    height: "20px",
    // border:"1px solid black",
  },
  activeNumber: {
    color: "#828282",
  },
}));

const Slider = ({ scrol }) => {
  const [lineLength, setLineLength] = useState(265);
  const [activeNumb, setActiveNumb] = useState(0);
  const [playVideo, setPlayVideo] = useState(true);
  const param = { scrol, lineLength };
  const classes = useStyles(param);
  const [resources, setResources] = useState(null);
  const [resourcestv, setResourcestv] = useState(null);
  const [fields, setFields] = useState({
    headers: null,
    subtitles: null,
  });

  useEffect(() => {
    axios.get("/rest/resources").then((response) => {
      console.log(response.data.results);
      setResources(response.data.results);
    });
    axios.get("/rest/resourcestv").then((response) => {
      console.log(response.data.results);
      setResourcestv(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (resources && resourcestv) {
      setFields({
        headers: findDataFromCategory(resources, resourcestv, 2),
        subtitles: findDataFromCategory(resources, resourcestv, 3),
      });
    }
  }, [resources, resourcestv]);
  const handleNumberClick = (e) => {
    const numb = +e.target.textContent[1];
    setLineLength(() => (numb === 1 ? 265 : 265 + 80 * (numb - 1)));
    setActiveNumb(numb - 1);
  };

  return (
    <div className={classes.root}>
      <SendForm />
      <Box className={classes.content}>
        <Button className={classes.button} variant="outlined">
          СВЯЗАТЬСЯ
        </Button>
        <Box className={classes.midleBlock}>
          <span className={classes.midleLine}></span>

          <Box className={classes.article}>
            <Typography className={classes.header} variant="h1" component="h1">
              {fields.headers ? fields.headers[activeNumb].value : "Title"}
            </Typography>
            <Box>
              {slides[activeNumb].image ? (
                <img
                  className={classes.logo}
                  src={slides[activeNumb].image}
                  alt="icon"
                ></img>
              ) : null}
            </Box>
            <Typography className={classes.text} variant="h6" component="h6">
              {fields.subtitles
                ? fields.subtitles[activeNumb].value
                : "Subtitle"}
            </Typography>
          </Box>
          <Box className={classes.mainVideoBox}>
            <ReactPlayer
              height="100%"
              width="100%"
              url={slides[activeNumb].video}
              playing={playVideo}
              muted={true}
              onReady={() => {
                setPlayVideo(true);
              }}
            />
          </Box>
        </Box>
        <Box className={classes.langBox}>
          <Typography className={classes.lang} variant="h6" component="h6">
            RU
          </Typography>
          <Typography className={classes.lang} variant="h6" component="h6">
            EN
          </Typography>
        </Box>
        <div className={classes.numbers}>
          {numbers.map((item, index) => (
            <span
              key={index}
              className={
                index <= activeNumb
                  ? `${classes.number} ${classes.activeNumber}`
                  : classes.number
              }
              onClick={handleNumberClick}
            >
              {item}
            </span>
          ))}
        </div>
        <span className={classes.bottomLine}></span>
      </Box>
    </div>
  );
};
export default Slider;