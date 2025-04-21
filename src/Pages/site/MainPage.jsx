import TopHeader from "../../components/TopHeader";
import Footer from "../../ui/site/Footer";
import Header from "../../ui/site/Header";

function MainPage({ children }) {
  return (
    <div>
      <TopHeader />
      <Header />

      <div className="child">{children}</div>

      <Footer />
    </div>
  );
}

export default MainPage;
