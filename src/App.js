import './App.css';
import {Route, Routes} from "react-router-dom"
import {LoginPage, RegisterPage} from "./pages";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
}

export default App;
