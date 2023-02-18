import Star from "../images/star-icon.svg"

export default function StarRating({stars}) {
    return (
        [...Array(stars)].map((star) => <img className="rating-star" src={Star} alt="star"></img>)
    )
}