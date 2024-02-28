import { AboutUs, Footer, Navbar } from "@/components";

export default function About() {
  return (
    <>
      <div className="About">
        <div className="About">
          <div className="card">
            <div className="card-img">
              <img src="./my.jpeg" />
            </div>
            <div className="desc">
              <h6 className="primary-text">Harish Saini</h6>
              <h6 className="secondary-text">Web Developer</h6>
            </div>
            <a className="button" href="/Skill">
              View Profile
            </a>

            <div className="details">
              <div className="rating">
                <h6 className="primary-text"> 86% </h6>
                <h6 className="secondary-text"> Rating </h6>
              </div>
              <div className="activity">
                <h6 className="primary-text"> 92% </h6>
                <h6 className="secondary-text"> Activity </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
}
