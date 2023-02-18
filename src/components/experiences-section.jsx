import ExperiencesBackground from "../images/experiences-img.png";
import LinkProduct from "./link-product";

export default function Experiences() {
    return (
        <section className="experiences">
            <div className="experiences-img-cont">
                <img className="experiences-img-cont__img" src={ExperiencesBackground} alt=""></img>
                <div className="experiences-img-cont__top-decoration"></div>
                <div className="experiences-img-cont__bottom-decoration"></div>
            </div>
            <div className="experiences-content">
                <h3 className="experiences-content__header">Experiences</h3>
                <div className="experiences-content__title">We Provide You The Best Experience</div>
                <p className="experiences-content__text">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                <LinkProduct name="More Info"></LinkProduct>
            </div>
        </section>
    )
}