import { INavlinks } from "../interfaces/INavLinks";
import { navLinksList } from "../data/navlinks";
import { useLocation, useNavigate } from "react-router-dom";


const Navlinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loc = location.pathname;
  const handleNavigation = (location: string) => {
    navigate(`${location}`);
  };

  return (
    <div className="mt-8 ">
      <ul className="flex flex-col gap-2 text-sm font-SFpro w-full">
        {navLinksList.map((item: INavlinks, index) => (
          <li
            key={index}
            className={`${loc === item.link ? "text-[#0052CC] bg-[#F0F2F5] " : ""
              } px-10 cursor-pointer py-2 `}
            onClick={() => handleNavigation(`${item.link}`)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navlinks;
