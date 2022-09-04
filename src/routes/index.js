import Home from "~/pages/Home";
import FindJob from "~/pages/FindJob";
import PostJob from "~/pages/PostJob";


// Public Routes
const publicRoutes = [
  {path:'/', component: Home},
  {path:'/find-job', component: FindJob},
  {path:'/post-job', component: PostJob }   

] 

// Private Routes
const privateRoutes = [
  
] 

export {publicRoutes, privateRoutes}