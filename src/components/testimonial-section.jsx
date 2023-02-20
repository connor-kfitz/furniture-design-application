import StarRating from "./star-rating";
import TestimonialBackgroundOne from "../images/testimonial-one-background.png";
import TestimonialBackgroundTwo from "../images/testimonial-two-background.png";
import TestimonialBackgroundThree from "../images/testimonial-three-background.png";
import TestimonialProfileOne from "../images/testimonial-one-profile.png";
import TestimonialProfileTwo from "../images/testimonial-two-profile.png";
import TestimonialProfileThree from "../images/testimonial-three-profile.png";
import CarouselArrow from "../images/carousel-arrow-icon.svg";

export default function Testimonials() {

    const testimonialData = [
        {
            name: 'Bang Upin',
            location: 'Pedagang Asongan',
            text: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“',
            rating: 4,
            profileImg: TestimonialProfileOne,
            backgroundImg: TestimonialBackgroundOne
        },
        {
            name: 'Ibuk Sukijan',
            location: 'Ibu Rumah Tangga',
            text: '“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“',
            rating: 4,
            profileImg: TestimonialProfileTwo,
            backgroundImg: TestimonialBackgroundTwo
        },
        {
            name: 'Mpok Ina',
            location: 'Karyawan Swasta',
            text: '“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“',
            rating: 4,
            profileImg: TestimonialProfileThree,
            backgroundImg: TestimonialBackgroundThree
        },
    ]

    return (
        <section className="testimonials">
            <h2 className="testimonials__header">Testimonials</h2>
            <div className="testimonials__description">Our Clients Reviews</div>
            <ul className="testimonials-cards">
                <div className="testimonials-cards__left-carousel-arrow">
                    <img class="testimonials-cards__coursel-arrow-icon" src={CarouselArrow} alt="Carousel arrow"></img>
                </div>
                <div className="testimonials-cards__right-carousel-arrow">
                    <img class="testimonials-cards__coursel-arrow-icon" src={CarouselArrow} alt="Carousel arrow"></img>
                </div>
                {testimonialData.map((item)=>(
                    <li className="testimonials-cards__item" style ={{backgroundImage:"url("+item.backgroundImg+")"}}>
                        <div className="testimonials-cards__content">
                            <div className="testimonials-cards__profile-img-box">
                                <img className="testimonials-cards__profile-img" src={item.profileImg} alt="Testimonial profile"></img>
                                <div className="testimonials-cards__profile-img-fill"></div>
                            </div>
                            <div className="testimonials-cards__name">{item.name}</div>
                            <div className="testimonials-cards__location">{item.location}</div>
                            <div className="testimonials-cards__text">{item.text}</div>
                            <div className="testimonials-cards__rating">
                                <StarRating stars={item.rating} scale={.9}/>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}