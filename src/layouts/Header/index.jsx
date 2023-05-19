import Logo from "../../components/Logo";
import "./header.css";

export default function HomeGuestLayout() {
  return (
    <header className="header-container">
      <Logo />
      <span className="project-title mt-1">Sales Report</span>
    </header>
  );
}
