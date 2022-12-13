import LinkButton from "../button/LinkButton";
import "./Tittle.css"

export default function Tittle() {
    return (
        <div className="tittle-wrapper">
            <h2 className="tittle-month">November 2022</h2>
            <h1 className="tittle-topic">international Horror Written And directed by woman</h1>
            <h2 className="tittle-host">Hosted by Panda</h2>
            <LinkButton>See in Letterboxd</LinkButton>
            <h3 className="tittle-movie">Evolution 2015 Lucile Hadžihalilović</h3>
        </div>
    );
}