import Navigation from "../ui/home/Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <Link to="dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Home;
