import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";

import Login from "./pages/LoginUser.js"
import Register from "./pages/RegisterUser.js";
import Logout from "./pages/logout.js";

import Profile from "./pages/Profile.js";
import UserList from "./pages/user/UserList.js";
import AddUser from "./pages/user/AddUser.js";
import EditUser from "./pages/user/EditUser.js";

import AlbumList from "./pages/album/AlbumList.js";
import AddAlbum from "./pages/album/AddAlbum";
import EditAlbum from "./pages/album/EditAlbum";

import FotoList from "./pages/foto/FotoList.js"
import AddFoto from "./pages/foto/AddFoto.js";
import EditFoto from "./pages/foto/EditFoto.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>

        //ROUTE LOGIN,REGISTER & LOGOUT
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>

        // ROUTE HOME
        <Route path="/home" element={<Home/>}/>

        //ROUTE USER
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/user" element={<UserList/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/editUser/:id_user" element={<EditUser/>}/>


        //ROUTE ALBUM
        <Route path="/album" element={<AlbumList/>}/>
        <Route path="/addAlbum" element={<AddAlbum/>}/>
        <Route path="/editAlbum/:id_album" element={<EditAlbum/>}/>


        //ROUTE FOTO
        <Route path="/foto" element={<FotoList/>}/>
        <Route path="/addFoto" element={<AddFoto/>}/>
        <Route path="/editFoto/:id_foto" element={<EditFoto/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
