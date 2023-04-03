import classes from '../components/Header.module.css';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderButtons />
    </header>
  );
};
export default Header;
