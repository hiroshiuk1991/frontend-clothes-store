import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core";

import { createMuiTheme } from '@material-ui/core/styles';
import MainContainer from "./components/MainContainer";
// import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: 'rgb(240, 128,128)',
        contrastText: '#fff'
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MainContainer />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
