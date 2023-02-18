import rightArrow from "../images/right-arrow-img.svg"

export default function LinkProduct({name, scale}) {
    
    const style = {
        transform: `Scale(${scale})`
    }

    return (
         <a className="link-product" style={style} href="#">
            <span className="link-product__name">{name}</span>
            <img className="link-product__arrow" src={rightArrow} alt="Right arrow"></img>
        </a>
    )
}