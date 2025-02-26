import {
  HiArrowRightOnRectangle,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate()
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
        <ButtonIcon onClick={() => navigate('/login')}>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </li>
    </ul>
  );
}

export default HeaderMenu;
