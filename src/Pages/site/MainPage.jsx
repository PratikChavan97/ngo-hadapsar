import TopHeader from "../../components/TopHeader";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";

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
