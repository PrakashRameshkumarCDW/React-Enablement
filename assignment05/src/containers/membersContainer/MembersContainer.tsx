import { useCallback, useEffect, useState } from "react";
import { fetchJson } from "../../service/service";
import Member from "../../components/member/Member";
import "./MembersContainer.scss";
import { useSelector } from "react-redux";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

interface MembersContainerProps {
  close: () => void;
}

const MembersContainer: React.FC<MembersContainerProps> = ({ close }) => {
  const [members, setMembers] = useState<any[]>();

  const lightMode = useSelector((state: any) => state.slice.themeMode);

  const getData = useCallback(async () => {
    const data = await fetchJson("members");
    setMembers(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData, members]);

  return (
    <div className="main-container">
      <div className="left-container" onClick={close}></div>
      <div className={`right-container right-container-${lightMode}`}>
        <div className="members-wrapper">
          <div className={`members-title members-title-${lightMode}`}>
            {APP_CONSTANTS.MEMBERS.TITLE}
          </div>
          <div className="members">
            {members?.map((member) => (
              <Member
                key={member.name}
                name={member.name}
                location={member.company.location}
                photo={`https://jsonmockserver.vercel.app/${member.photo}`}
                lightMode={lightMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersContainer;
