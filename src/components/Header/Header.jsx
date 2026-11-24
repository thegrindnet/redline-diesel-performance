import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import logo from '../../assets/images/logo.png';
import { business } from '../../utils/constants.js';
export default function Header() {return <header className="header"><div className="header__inner"><a href="#home" className="header__brand" aria-label="Redline Diesel Performance home"><img className="header__logo" src={logo} alt="Redline Diesel Performance logo"/><span className="header__brand-words"><strong>REDLINE</strong><small>DIESEL PERFORMANCE</small></span></a><Navigation/><a className="header__call" href={`tel:${business.tel}`}>CALL NOW <span aria-hidden="true">↗</span></a></div></header>}
