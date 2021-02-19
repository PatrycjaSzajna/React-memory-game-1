import { Link } from 'react-router-dom';


//stworzyłam funkcje do której przekazałam komponent i reszta wzięta z bootstrap, zwraca jsx//

const Navbar = () => {
  return (
    <nav
      className='navbar fixed-top navbar-expand-lg navbar-light '
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          MEMORY
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#hamburgerMenu'
          aria-controls='hamburgerMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='hamburgerMenu'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/game'>
                Graj
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/scores'>
                Wyniki
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//nav jest wzięte z bootstrapa//
//wrzuciłam tylko link z graj i wyniki//

export default Navbar;
