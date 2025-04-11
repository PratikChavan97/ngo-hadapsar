import { useNavigate } from "react-router-dom";
import "./module.PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="error-content">
        <h1>Page Not Found</h1>
        <p>
          The page you were looking for could not be found. It might have been
          removed, renamed, or did not exist in the first place.
        </p>
        <button onClick={() => navigate("/")}>
          Click here to go to Homepage
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
