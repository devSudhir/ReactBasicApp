const Header = () => {
  return (
    <header>
      <nav className="my-nav">
        <img
          src="https://ionicframework.com/docs/icons/logo-react-icon.png"
          className="d-inline-block align-top mynav-icon"
          alt="bootstrap logo"
        />

        <ul className="mynav-nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export { Header };
