import React, { useState } from "react";
import Checkbox from "../../components/checkbox/Checkbox";
import "./SideMenu.scss";
import MembersContainer from "../membersContainer/MembersContainer";
import { useDispatch, useSelector } from "react-redux";
import { SliceActions } from "../../store/sliceStore";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

interface SideMenuProps {
  handleModeChange: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ handleModeChange }) => {
  const dispatch = useDispatch();
  const lightMode = useSelector((state: any) => state.slice.themeMode);
  const blogTypes: string[] = useSelector(
    (state: any) => state.slice.blogTypes
  );
  const excludeBlogTypes: string[] = useSelector(
    (state: any) => state.slice.excludeBlogTypes
  );
  const handleCheckboxChange = (checked: boolean, filterType: string) => {
    dispatch(
      SliceActions.updateFilters({
        exclude: !checked,
        filter: filterType,
      })
    );
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`sidebar-container sidebar-container-${lightMode}`}>
      <h1 className={`logo-${lightMode}`}>
        {APP_CONSTANTS.LOGO.TITLE_FIRST_HALF} <span>{APP_CONSTANTS.LOGO.TITLE_SECOND_HALF}</span>
      </h1>

      <div className={`filter-section filter-section-${lightMode}`}>
        <h3>{APP_CONSTANTS.MENU.FILTERS_TITLE}</h3>
        <ul>
          {blogTypes.map((type) => (
            <li key={type}>
              <Checkbox
                label={`${type} Blogs`}
                checked={!excludeBlogTypes.includes(type)} // checked means "included"
                onChange={(checked: boolean) =>
                  handleCheckboxChange(checked, type)
                }
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="menu-section">
        <div
          className={`${lightMode}-mode-btn`}
          onClick={() => setShowModal(true)}
        >
          <button>{APP_CONSTANTS.MENU.VIEW_MEMBERS}</button>
        </div>

        {showModal && <MembersContainer close={() => setShowModal(false)} />}

        {lightMode === "light" ? (
          <div className={"light-mode-btn"} onClick={handleModeChange}>
            <button className="light-mode-button">{APP_CONSTANTS.MENU.DARK_THEME_CHANGE}</button>
          </div>
        ) : (
          <div className={"dark-mode-btn"} onClick={handleModeChange}>
            <button className="dark-mode-button">{APP_CONSTANTS.MENU.LIGHT_THEME_CHANGE}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
