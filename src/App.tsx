import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Profile from './pages/Profile';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard/DashBoard';
import Error404 from './pages/Error404';
import Orders from './pages/orders/Orders';
import Stats from './pages/stats/Stats';
import Wallet from './pages/wallet/Wallet';
import Shop from './pages/shop/shop';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Error404 />
            </>
          }
        />
        <Route
          index
          element={
            <>
              <PageTitle title="React Dashboard" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile " />
              <Profile />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <PageTitle title="orders" />
              <Orders />
            </>
          }
        />
        <Route
          path="/stats"
          element={
            <>
              <PageTitle title="stats" />
              <Stats />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup " />
              <SignUp />
            </>
          }
        />
        <Route
          path="/wallet"
          element={
            <>
              <PageTitle title="Wallet " />
              <Wallet />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <PageTitle title="Shop " />
              <Shop />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
