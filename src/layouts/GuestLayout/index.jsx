import "./guest-layout.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "reactstrap";

export default function GuestLayout({ children }) {
  return (
    <>
      <Header />
      <div className="guest-layout">{children}</div>
      <Footer />
    </>
  );
}
