import classes from "./Auth.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  // -- dont need to extract the 'authStore' here from the store, since we dont need to use any state/data stored in the 'authSlice'
  const authStore = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  // console.log(authStore);
  // console.log(authActions);

  const submitHandler = (event) => {
    event.preventDefault();

    // -- login user
    // remember --> 'authActions.onLogin()' is an 'Action Creator' which when executed  ->  returns an Action object  " {type: 'UNIQUE_IDENTIFIER'} "  ->  which will be dispatched to the store.
    dispatch(authActions.onLogin());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
