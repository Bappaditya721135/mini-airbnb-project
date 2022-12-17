import logo from '../img/logo.svg';

export default function Nav() {
    return (
        <nav className="navbar">
            <img className="airbnb-logo" src={logo} alt="airbnb logo" />
        </nav>
    );
}