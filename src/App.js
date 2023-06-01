import './App.css';
import {Route, Routes} from "react-router-dom"
import {
    AdminEditUserPage,
    AdminHomePage, AdminNewUserPage,
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
            <Route path="/admin/new-user" element={<AdminNewUserPage/>}/>
            <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
}

export default App;
