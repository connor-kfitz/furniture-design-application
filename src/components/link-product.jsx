import rightArrow from "../images/right-arrow-img.svg"

export default function LinkProduct({name}) {
    return (
         <a className="link-product" href="#">
            <span className="link-product__name">{name}</span>
            <img className="link-product__arrow" src={rightArrow} alt="Right arrow"></img>
        </a>
    )
}