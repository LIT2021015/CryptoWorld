import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import Profile from "./Pages/Profile";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
  },
}));
const Combine = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.App}>
        <Header />
        <Homepage />
        <Footer />
      </div>
    </>
  );
};
const Combine2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header/>
      <CoinPage />
      <Footer/>
    </div>
  );
};
const Combine3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Combine />} exact />
          <Route path="/coins/:id" element={<Combine2 />} exact />

          <Route path="/User" element={<Combine3 />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
