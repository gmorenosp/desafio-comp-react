import carImg from "../../assets/car.png";
import "./styles.css";

export default function CatalogCard() {
    return (
        <div className="ct-card-container">
            <figure>
                <img src={carImg} alt="Carros Top" />
            </figure>
            <h4>Lorem ipsum dolor</h4>
        </div>
    );
}