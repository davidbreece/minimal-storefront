import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <Link href="/">
          <a>
            <span>Gobag </span>
            Supplies
          </a>
        </Link>{' '}
      </h1>
      <br />
    </div>
  );
};

export default Header;
