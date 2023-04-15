// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Austin Christopher" />

            <div className='header__content'>
                <h1>Austin Christopher </h1>
                <p>Blockchain Developer & Web.3 Enthusiast</p>
                <a href="mailto:onlinedev444@gmail.com"className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
