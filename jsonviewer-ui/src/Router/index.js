import { Route, Routes } from "react-router-dom";
import JsonViewerPanel from "../JsonViewerPanel";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="jsonviewer" element={<JsonViewerPanel />} />
    </Routes>
  );
};

export default MainRoute;
