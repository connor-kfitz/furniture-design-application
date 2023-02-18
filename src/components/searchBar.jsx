import searchIcon from "../images/search-icon.svg";

export default function searchBar() {
    return (
        <div className="search">
            <input className="search__input" placeholder="Search furniture"></input>
            <div className="search__icon-box">
                <img className="search__icon" alt="Search Icon" src={searchIcon}></img>
            </div>
        </div>
    )
}