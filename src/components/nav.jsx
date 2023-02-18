import shoppingCart from "../images/bag-img.svg"
import downArrow from "../images/down-arrow-img.svg"


export default function Nav() {

    const navItems = [
        { 
            name: 'Furniture',
            link: '',
            dropDown: true
        },
        { 
            name: 'Shop',
            link: '',
        },
        { 
            name: 'About Us',
            link: ''
        },
        {
            name: 'Contact',
            link: ''
        }
    ]

    var cartItems = 0;

    return (
        <nav className="nav">
            <div className="nav__logo" >Panto</div>
            <ul className="nav__item-box" >
                {navItems.map((item)=>(
                    <li className="nav__item" >
                        <a className="nav__link" href={item.link}>
                            <span>{item.name}</span>
                            {item.dropDown ? <img className="nav__item-dropdown" src={downArrow} alt="Down arrow"></img> : null}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="nav__cart-box">
                <img className="nav__cart-img" src={shoppingCart} alt="Shopping cart"></img>
                <div className="nav__cart-items">{cartItems}</div>
            </div>
        </nav>
    )
}