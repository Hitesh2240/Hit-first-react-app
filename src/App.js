import "./App.css";
import "./styles/User.module.css";
import  './styles/counter.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import BodyComponent from "./Components/BodyComponent"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserCard from "./Components/userCard";
import style from "./styles/User.module.css";
import Counter from "./Components/counter";
import Todocomponent from "./Components/TodoCompo";
import Todo from "./Components/todo";
import HomePage from "./Components/Home";
import NavbarComponent from "./Components/navbar";
import MuiComponent from "./Components/muiComponent";

function AppComponent() {
  //     let userData = [
  //         {name:"Hitesh", age:14},
  //         {name:"Raj", age:15},
  //         {name:"Ramesh", age:16},
  //         {name:"Somesh", age:17},
  //     ]
  //     const filterData = userData.filter((eachObj)=>eachObj.age>=15)

  //     const myTask = ["go to Market", "Buy vegetable", "Watch Tv"]

  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomePage name={"Home page"} />} />

          <Route
            path="/about" element={<HomePage name={"About page"} />}
          />

          <Route
            path="/contact"
            element={<HomePage name={"Contact page"} />}
          />
          <Route
            path="/counter"
            element={<Counter/>}
          />
          <Route
            path="/Todocomponent"
            element={<Todocomponent/>}
          />
          <Route path= "/mui-learn"
            element = {<MuiComponent/>}
          />
          
        </Routes>
      </BrowserRouter>
   




      {/* <HomePage /> */}

      {/* <Header/> */}
      {/* <Counter/> */}
      {/* <Todocomponent/> */}
      {/* <Todo/> */}

      {/* <div className={style.cardContainer}>
    {filterData.map((oneObj)=>(
         // <BodyComponent name = {"oneObj.name"} age = {oneObj.age} />
         <UserCard
         name={oneObj.name}
         age={oneObj.age}
         mobileNumber={"6758940403"}
         />
        */}
      {/* ))}
    </div> */}
      {/* <ul>
        {myTask.map((a,index)=>(
            <li key={index}>{a}</li>
        ))}
    </ul>
    
    <Footer/> */}
    </>
  );
}
export default AppComponent;
