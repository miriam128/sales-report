import "./footer.css";
import BMCLogo from "../../assets/images/bmc-logo.svg";
import LinkedinLogo from "../../assets/images/linkedin-white-logo.svg";
import GithubLogo from "../../assets/images/github-white-logo.svg";
import InstagramLogo from "../../assets/images/instagram-white-logo.svg";
import DevmediaLogo from "../../assets/images/devmedia-white-logo.svg";
import Logo from "../../components/Logo";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-social-medias-container">
        <a
          className="home-buy-me-a-coffee-button"
          target="_blank"
          href="https://www.buymeacoffee.com/miriamamaral"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} height={45} />
        </a>

        <a
          className="home-buy-me-a-coffee-button"
          target="_blank"
          href="https://www.buymeacoffee.com/miriamamaral"
          rel="noopener noreferrer"
        >
          <img src={LinkedinLogo} height={45} />
        </a>

        <a
          className="home-buy-me-a-coffee-button"
          target="_blank"
          href="https://www.buymeacoffee.com/miriamamaral"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} height={45} />
        </a>

        <a
          className="home-buy-me-a-coffee-button"
          target="_blank"
          href="https://www.buymeacoffee.com/miriamamaral"
          rel="noopener noreferrer"
        >
          <img src={BMCLogo} height={45} />
        </a>

        <a
          className="home-buy-me-a-coffee-button"
          target="_blank"
          href="https://www.buymeacoffee.com/miriamamaral"
          rel="noopener noreferrer"
        >
          <img src={DevmediaLogo} height={45} />
        </a>
      </div>

      <div className="footer-copyright">
        <span className="pt-3">Desenvolvido por</span>
        <Logo />
      </div>
    </footer>
  );
}
