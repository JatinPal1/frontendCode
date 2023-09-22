import { commentIcon, likeIcon, saveIcon, shareIcon } from "../../assets/icons"
import ImageIcon from "./ImageIcon"


const PostCard: React.FC<{
  isForYou?: boolean;
}> = ({ isForYou }) => {
  return (
    <div className="flex flex-col gap-3 m-2  p-2 rounded-sm shadow-sm">
      <div className="flex flex-row gap-4 m-5">
        <div className="rounded-[100%] bg-[#D9D9D9] h-[3rem] w-[3rem]"></div>
        <div className="flex flex-col">
            <h5 className="font-SFpro text-black">Jane Doe</h5>
            <h5 className="text-sm font-SFpro text-gray-500">Mechanical Engineer - Y2</h5>
            <h5 className="text-sm font-SFpro text-gray-500">2min . Public</h5>
        </div>

        {
        !(isForYou)?( 
        <div className="bg-[#8270DB] rounded-md text-white mb-7 p-2 ml-auto px-5 cursor-pointer hover:bg-[#8d7be8] hover:text-gray-50">Following</div>)
        :( <div className="bg-[#030208] rounded-md text-white mb-7 p-2 ml-auto px-5 cursor-pointer hover:bg-[#13111f] hover:text-gray-50">Follow +</div>)
        }
       
      </div>
      <p className="mx-5 text-[15px] font-SFpro">
        Hello Guys,
        This is my first post of the wised and I'm happy to share the free resources 
      </p>
      <div className=" mx-5 my-2 h-[17rem] w-auto bg-[#D9D9D9] rounded-[2px]"></div>
      <div className="flex flex-row gap-10 mx-6">
        <div className="flex flex-col gap-[9px] items-center cursor-pointer">
         <ImageIcon url={likeIcon} wt="23px" ht="23px"/>
         <h5 className="font-SFpro text-sm">Like</h5>
        </div>
        <div className="flex flex-col gap-[11px] items-center cursor-pointer">
         <ImageIcon url={commentIcon} wt="23px" ht="23px"/>
         <h5 className="font-SFpro text-sm">comment</h5>
        </div>
        <div className="flex flex-col gap-[13px] items-center cursor-pointer">
         <ImageIcon url={shareIcon} wt="23px" ht="23px"/>
         <h5 className="font-SFpro text-sm">repost</h5>
        </div>
        <div className="flex flex-col gap-[13px] items-center cursor-pointer">
         <ImageIcon url={shareIcon} wt="23px" ht="23px"/>
         <h5 className="font-SFpro text-sm">share</h5>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
         <ImageIcon url={saveIcon} wt="23px" ht="23px"/>
         <h5 className="font-SFpro text-sm">save</h5>
        </div>
      </div>
    </div>
  )
}

export default PostCard