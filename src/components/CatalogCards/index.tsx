import CatalogCard from "../CatalogCard";
import "./styles.css";

export default function CatalogCards() {
    return (
        <>
            <div className="ct-cards-container">
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </>
    );
}