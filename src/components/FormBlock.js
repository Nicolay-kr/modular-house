import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Form from "./Form"
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  Block: {
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection:'column',
      alignItems:'center',
    },
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  title: {
    marginTop: "140px",
    width: "165px",
  },
  mediaBlock: {
    display: "flex",
    marginLeft: "auto",
    // border: "1px solid",
    width: "50%",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      order:'1,'
    },
  },
  mediaBlock_unborder: {
    border: "none",
    // border:"1px solid"
  },
  formBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    justifyContent: param => param.formPosition? param.formPosition:"space-between",
    gap:"140px",
    minWidth:'300px',
    width: "22vw",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      order:'2',
    },

    
  },

  button: {
    width: "120px",
    borderRadius: "0",
    height: "36px",
    marginTop: "96px",
    border: "1px solid",
  },
  text:{
    width: "300px",
    textTransform: "uppercase",
  },
  expodom_img: {
    width: "90%",
    objectFit: 'cover',
    marginLeft: 'auto',
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin:"0",
    },
  },
  Expodom: {
    "& .makeStyles-message-392": {
      color: "red",
    },
  },
}));

const FormBlock = ({header,title, subtitle, text, email, img, formPosition, staticImg}) => {
  const param = { formPosition };
  const classes = useStyles(param);
  // const [review, setReview] = useState(0);

  return (
    <div className={classes.root}>
      <Box className={`${classes.Block} ${classes.Expodom}`}>
        <Box className={classes.formBox} >
          {header?(<Typography variant="h4" className={classes.text}>{header}</Typography>):null }
          <Form title={title} subtitle={subtitle?subtitle:null} email={email?email:null} text={text?text:null}/>
        </Box>
        <Box className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}>
          
        {!staticImg?(<GatsbyImage
            className={classes.expodom_img}
            image={img}
            alt="img"
          ></GatsbyImage>):(<img
          className={classes.expodom_img}
          src={img}
          alt="img"
        ></img>)}
        </Box>
      </Box>
    </div>
  );
};
export default FormBlock;
