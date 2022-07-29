import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const authStore = useSelector((state) => state.authentication);

  // -- ⭐ this component will be re-rendered when the extracted state ('isAuthenticated') from 'authStore' changes.
  const { isAuthenticated } = authStore;

  console.log("Is Authenticated: ", isAuthenticated);

  return (
    <>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
