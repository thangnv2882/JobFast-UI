import Home from "~/pages/Home";
import FindJob from "~/pages/FindJob";
import PostJob from "~/pages/PostJob";
import Company from "~/pages/Company";
import Companies from "~/pages/Companies";

// Public Routes
const publicRoutes = [
  {path:'/', component: Home},
  {path:'/find-job', component: FindJob},
  {path:'/post-job', component: PostJob },
  {path:'/companies', component: Companies },
  {path:'/cmp/:idCompany', component: Company}
] 

// Private Routes
const privateRoutes = [
  
] 

export {publicRoutes, privateRoutes}