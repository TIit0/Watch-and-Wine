import "./LinkButton.css";

export default function LinkButton({children}) {
    return (
        <a className="link-button"
        href="https://www.google.com/"
        target={"_blank"}
        rel='noreferrer'>
            {children}
        </a>
    );
}