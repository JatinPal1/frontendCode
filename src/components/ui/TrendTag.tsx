import  ImageIcon  from "./ImageIcon"
import { trendLogo } from "../../assets/icons"

const TrendTag: React.FC<{
  text: string;
 
}> = ({ text }) => {

  return (
    <span className="bg-[#8270DB] flex flex-row gap-2 rounded-md justify-start text-white text-sm p-2 cursor-pointer mr-auto">
    
      <ImageIcon url={trendLogo} wt="15" ht="15"/>
    
      {text}
    
    </span>
  )

}

export default TrendTag


