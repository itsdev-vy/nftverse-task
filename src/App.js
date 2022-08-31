import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <LeftSide />
        </div>
        <div className="col-lg-10 bg-light">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
