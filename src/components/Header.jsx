import reactImg from "./logo512.png";

function Header() {
  return (
    <header className="app-header">
      <img src={reactImg} alt="React-logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
