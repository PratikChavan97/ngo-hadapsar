import { Link } from "react-router-dom";
import Navigation from "../ui/home/Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
}

export default Home;
