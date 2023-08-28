import "./App.scss";
import Sidenav from "./components/sidenav/Sidenav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galleries from "./pages/galleries/Galleries";
import Contact from "./pages/contact/Contact";
import Landscapes from "./pages/galleries/landscapes/Landscapes";
import Animals from "./pages/galleries/animals/Animals";
import Cityscapes from "./pages/galleries/cityscapes/Cityscapes";
import People from "./pages/galleries/people/People";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/About",
    element: About,
  },
  {
    path: "/Galleries",
    element: Galleries,
  },
  {
    path: "/Contact",
    element: Contact,
  },
  {
    path: "/Landscapes",
    element: Landscapes,
  },
  {
    path: "/Animals",
    element: Animals,
  },
  {
    path: "/Cityscapes",
    element: Cityscapes,
  },
  {
    path: "/People",
    element: People,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
