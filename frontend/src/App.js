import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import Beranda from "./components/beranda/Beranda";
import Welcome from "./components/beranda/welcome";
import Blogs from "./components/blogs/Blogs";
import Project from "./components/projects/Project";
import TentangKami from "./components/tentangKami/TentangKami";
import { auth } from './firebase';
import AddUser from "./components/admin/AddUser";
import EditUser from "./components/admin/EditUser";
import AddBerita from "./components/admin/AddBerita";
import EditBerita from "./components/admin/EditBerita";
import AddProject from "./components/admin/AddProjects";
import EditProject from "./components/admin/EditProjects";
import UserList from "./components/admin/UserList";
import LoginAdmin from "./components/admin/LoginAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/attribute/navbar";
import Footer from "./components/attribute/footer";
import FooterLoggedIn from "./components/attribute/FooterLoggedIn";
import NavbarLoggedIn from "./components/attribute/navbarLoggedIn";
import LogoutUser from "./components/admin/logout";
import Profile from "./components/beranda/profile";
import ListBlogs from "./components/blogs/listBlogs";
function App() {
  let [user,loading,error] = useAuthState(auth);
  if (loading) {
    return (
      <div className="w3-center">
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"></img>
      </div>
    );
  }
  if(!user){
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={[<Welcome/>,<Profile/>,<Beranda />]} />
        <Route path="Blogs/" element={[<Blogs />,<ListBlogs/>]} />
        <Route path="Projek/" element={<Project />} />
        <Route path="tentangKami/" element={<TentangKami />} />
        <Route path="login/" element={<LoginAdmin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
  }
  else{
    return(
    <BrowserRouter>
    <NavbarLoggedIn/>
    <Routes>
      <Route path="/" element={[<UserList/>]} />
      <Route path="AddUser/" element={<AddUser />} />
      <Route path="AddBerita/" element={<AddBerita />} />
      <Route path="AddProject/" element={<AddProject />} />
      <Route path="EditUser/" element={<EditUser />} />
      <Route path="EditBerita/" element={<EditBerita />} />
      <Route path="EditProject/" element={<EditProject />} />
      <Route path="logout/" element={<LogoutUser />} />
    </Routes>
    <FooterLoggedIn/>
    </BrowserRouter>);
  }
}
export default App;