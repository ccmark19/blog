import "./profile.scss";
import ske from "./img/ske_corped.webp";

function App() {
  return (
    <div className="App">
      <div className="Comp-content">
        <img
          className="Data-img-ske"
          src={ske}
          alt="art"
          style={{
            height: "237px",
            width: "100px",
          }}
        />
        <div className="Comp-inner-content">
          <p className="Data-desc m-0">
            <span className="primary">
              <span className="Data-keyword">Hanxiang</span> (Hanxiang Li to his
              parents) is a Software Developer 🤓 currently based in Toronto, CA
              🇨🇦. Over the past few years, he has been continuously learning and
              applying what he has learned to his works 🛠.
            </span>
            <span className="secondary">
              He is passionate about{" "}
              <span className="Data-keyword">Front End Dev</span>,{" "}
              <span className="Data-keyword">Performance</span> and{" "}
              <span className="Data-keyword">User Experience</span>.
            </span>
          </p>
          <div className="Comp-detail"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
