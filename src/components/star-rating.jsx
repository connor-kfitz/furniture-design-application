import Star from "../images/star-icon.svg"
import StarNoFill from "../images/star-no-fill.svg"

export default function StarRating({stars, scale}) {

    const style = {
        transform: `Scale(${scale})`
    }

    function ratingToArray(number) {
        let array = [];
        for(let i=0; i < 5; i++){
            if(number > 0){
                array[i] = true
            } else {
                array[i] = false;
            }
            number--
        }
        return array
    }

    const starArray = ratingToArray(stars);

    console.log(starArray)

    console.log(ratingToArray(stars));

    return (
        <div>
            {starArray.map((item) => (
            item
            ? (<img className="rating-star" src={Star} alt="star" style={style}></img>)
            : (<img className="rating-star" src={StarNoFill} alt="star" style={style}></img>)
            ))}
        </div>
    )    
}