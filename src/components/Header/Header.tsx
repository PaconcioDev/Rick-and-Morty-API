import { NavLink } from 'react-router-dom';
import "./header.css";

function Header () {
  return (
    <nav className="header mb-5">
      <ul className='header__list list-unstyled d-flex flex-column flex-sm-row align-items-center px-4 py-2 gap-4'>
        <li className='header__title fs-3 fw-bold d-none d-sm-block'>
          Rick and Morty Web
        </li>
        <li>
          <NavLink
            className='header__link'
            to='/characters'
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            className='header__link'
            to='/locations'
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            className='header__link'
            to='/episodes'
          >
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Header };
