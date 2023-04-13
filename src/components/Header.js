// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Austin Christopher </h1>
                <p>Blockchain Developer & Web.3 Enthusiast</p>
                <a href="https://www.linkedin.com/in/austin-c-1a3603272/"className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;