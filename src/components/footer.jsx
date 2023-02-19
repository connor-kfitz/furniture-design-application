import FacebookIcon from "../images/facebook-icon.svg";
import TwitterIcon from "../images/twitter-icon.svg";
import InstagramIcon from "../images/instagram-icon.svg";


export default function Footer() {

    const services = ['Email Marketing', 'Campaigns', 'Branding'];
    const furniture = ['Beds', 'Chair', 'All'];
    const follwUs = [
        {
            name: 'Facebook',
            icon: FacebookIcon
        },
        {
            name: 'Twitter',
            icon: TwitterIcon
        },
        {
            name: 'Instagram',
            icon: InstagramIcon
        },
    ];


    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top__info-box">
                    <div className="footer-top__title">Panto</div>
                    <div className="footer-top__text">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</div>
                </div>
                <ul className="footer-top__services-box">
                    <li className="footer-top__item title">Services</li>
                    {services.map((item) => (
                        <li className="footer-top__item">{item}</li>
                    ))}
                </ul>
                <ul className="footer-top__services-box">
                    <li className="footer-top__item title">Furniture</li>
                    {furniture.map((item) => (
                        <li className="footer-top__item">{item}</li>
                    ))}
                </ul>
                <ul className="footer-top__services-box">
                    <li className="footer-top__item title">Follw Us</li>
                    {follwUs.map((item) => (
                        <li className="footer-top__item with-icons">
                            <img class="footer-top__icon" src={item.icon} alt=""></img>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom__terms">Copyright © 2021</div>
                <div className="footer-bottom__text">Terms & Conditions</div>
                <div className="footer-bottom__text">Privacy Policy</div>
            </div>
        </footer>
    )
}