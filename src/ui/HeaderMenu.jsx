import {
  HiArrowRightOnRectangle,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-1">
      <li>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiOutlineBell />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiArrowRightOnRectangle
            onClick={() => {
              logout();
              navigate("login");
            }}
          />
        </ButtonIcon>
      </li>
    </ul>
  );
}

export default HeaderMenu;
