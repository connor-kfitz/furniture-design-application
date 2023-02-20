import MaterialsLargeBackground from "../images/materials-large-img.png";
import MaterialsMediumBackground from "../images/materials-medium-img.png";
import MaterialsSmallBackground from "../images/materials-small-img.png";

import LinkProduct from "./link-product";

export default function Materials() {
    return (
        <section className="materials">
            <div className="materials-content">
                <h3 className="materials-content__header">Materials</h3>
                <div className="materials-content__title">Very serious materials for making furniture</div>
                <p className="materials-content__text">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <LinkProduct name="More Info"/>
            </div>
            <div className="materials-img-cont">
                <div className="materials-img-cont__left-box">
                    <img className="materials-img-cont__small-img" src={MaterialsSmallBackground} alt=""></img>
                    <img className="materials-img-cont__medium-img" src={MaterialsMediumBackground} alt=""></img>
                </div>
                <div className="materials-img-cont__right-box">
                    <img className="materials-img-cont__large-img" src={MaterialsLargeBackground} alt=""></img>
                    <div className="materials-img-cont__top-decoration"></div>
                </div>
            </div>
        </section>
    )
}