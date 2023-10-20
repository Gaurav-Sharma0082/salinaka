import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="header-logo">
            <img src="logo.png" alt="logo" />
          </div>
          <ul className="menu-wrapper">
            <li>Home</li>
            <li>Shop</li>
            <li>Featured</li>
            <li>Recommended</li>
          </ul>
        </nav>
        <div className="search-wrapper">
          <div className="input">
            <input type="search" placeholder="Search Product" />
          </div>
          <div className="basket-wrapper">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="shopping"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
            </svg>
          </div>
        </div>
        <div className="login-wrapper">
          <button>Sing Up</button>
          <button>Sing In</button>
          
        </div>
      </header>
    </>
  );
};

export default Header;
