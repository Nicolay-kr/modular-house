import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  panelBox: {
    position: 'absolute',
    left: '10vw',
    bottom: '0',
    display: 'flex',
    gap: '60px',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      left: '0',
      position: 'relative',
    },
  },
  mockBox: {
    width: '28vw',
    marginLeft: '100px',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  panel: {
    bottom: '0',
    minWidth: '54vw',
    height: '76px',
    paddingLeft: '50px',
    backgroundColor: '#D1D1D1',
    '@media (max-width:1440px)': {
      minWidth: '50vw',
    },
    '@media (min-width:1921px)': {
      height: '3.96vw',
      paddingLeft: '2.6vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      paddingLeft: '20px',
      position: 'relative',
    },
  },
  tabs: {
    height: '56px',
    borderBottom: '1.5px solid #BDBDBD',
    overflow: 'visible !important',
    
    '@media (min-width:1921px)': {
      height: '2.9vw',
    },
    '&>div': {
      boxSizing: 'border-box',
      overflow: 'visible',
      [theme.breakpoints.down('md')]: {
        overflow: 'scroll',
      },
    },
    '&>div>div': {
      height: '100%',
      overflow: 'visible',
    },
    '&>div>span': {
      bottom: '-4%',
    },
    
  },
  tab: {
    padding: '0',
    paddingRight: '20px',
    '@media (min-width:1921px)': {
      paddingRight: '1.1vw',
    },
    '& span': {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      '& h6': {
        alignSelf: 'flex-start',
      },
    },
  },
}));

const Panel = React.forwardRef(({ change, arr }, ref) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue((state) => newValue);
    change(arr[newValue].name);
  };
  const listItem = arr.map((item, index) => {
    return (
      <Tab
        className={classes.tab}
        key={index}
        label={
          <Typography variant='h6' color='textPrimary'>
            {' '}
            {item['Название модуля']}{' '}
          </Typography>
        }
      ></Tab>
    );
  });
  return (
    <Box className={classes.panelBox}>
      <Box className={classes.mockBox}></Box>
      <Box className={classes.panel}>
        <Tabs
          className={classes.tabs}
          ref={ref}
          value={value}
          indicatorColor='primary'
          variant="scrollable"
          textColor='primary'
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
        >
          {listItem}
        </Tabs>
      </Box>
    </Box>
  );
});

export default Panel;
