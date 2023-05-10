// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Calculator', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];
const Navbar = () => (
  <>
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarBrand}>
        <h2>Math Magician</h2>
      </div>
      <div className={styles.navbarNav}>
        <nav className={styles.navbar}>
          <ul className={styles.ul}>
            {links.map((link) => (
              <li className={styles.li} key={link.text}>
                <NavLink className={styles.navItem} to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </>
);
export default Navbar;
