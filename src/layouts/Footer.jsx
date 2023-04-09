import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-text">
        <p>
          Copyright &copy; 2023 by Reiker (Rufino PC)
          <span> | Reservado los derechos </span>{" "}
          <a href="https://www.linkedin.com/in/rufino-polvillo-caliani/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </p>
      </div>
      <div className="footer-iconTop">
        <a href="#logo">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
