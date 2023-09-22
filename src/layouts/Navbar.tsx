import { useIsMobile } from '../hooks';
import { apps, logo, search, notification, setting, question } from '../assets/icons';
import ImageIcon from '../components/ui/ImageIcon';

const Navbar = () => {
    const isMobile = useIsMobile();
    return (
        <div className="w-full py-3 shadow-md top-0 z-[100] bg-white sticky">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <ImageIcon url={apps} />
                    <ImageIcon url={logo} />
                </div>
                <div className={`flex items-center ${isMobile ? 'hidden' : ''}`}>
                    <div className="flex items-center p-1 gap-2 border-[2px] rounded-md border-[#DFE1E6]">
                        <ImageIcon url={search} />
                        <input
                            type="text"
                            placeholder="Search"
                            className=" focus:outline-none"
                        />
                    </div>
                    <ImageIcon url={notification} />
                    <ImageIcon url={setting} />
                    <ImageIcon url={question} />
                </div>
            </div>
        </div>
    );
};


export default Navbar;
