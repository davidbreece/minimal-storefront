import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 US Preparedness Supplies</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
