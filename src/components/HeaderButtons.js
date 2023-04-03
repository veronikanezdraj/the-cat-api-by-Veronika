import classes from './HeaderButtons.module.css';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

const HeaderButtons = () => {
  return (
    <div className={classes.headerWrapper}>
      {routes.map((button) => (
        <Link
          className={classes.headerButton}
          key={button.path}
          to={button.path}
        >
          {button.name}
        </Link>
      ))}
    </div>
  );
};

export default HeaderButtons;
