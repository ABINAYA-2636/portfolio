import "./Nav.css";
import{Routes,Route,Link} from"react-router-dom"
import About from"../Pages/About";
import Contact from"../Pages/Contact";
import Home from"../Pages/Home";
import Projects from"../Pages/Projects";
import Skills from"../Pages/Skills";

function Nav(){
    return(
        <>
        <nav>
            <Link to={"/about"}>About</Link>
            <br/>
            <Link to={"/contact"}>Contact</Link>
            <br/>
            <Link to={"/home"}>Home</Link>
            <br/>
            <Link to={"/projects"}>Projects</Link>
            <br/>
            <Link to={"/skills"}>Skills</Link>
            <br/>
        </nav>
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
        </Routes>
        </>
    )
}
export default Nav;