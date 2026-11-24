import './Footer.css';
import logo from '../../assets/images/logo.png';
import { business, navigation } from '../../utils/constants.js';
export default function Footer(){return <footer className="footer"><div className="footer__inner"><div className="footer__top"><a className="footer__brand" href="#home"><img className="footer__logo" src={logo} alt="Redline Diesel Performance"/><span>REDLINE<br/>DIESEL PERFORMANCE</span></a><nav className="footer__links" aria-label="Footer navigation">{navigation.map(item=><a href={item.href} key={item.href} className="footer__link">{item.label}</a>)}</nav></div><div className="footer__bottom"><span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span><span>{business.city}</span></div></div></footer>}
