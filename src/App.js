import './App.css';
import {Route, Routes} from "react-router-dom"
import {LoginPage, RegisterPage} from "./pages";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
}

export default App;
