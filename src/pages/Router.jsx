import { Routes, Route, Navigate } from "react-router-dom";

// layouts
// import AuthLayout from "../layouts/AuthLayout";
// import MainLayout from "../layouts/MainLayout";

// routes
import AuthRoute from "./routes/AuthRoute";
import PublicRoute from "./routes/PublicRoute";

// pages
import HomePage from "./HomePage";
import SinglePostPage from "./SinglePostPage";

// routes
// import AuthRoute from "./routes/AuthRoute";

// const renderWithAuthLayout = (element) => (
//   <AuthLayout>
//     { element }
//   </AuthLayout>
// );


// const renderWithMainLayout = (element) => (
//   <MainLayout>
//     { element }
//   </MainLayout>
// );


function Router() {

  return (
    <Routes>
      {/* <Route path="/" element={renderWithMainLayout(<HomePage/>)}/>
      <Route path="/posts/:id" element={renderWithMainLayout(<SinglePostPage/>)}/>
      <Route path="/about-us" element={renderWithMainLayout(<div>about us</div>)}/>
      <Route path="/log-in" element={renderWithAuthLayout(<div>log page</div>)}/> */}
      <Route path="/" element={<PublicRoute element={HomePage}/>}/>
      <Route path="/posts/:id" element={<PublicRoute element={SinglePostPage}/>}/>
      <Route path="/about-us" element={<PublicRoute element={() => <div>about us</div>}/>}/>
      <Route path="/log-in" element={<AuthRoute element={() => <div>log page</div>}/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default Router;
