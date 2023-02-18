import Nav from "./nav";
import SearchBar from "./searchBar";

export default function HeaderView() {
    return (
        <header className="header">
            <Nav></Nav>
            <h1 className="header__text">
                Make Your Interior More 
                <br></br>
                Minimalistic & Modern
            </h1>
            <span className="header__sub-text">
                Turn your room with panto into a lot more minimalist
                <br></br>
                and modern with ease and speed
            </span>
            <SearchBar></SearchBar>
        </header>
    )
}