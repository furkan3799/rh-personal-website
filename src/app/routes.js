import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { RecipeDetail } from "../pages/recipe";
import { CreateRecipe } from "../pages/create-recipe";
import { EditRecipe } from "../pages/edit-recipe";
import { Events } from "../pages/events";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/recipes" element={<Portfolio />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
