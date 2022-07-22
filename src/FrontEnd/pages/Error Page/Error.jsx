import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h2 class="h2">Look like you're lost</h2>

                <h5>the page you are looking for not available!</h5>

                <button className="button">
                  <Link to="/">Home</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
