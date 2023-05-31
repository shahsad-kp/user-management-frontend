import './App.css';
import {Route, Routes} from "react-router-dom"
import {LoginPage, RegisterPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>}>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="*" element={<div>Not Found</div>}/>
            </Route>
        </Routes>
    );
}

export default App;
