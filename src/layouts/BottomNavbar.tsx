import { ImageIcon } from "../components"
import { dashboard, personaIcon, plus, searchBlack } from "../assets/icons"

const BottomNavbar = () => {
  return (
    <div className="sm:hidden w-full py-3 shadow-t-10 bottom-0 z-[100] bg-white sticky">
         <div className="container  flex justify-around items-center ">
            <ImageIcon url={dashboard} wt="22" ht="22"/>
            <ImageIcon url={searchBlack} wt="22" ht="22"/>
            <ImageIcon url={plus} wt="22" ht="22"/>
            <ImageIcon url={personaIcon} wt="22" ht="22"/>
         </div>
    </div>
  )
}

export default BottomNavbar