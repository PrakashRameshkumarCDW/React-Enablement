import { useCallback, useMemo, useState } from "react";
import "./App.scss";
import Homepage from "./pages/Homepage";
import { useDispatch, useSelector } from "react-redux";
import { SliceActions } from "./store/sliceStore";

function App() {
  // const [isLightMode, setIsLightMode] = useState(true);
  // const handleModeChange = useCallback(() => {
  //   setIsLightMode((previous) => !previous);
  // }, []);
  // const currentMode = useMemo(
  //   () => (isLightMode ? "light" : "dark"),
  //   [isLightMode]
  // );

  const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.slice.themeMode);

  const handleModeChange = () => {
    dispatch(SliceActions.toggleThemeMode());
  };

  return (
    <>
      <div className={`app-wrapper-${themeMode}`}>
        <Homepage handleModeChange={handleModeChange} />
      </div>
    </>
  );
}

export default App;
