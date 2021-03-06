import React,{ Fragment} from "react";
// import { jsonMock } from "../assets/model/mockData";

const Model3d = ({srcPath,srcPathIos}) => {
  return (
    <Fragment>
      <model-viewer
        ar
        modes="scene-viewer quick-look webxr"
        src={srcPath} // AR Android/Web
        ios-src={srcPathIos} // AR iOS
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "100%"}}
      >
      </model-viewer>
    </Fragment>
  );
};

export default Model3d;