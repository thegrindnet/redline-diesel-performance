import './App.css';
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import Services from '../Services/Services.jsx';
import About from '../About/About.jsx';
import FAQ from '../FAQ/FAQ.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
export default function App() {
 return <div className="app"><Header/><main className="app__main"><Hero/><Services/><About/><FAQ/><Contact/></main><Footer/></div>;
}
