import { Link } from "react-router-dom";
import Logo from "../../assets/images/miriam-amaral-logo.png";
import "../../components/Logo/logo.css";

export default function LogoBlue() {
  return (
    <Link to="/" className="bwo">
      <img src={Logo} width={150} />
    </Link>
  );
}
