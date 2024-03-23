import CatalogCards from "../../components/CatalogCards";
import FeedbackCards from "../../components/FeedbackCards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section id="ct-title-section">
                    <h2>Venha nos visitar</h2>
                </section>
                <section id="ct-catalog-section">
                    <CatalogCards />
                </section>
                <section id="ct-feedback-title-section">
                    <h2>O que estão dizendo</h2>
                </section>
                <section id="ct-feedback-section">
                    <FeedbackCards />
                </section>
            </main>
            <Footer />
        </>
    );
}