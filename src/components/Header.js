import classes from "./Header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Header = () => {
  const authStore = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  const { isAuthenticated } = authStore;

  // console.log(authStore);
  // console.log(authActions);

  const logoutHandler = () => {
    dispatch(authActions.onLogout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isAuthenticated && (
        <nav>
          <ul>
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
