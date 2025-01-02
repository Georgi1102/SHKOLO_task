import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Buttons() {
  return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header/>
            <Button />
            <Footer />
        </div>
  );
}
