import Home from "./routes/home/home.component"
import {Routes,Route} from "react-router-dom"
import "./App.css"
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/sign-in/sign-in.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
const Shop=()=>{
  return <h1>SHOP</h1>;
};
const App=()=>{
  return(
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<SignUpForm/>}/>
    </Route>
  </Routes>
  );
}

export default App;

