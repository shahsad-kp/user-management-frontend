import './App.css';
import {Route, Routes} from "react-router-dom"
import {
    AdminHomePage,
    HomePage,
    LoginPage,
    ProfilePage,
    RegisterPage
} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/admin" element={<AdminHomePage/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
}

export default App;
