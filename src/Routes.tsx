import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js"
import Home from "./pages/Home"


const Blogspage = lazy(() => import("./pages/Blogs"))
const SingleBlogpage = lazy(() => import("./pages/SingleBlogPage"))
const Aboutpage = lazy(() => import("./pages/About"))

const Routes = () => {
  return (
    <Router>
      <Route path="/blog" component={Blogspage} />
      <Route path="/blog/:id" component={SingleBlogpage} />
      <Route path="/about" component={Aboutpage} />
      <Route path="/" component={Home} />
    </Router>
  );
};

export default Routes;