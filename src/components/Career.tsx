import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science & Engineering (B.Tech)</h4>
                <h5>Centurion University of Technology & Management</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing my Bachelor of Technology specializing in Blockchain and Web Development. Mastering core software engineering principles, smart contracts, and full-stack web technologies to build production-grade systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Development Intern</h4>
                <h5>Centurion University / Independent Dev</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting enterprise-grade applications, decentralized Web3 platforms, and secure software systems. Integrating technologies like Spring Boot, Solidity, React, and Redis to solve complex real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
