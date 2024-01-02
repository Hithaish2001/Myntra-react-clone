import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/loadingSpinner";
import { useSelector } from "react-redux";

function App() {

  const FetchStatus = useSelector(store => store.fetchStatus)

  return (
    <>
      <Header />
      <FetchItems />
      {FetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet /> }
      <Footer />
    </>
  );
}

export default App;
