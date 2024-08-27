import { Link } from "react-router-dom";
import "../globals.css";
export default function Header(){
    return(
        <>
        <div className="header">
        <nav>
            <ul className="classe">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/oferta">
                    <li>Oferta</li>
                </Link>
                <Link to="/produtos">
                    <li>Produtos</li>
                </Link>
            </ul>
        </nav>
        </div>
        </>
    );
}