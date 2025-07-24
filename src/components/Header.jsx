import Logo from '../../public/images/logo.svg';
import DarkModeLogo from '../../public/images/icon-moon.svg';
import LightModeLogo from '../../public/images/icon-sun.svg';

export default function Header ({handleThemeChange,isDark}) {
    return (
        <header>
            <img className="logo" src={Logo} alt="" />
            <button className="themeSwitchBtn" onClick={handleThemeChange}>
                <img src={isDark ?  LightModeLogo : DarkModeLogo} alt="" />
            </button>
        </header>
    )
}