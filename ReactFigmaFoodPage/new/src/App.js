
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Splash from "./FigmaFoodHub/Splash";
import Welcome from "./FigmaFoodHub/Welcome";
import SignUp from "./FigmaFoodHub/SignUp";
import Login from "./FigmaFoodHub/Login";
import VerificationCode from "./FigmaFoodHub/VerificationCode";
import ResetPassword from "./FigmaFoodHub/ResetPassword";
import Registration from "./FigmaFoodHub/Registration";
import MenuPage from "./FigmaFoodHub/MenuPage";
import FoodDetails from "./FigmaFoodHub/FoodDetails";
import Category from "./FigmaFoodHub/Category";
import Cart from "./FigmaFoodHub/Cart";
import Favorites from "./FigmaFoodHub/Favorites";
import MyOrders from "./FigmaFoodHub/MyOrders";
import Profile from "./FigmaFoodHub/Profile";
import Address from "./FigmaFoodHub/Address";
import Rating from "./FigmaFoodHub/Rating";
import Review from "./FigmaFoodHub/Review";
import ReviewRestaurent from "./FigmaFoodHub/ReviewRestaurent";
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Login/>}/>
          <Route path="/verificationcode" element={<VerificationCode/>}/>
          <Route path="/verificationcode" element={<Login/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/verificationcode" element={<ResetPassword/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/registration" element={<ResetPassword/>}/>
          
          <Route path="/menupage" element={<MenuPage/>}/>
          <Route path="/menupage" element={<Login/>}/>
          <Route path="/fooddetails" element={<FoodDetails/>}/>
          <Route path="/fooddetails" element={<MenuPage/>}/>

          <Route path="/category" element={<Category/>}/>
          <Route path="/category" element={<MenuPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart" element={<FoodDetails/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/favorites" element={<MenuPage/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile" element={<MenuPage/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/address" element={<Profile/>}/>
          <Route path="/rating" element={<Rating/>}/>
          <Route path="/rating" element={<Address/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/review" element={<Rating/>}/>
          <Route path="/reviewrestaurent" element={<ReviewRestaurent/>}/>

          <Route path="/reviewrestaurent" element={<Review/>}/>
          <Route path="/menupage" element={<ReviewRestaurent/>}/>
          <Route path="/welcome" element={<MenuPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
