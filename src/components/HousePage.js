import "../components/global.css";
import React, { useState, useRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import FormBlock from "../components/FormBlock";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SendForm from "../components/SendForm";
import SquareButton from "../components/buttons/SquareButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import model from "../assets/images/model.png";

// import whatWeDoImg2 from "../assets/images/w-we-do-img2.png";
import plan from "../assets/images/plan.png";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CalculateTable from "../components/CalculateTable";
import Panel from "../components/Panel";
import HouseFotosSlider from "../components/HouseFotosSlider";
import { houses } from "../constant/houses";
import Accordions from "../components/Accordion";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Burger from "../components/Burger";
import BurgerMenu from "../components/BurgerMenu";
import RegularButton from "../components/buttons/RegularButton";

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100vh",
  },
  Block: {
    display: "flex",
    gap: "20px",
    padding: "100px 10%",
    backgroundColor: "#D1D1D1",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "10%",
      justifyContent: "center",
    },
  },

  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    background:
      // "radial-gradient(100% 100% at 0% 0%, #D1D1D1 0%, rgba(209, 209, 209, 0.12) 100%)",
      "radial-gradient(#D1D1D1 0%,rgba(209, 209, 209, 0.12) 100%)",

    zIndex: "2",
  },
  mainImgBox: {
    height: "72vh",
  },
  mainImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  mainImgSlider: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
    },
  },
  mainImgItem: {
    height: "100%",
  },
  secondImgBox: {
    position: "relative",
    width: "100%",
    height: "90vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  mainDescBox: {
    width: "100%",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    padding: "50px 280px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "10%",
      gap: "50px",
      justifyContent: "center",
    },
  },
  mainBlockSubtitleBox: {
    display: "flex",
    gap: "100px",
    [theme.breakpoints.down("md")]: {
      gap: "0",
      justifyContent: "space-between",
    },
  },
  mainBlockTitle: {
    textAlign: "left",
    width: "300px",
  },
  mainBlockList: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    aligneItems: "center",
    justifyContent: "space-between",
  },
  mainBlockItem: {
    fontSize: "12px",
    fontWeight: "400",
  },
  modelBlock: {
    display: "flex",
    gap: "100px",
    padding: "100px 10% 100px 12vw",
    backgroundColor: "#D1D1D1",
    [theme.breakpoints.down("md")]: {
      gap: "40px",
      flexDirection: "column",
      padding: "11%",
      justifyContent: "center",
    },
  },
  modelDesc: {
    position: "relative",
    width: "450px",
    height: "50vh",
    display: "flex",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "65vh",
    },
  },
  accordionBox: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  modelDescFirstColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // gap: "70px",
    justifyContent: "space-between",
  },
  modelDescSecondColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // gap: "70px",
    justifyContent: "space-between",
  },
  modelDescItemTitle: {
    listStyle: "none",
    // width: "100px",
    // paddingRight:"40px",
  },
  // modelNumber: {
  //   fontSize: "48px",
  //   fontWeight: "600",
  // },
  model: {
    width: "50%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "40vh",
    },
  },
  modelDescLine: {
    position: "relative",
    width: "1px",
    height: "100%",
    backgroundColor: "#BDBDBD",
  },
  modelDescLineButton: {
    position: "absolute",
    top: (param) => `${param.pilldistance}%`,
    transition: "0.5s",
    transform: `translate(-50%, 0%)`,
  },
  modelDescLineActive: {
    position: "absolute",
    zIndex: "2",
    left: "50%",
    width: "1px",
    height: (param) => `${param.pilldistance}%`,
    backgroundColor: "black",
    transition: "0.5s",
  },
  modelDescLineMinus: {
    width: "30px",
    height: "30px",
    border: "1px solid",
    borderRadius: "50% 50% 0 0",
    fontSize: "30px",
    backgroundColor: "#D1D1D1",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  minus: {
    position: "relative",
    top: "-8%",
  },
  modelDescLineMinusCircle: {
    width: "30px",
    height: "30px",
    border: "1px solid",
    borderRadius: "50%",
    fontSize: "30px",
    backgroundColor: "#D1D1D1",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  modelDescLinePlus: {
    width: "30px",
    height: "30px",
    border: "1px solid",
    borderRadius: "0 0 50% 50%",
    fontSize: "30px",
    backgroundColor: "#D1D1D1",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  plus: {
    position: "relative",
    bottom: "12%",
  },
  disable: {
    color: "#BDBDBD",
  },
  buttons: {
    position: "absolute",
    display: "flex",
    gap: "20px",
    left: "14%",
    bottom: "4%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "space-around",
      left: "0%",
      bottom: "6%",
    },
  },
  blockGalary: {
    height: "auto",
  },
  panel: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "620px",
    backgroundColor: "#D1D1D1",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },

  BlockRooms: {
    height: "auto",
    paddingLeft: "10%",
    gap: "20px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "10%",
      justifyContent: "center",
    },
  },
  roomsList: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      order: "2",
    },
  },
  roomsImgBox: {
    position: "relative",
    width: "40%",
    height: "90vh",
    marginLeft: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "0",
      order: "1",
      height: "100vw",
    },
  },
  roomImg: {
    position: "absolute",
    top: "0",
    left: "0",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  BlockCalculation: {
    paddingLeft: "10%",
    [theme.breakpoints.down("md")]: {
      padding: "10%",
      justifyContent: "center",
    },
  },
  calculationPlan: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  calculation: {
    display: "flex",
    gap: "40px",
    flexDirection: "column",
    marginLeft: "auto",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      width: "100%",
    },
  },
  calculationItem: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  calculationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calculationBody: {
    paddingLeft: "20px",
    paddingRight: "30px",
    borderLeft: "1px solid",
  },
  calculationBodyItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  calculationResult: {
    display: "flex",
    justifyContent: "center",
    gap: "100px",
    alignItems: "center",
  },
  BlockForm: {
    paddingLeft: "350px",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: "10%",
    },
  },
  BlockTable: {
    paddingBottom: "0px",
    paddingTop: "0px",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      width: "100%",
    },
  },
}));

const HousePage = ({ house }) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [houseNumber, setHouseNumber] = useState(house);
  const [pilldistance, setPilldistance] = useState(20);
  const [pillClick, setPillClick] = useState(0);
  const param = { pilldistance };
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
    console.log("openBurger");
  };
  const [category, setCategory] = React.useState("все");
  const [modulePrice, setModulePrice] = useState(0);
  const [roomsImg, setRoomsImg] = useState(
    houses[houseNumber].modules[0].rooms[0].img
  );
  const [roomsImgIndex, setRoomsImgIndex] = useState(0);
  const [opacity, setOpasity] = useState(true);
  const handleRoomsImgChange = (img, index) => {
    setRoomsImg(img);
    setRoomsImgIndex(index);
  };

  const myRef = useRef(null);
  const categoryRef = React.createRef();

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handlePlusClick = (e) => {
    if (pilldistance + 40 <= 120) {
      setPilldistance((state) => state + 40);
      setPillClick((state) => state + 1);
    }
  };
  const handleMinusClick = (e) => {
    if (pilldistance - 40 >= 10) {
      setPilldistance((state) => state - 40);
      setPillClick((state) => state - 1);
    }
  };

  const handleClickLeft = () => {
    myRef.current.slickPrev();
  };
  const handleClickRight = () => {
    myRef.current.slickNext();
  };

  const handleChangePanel = (value) => {
    //   setValue(newValue);
    setCategory(value);
  };
  const handleChangeCheckbox = (event) => {
    if (event.target.checked) {
      console.log(`add ${event.target.value}`);
      setModulePrice((state) => state + +event.target.value);
    } else {
      setModulePrice((state) => state - +event.target.value);
    }
  };

  const listItem = houses[houseNumber].img.fotosCategory[category].map(
    (item, index) => {
      return (
        <li className={classes.mainImgItem} key={index}>
          <img className={classes.mainImgSlider} src={item} alt="img"></img>
        </li>
      );
    }
  );

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <Box className={` ${classes.BlockFullscreen} ${classes.mainBlock}`}>
            {matches[1200] ? (
              <Burger
                color="white"
                position="absolute"
                click={handleOpenBurgerMenu}
              />
            ) : null}
            <BurgerMenu
              isBurgerMenuOpen={isBurgerMenuOpen}
              click={handleOpenBurgerMenu}
              clickToOpenForm={handleClickConnect}
            />
            <SendForm
              isFormOpen={isFormOpen}
              click={handleClickConnect}
              burger={
                matches[1200] ? (
                  <Burger
                    isOpen={true}
                    click={() => (handleOpenBurgerMenu(), handleClickConnect())}
                  />
                ) : null
              }
            />
            <Box className={classes.button}>
              {matches["1200"] ? null : (
                <RegularButton variant="outlined" click={handleClickConnect}>
                  СВЯЗАТЬСЯ
                </RegularButton>
              )}
            </Box>
            <Box className={classes.mainImgBox}>
              <img
                className={classes.mainImg}
                src={houses[houseNumber].img.main}
                alt="img"
              ></img>
            </Box>
            <Box className={classes.mainDescBox}>
              <Box className={classes.mainBlockTitleBox}>
                <Typography
                  variant="h1"
                  color="textSecondary"
                  className={classes.mainBlockTitle}
                >
                  {houses[houseNumber].name}
                </Typography>
              </Box>
              <Box className={classes.mainBlockSubtitleBox}>
                {/* <ul className={classes.mainBlockList}>
                  {houses[houseNumber].modules.map((item, index) => {
                    return (
                      <li className={classes.mainBlockItem} key={index}>
                        <Typography variant="body1">
                          0{index + 1} Модуль
                        </Typography>
                      </li>
                    );
                  })}
                </ul> */}
                <ul className={classes.mainBlockList}>
                  {houses[houseNumber].modules.map((item, index) => {
                    return (
                      <li className={classes.mainBlockItem} key={index}>
                        <Typography variant="body1">
                          0{index + 1} {item.name}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
                <ul className={classes.mainBlockList}>
                  {houses[houseNumber].modules.map((item, index) => {
                    return (
                      <li className={classes.mainBlockItem} key={index}>
                        <Typography variant="subtitle1">
                          ${item.price} / {item.term} дней
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Box>

          <Box className={classes.modelBlock}>
            <Box className={classes.modelDesc}>
              <Box className={classes.modelDescFirstColumn}>
                {houses[houseNumber].modules.map((item, index) => {
                  return (
                    <li className={classes.modelDescItemTitle} key={index}>
                      <Typography
                        variant="h1"
                        color="textSecondary"
                        className={
                          pillClick >= index
                            ? classes.modelNumber
                            : classes.disable
                        }
                      >
                        0{index + 1}
                      </Typography>
                      <Typography
                        className={pillClick >= index ? null : classes.disable}
                        variant="h6"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        className={pillClick >= index ? null : classes.disable}
                        variant="h6"
                      >
                        {item.area} м2
                      </Typography>
                    </li>
                  );
                })}
              </Box>

              <div className={classes.modelDescLine}>
                <div className={classes.modelDescLineActive}></div>
                {pilldistance < 100 ? (
                  <div className={classes.modelDescLineButton}>
                    <div
                      onClick={handleMinusClick}
                      className={classes.modelDescLineMinus}
                    >
                      <div className={classes.minus}>-</div>
                    </div>
                    <div
                      onClick={handlePlusClick}
                      className={classes.modelDescLinePlus}
                    >
                      <div className={classes.plus}>+</div>
                    </div>
                  </div>
                ) : (
                  <div className={classes.modelDescLineButton}>
                    <div
                      onClick={handleMinusClick}
                      className={classes.modelDescLineMinusCircle}
                    >
                      <div className={classes.minus}>-</div>
                    </div>
                  </div>
                )}
              </div>

              <Box className={classes.modelDescSecondColumn}>
                {houses[houseNumber].modules.map((item, index) => {
                  return (
                    <li className={classes.modelDescItemTitle} key={index}>
                      <Typography
                        className={pillClick >= index ? null : classes.disable}
                        variant="body1"
                      >
                        {item.desc}
                      </Typography>
                    </li>
                  );
                })}
              </Box>
            </Box>
            <Box
              style={{ backgroundImage: `url(${model})` }}
              className={classes.model}
            ></Box>
          </Box>

          <Box className={`${classes.BlockFullscreen} ${classes.blockGalary}`}>
            <Box className={classes.secondImgBox}>
              <HouseFotosSlider myRef={myRef} listItem={listItem} />
              <Box className={classes.buttons}>
                {/* <Button color="secondary">hello</Button> */}
                <SquareButton
                  variant={"contained"}
                  click={handleClickLeft}
                  less
                />
                <SquareButton
                  variant={"contained"}
                  click={handleClickRight}
                  great
                />
              </Box>
              {matches[1200] ? null : (
                <Panel ref={categoryRef} change={handleChangePanel} />
              )}
            </Box>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockRooms}`}>
            <span className={classes.line}></span>
            <Box className={classes.roomsList}>
              <Typography variant="h6">Экспликация</Typography>
              <Box className={classes.accordionBox}>
                <Accordions
                  arr={houses[houseNumber].modules[0].rooms}
                  roomsImg={handleRoomsImgChange}
                />
              </Box>
            </Box>
            <TransitionGroup className={classes.roomsImgBox}>
              <CSSTransition
                key={roomsImgIndex}
                in={opacity}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <img className={classes.roomImg} src={roomsImg} alt="img"></img>
              </CSSTransition>
            </TransitionGroup>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
            <span className={classes.line}></span>
            <Box className={classes.calculationPlan}>
              <Typography variant="h6">Смета</Typography>
              <img
                className={classes.calculationPlanImg}
                src={plan}
                alt="img"
              ></img>
            </Box>
            <Box className={classes.calculation}>
              {houses[houseNumber].modules.map((item, index) => {
                return (
                  <li className={classes.calculationItem} key={index}>
                    <Box className={classes.calculationHeader}>
                      <FormControlLabel
                        onChange={handleChangeCheckbox}
                        value={+item.price.replace(" ", "")}
                        control={<Checkbox color="primary" />}
                        label={
                          <Typography variant="h6">{item.name}</Typography>
                        }
                        labelPlacement="end"
                      />
                      <Typography variant="h3">${item.price}</Typography>
                    </Box>

                    <Box className={classes.calculationBody}>
                      {item.rooms.map((item, index) => {
                        return (
                          <li
                            className={classes.calculationBodyItem}
                            key={index}
                          >
                            <Typography
                              variant="body1"
                              className={classes.calculationBodyText}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              className={classes.calculationBodyText}
                            >
                              {item.area ? `${item.area} м2` : null}
                            </Typography>
                          </li>
                        );
                      })}
                    </Box>
                  </li>
                );
              })}

              <Box className={classes.calculationResult}>
                <Typography variant="h6">Цена</Typography>
                <Typography variant="caption">${modulePrice}</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockTable}`}>
            <CalculateTable houseN={"1"} />
          </Box>

          <Box className={`${classes.Block} ${classes.BlockForm}`}>
            <FormBlock
              title={`
                      Можете отправить свой выбор нам, и мы начнем готовиться к встрече.
              `}
              subtitle={`Наш менеджер свяжеться с вами для выяснения диталей.`}
              email
              img={houses[houseNumber].img.main}
              formPosition="center"
            />
          </Box>

          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default HousePage;