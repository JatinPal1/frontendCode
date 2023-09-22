import  { useState } from 'react';
import TrendTag from "../components/ui/TrendTag"
import { Navbar } from "../layouts"
import PostCard from '../components/ui/PostCard';

const Feed = () => {
    const [activeTab, setActiveTab] = useState('Following');

    const handleTabClick = (tab:any) => {
        setActiveTab(tab);
    };
    return (
    
    <div className="flex flex-col">
        
        <Navbar/>
        <div className="flex flex-row h-screen w-screen">
            <div className="w-[18%]   flex flex-col shadow-md p-5">
                <input type="text" className=" bg-gray-100 rounded-md p-2 border-[2px] border-[#DFE1E6] focus:outline-none" placeholder="Search anything"/>
                <div className="flex flex-row gap-5 p-4 justify-center">
                    <span className="bg-[#D9D9D9] rounded-xl w-[37%] font-SFpro text-sm text-center p-1">Today</span>
                    <span className="bg-[#D9D9D9] rounded-xl w-[37%] font-SFpro text-sm text-center p-1">Activity</span>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <h6 className="text-md font-SFpro">Trending Topics:</h6>
                    <TrendTag text="New Chapter"/>
                    <TrendTag text="Sample Question Paper"/>
                    <TrendTag text="Certifications"/>
                    <TrendTag text="English New Syllabus"/>
                    
                </div>
            </div>
            <div className="w-[64%]  flex flex-col shadow-md p-2 gap-3">
              <input type="text" placeholder="Create Something" className="m-3 p-2 rounded-md font-SFpro w-auto h-auto border-[2px] border-[#DFE1E6] focus:outline-none" />
              <div className="flex flex-row  justify-around">
                <span className="bg-gray-300 rounded-md p-3 w-[19%] cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-[15px]">Photos</span>
                <span className="bg-gray-300 rounded-md p-3 w-[19%] cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-[15px]">Videos</span>
                <span className="bg-gray-300 rounded-md p-3 w-[19%] cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-[15px]">Write an article</span>
                <span className="bg-gray-300 rounded-md p-3 w-[19%] cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-[15px]">Upload Document</span>
              </div>
              <div className="flex flex-row justify-around mt-4 ml-2 mr-2 z-[100] top-[60px] sticky">
                    <h5 className={`text-md font-SFpro cursor-pointer`} onClick={() => handleTabClick('Following')}>
                        Following
                        {activeTab === 'Following' && (
                        <div>
                          <div className="w-[100%] h-1 bg-[#8270DB] mt-1"></div>
                          <div className="h-[0.8px] bg-gray-300 absolute left-0 right-0 shadow-xl"></div>
                        </div>
                        )}
                    </h5>
                    <h5 className={`text-md font-SFpro cursor-pointer`} onClick={() => handleTabClick('For You')}>
                        For You
                        {activeTab === 'For You' && (
                        <div>
                          <div className="w-[100%] h-1 bg-[#8270DB] mt-1"></div>
                          <div className="h-[0.8px] bg-gray-300 absolute left-0 right-0 shadow-xl"></div>
                        </div>
                        
                        )}
                      
                    </h5>
              </div>
              {activeTab === 'Following' ? (
            <div className='flex flex-col overflow-y-auto'>
              {new Array(5).fill(0).map((_,index)=>(<PostCard key={index}/>))}
            </div>
          ) : (
            <div className='flex flex-col overflow-y-auto'>
              {new Array(5).fill(0).map((_,index)=>(<PostCard isForYou={true} key={index}/>))}
              </div>
          )}
            </div>
            <div className="w-[18%] flex flex-col shadow-md p-5 gap-4">
               <div className="flex flex-row gap-3 items-center">
                  <div className="rounded-[100%] bg-[#C4C4C4] h-[3.5rem] w-[3.5rem]"></div>
                  <div className="flex flex-col gap-2 mt-4">
                      <h5 className="text-sm font-semibold text-wrap leading-none font-SFpro">Jane_Doe08</h5>
                      <h5 className="text-sm font-semibold text-wrap leading-none font-SFpro">Jane_Doe</h5>
                      <span className="text-[#008CF1] text-sm font-SFpro cursor-pointer hover:text-[#4b9dea]">Switch account</span>
                  </div>
               </div>
               <h5 className="text-sm font-semibold text-wrap">Based on your interest</h5>
            </div>
        </div>
    </div>

  )
}

export default Feed