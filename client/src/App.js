import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import UserList from "./components/userList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/loginPage";
import Homepage from "./components/homepage";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Homepage />} />
<<<<<<< HEAD
       <Route exact path="/login" element={<Login />} />
=======
>>>>>>> 9248ab852324baf731677d5cbf34b0f89b379d05
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/login" element={<Login />} />
       <Route path="/users" element={<UserList />} />
     </Routes>
   </div>
 );
};
 
export default App;