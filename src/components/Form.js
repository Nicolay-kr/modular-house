import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SquareButton from "./buttons/SquareButton";
import RegularButton from "./buttons/RegularButton";
import ClearIcon from "@material-ui/icons/Clear";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "145px",
  },
  titleBox: {
    marginLeft: "auto",
    display: "flex",
    gap: "20px",
    flexDirection: "row-reverse",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  formBox: {
    // position: "relative",
    height: (param) => (param.buttonAbs ? "100%" : "auto"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "300px",
    width: "22vw",
    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
    },
  },
  formHeader: {
    // marginTop: "140px",
  },
  title: {
    textTransform: "uppercase",
    width: "245px",
  },
  subtitle: {
    marginTop: "60px",
    width: "120px",
    // color: "#4F4F4F",
  },

  formFields: {
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
  },

  button: {
    position: (param) => (param.button ? "absolute" : "relative"),
    bottom: (param) => (param.button ? "0" : null),
    left: (param) => (param.button ? "0" : null),
    marginTop: "100px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  expodom_img: {
    width: "100%",
  },
  Expodom: {
    marginTop: "100px",
    "& .makeStyles-message-392": {
      color: "red",
    },
  },
  messageBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "60px",
    width: "100%",
  },
  messageLabelBox: {
    display: "flex",
    justifyContent: "space-between",
    color: "#4F4F4F",
  },
  messageField: {
    // marginTop: "50px",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #4F4F4F",
    marginTop: "10px",
    fontSize: "18px",
    "&:focus": {
      outline: "none",
    },
    // fontFamily:'Ubuntu',
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background:
      "radial-gradient(100% 100% at 0% 0%, #E2E2E2, rgba(232, 232, 232, 0.12) 100%)",
    background: "radial-gradient(#E2E2E2,rgba(232, 232, 232, 0.12))",
    backdropFilter: "blur(10px)",
    boxShadow: theme.shadows[5],
    padding: "100px 120px",
    width: "600px",
    height: "500px",
  },
  buttonBox: {
    display: "inline-block",
    marginLeft: "auto",
  },
  buttonBoxLeft: {
    display: "inline-block",
    marginRight: "auto",
  },
}));

const Form = ({ title, email, text, subtitle, buttonAbs, closeForm }) => {
  console.log(buttonAbs, !!buttonAbs);
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [button, setButton] = useState(buttonAbs);
  const [open, setOpen] = React.useState(false);
  const param = { button, buttonAbs };
  const classes = useStyles(param);
  const checkAbsbutton = () => {
    setButton(matches[1200] ? false : buttonAbs);
  };
  useEffect(() => {
    checkAbsbutton();
  }, [matches]);

  // const handleClick = () => {

  // }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.formBox}>
      <Box className={classes.formHeader}>
        {title ? (
          !matches[1200] ? (
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
          ) : (
            <Box className={classes.titleBox}>
              <span className={classes.line}></span>
              <Typography variant="h4" className={classes.text}>
                {title}
              </Typography>
            </Box>
          )
        ) : null}
        {subtitle ? (
          <Typography variant="body1" className={classes.subtitle}>
            Оставьте заявку и наш менеджер свяжеться с вами
          </Typography>
        ) : null}
      </Box>

      <form className={classes.root} noValidate autoComplete="off">
        <Box className={classes.formFields}>
          <TextField
            //   required
            id="standard-basic"
            label={<Typography variant="body2">Имя</Typography>}
            InputProps={{
              endAdornment: <InputAdornment position="end">*</InputAdornment>,
            }}
          />
          <TextField
            InputProps={{
              endAdornment: <InputAdornment position="end">*</InputAdornment>,
            }}
            id="standard-basic"
            label={<Typography variant="body2">Телефон</Typography>}
          />
          {email ? (
            <TextField
              id="standard-basic"
              label={<Typography variant="body2">Email</Typography>}
              InputProps={{
                endAdornment: <InputAdornment position="end">*</InputAdornment>,
              }}
            />
          ) : null}
        </Box>
        {text ? (
          <Box className={classes.messageBox}>
            <Box className={classes.messageLabelBox}>
              <Typography variant="body1">
                Оставьте заявку и наш менеджер свяжеться с вами
              </Typography>
              <div>*</div>
            </Box>
            {/* <TextField className={classes.messageField} id="standard-basic" /> */}
            <TextareaAutosize
              rowsMin={3}
              className={classes.messageField}

              // aria-label="empty textarea"
              // placeholder="Empty"
            />
          </Box>
        ) : null}

        <Box className={classes.button}>
          <RegularButton variant="outlined" click={handleOpen}>
            Отправить
          </RegularButton>
          {matches[1200] ? (
            <RegularButton variant="outlined" click={closeForm}>
              Назад
            </RegularButton>
          ) : null}
        </Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Box className={classes.buttonBox}>
                <SquareButton
                  variant="outlined"
                  click={handleClose}
                  icon={<ClearIcon />}
                />
              </Box>
              <Typography>
                СПАСИБО, ЧТО ВОСПОЛЬЗОВАЛИСЬ УСЛУГАМИ НАШЕЙ КОМПАНИИ
              </Typography>
              <Typography variant="body1">
                Никто ни за что ответственность не несет
              </Typography>
              <Box className={classes.buttonBoxLeft}>
                <RegularButton variant="outlined" click={handleClose}>
                  ОК
                </RegularButton>
              </Box>
            </div>
          </Fade>
        </Modal>
      </form>
    </Box>
  );
};
export default Form;
