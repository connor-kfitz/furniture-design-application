import ProductSlider from "./product-slider";
import StarRating from "./star-rating";
import LinkProduct from "./link-product";
import SakariasChair from "../images/sakarias-chair-img.png";
import BaltsarChair from "../images/baltsar-chair-img.png";
import AnjayChair from "../images/anjay-chair-img.png";
import NyantuyChair from "../images/nyantuy-chair-img.png";
import Addition from "../images/addition-icon.svg";
import CarouselArrow from "../images/carousel-arrow-icon.svg";

export default function TopProducts() {

    const topProductList= [
        {
            type: 'Chair',
            title: 'Sakarias Armchair',
            rating: 5,
            price: '392',
            img: SakariasChair
        },
        {
            type: 'Chair',
            title: 'Baltsar Chair',
            rating: 5,
            price: '299',
            img: BaltsarChair 
        },
        {
            type: 'Chair',
            title: 'Anjay Chair',
            rating: 5,
            price: '519',
            img: AnjayChair
        },
        {
            type: 'Chair',
            title: 'Nyantuy Chair',
            rating: 5,
            price: '921',
            img: NyantuyChair
        }
    ]

    return (
        <section className="top-products">
            <h2 class="top-products__header">Best Selling Products</h2>
            <ProductSlider></ProductSlider>
            <ul className="product-cards">
                <div className="product-cards__left-carousel-arrow">
                    <img class="product-cards__coursel-arrow-icon" src={CarouselArrow} alt="Carousel arrow"></img>
                </div>
                <div className="product-cards__right-carousel-arrow">
                    <img class="product-cards__coursel-arrow-icon" src={CarouselArrow} alt="Carousel arrow"></img>
                </div>
                {topProductList.map((item)=>(
                    <li className="product-cards__item">
                        <div className="product-cards__top-box">
                            <img className="product-cards__chair-img" src={item.img} alt="Chair"></img>
                        </div>
                        <div className="product-cards__bottom-box">
                            <div className="product-cards__type">{item.type}</div>
                            <div className="product-cards__title">{item.title}</div>
                            <div className="product-cards__text">{item.content}</div>
                            <div className="product-cards__rating">
                                <StarRating stars={item.rating} ></StarRating>
                            </div>
                            <div className="product-cards__purchase-box">
                                <span className="product-cards__price"><span className="product-cards__currency">$</span>{item.price}</span>
                                <div className="product-cards__add-item">
                                    <img className="product-cards__add-img" src={Addition} alt="Add icon"></img>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <LinkProduct name="View All" scale={1.3}></LinkProduct>
        </section>
    )
}