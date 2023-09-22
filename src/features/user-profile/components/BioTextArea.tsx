const BioTextArea = () => {
    return (
        <div className="relative col-span-3 h-[10rem] rounded-lg overflow-hidden">
            <span className="text-[4rem] leading-none text-white font-[400] top-1 left-2 absolute">"</span>
            <span className="text-[4rem] leading-none text-white font-[400] bottom-[-20px] right-2 absolute">"</span>
            <textarea className="h-full w-full bg-[#8270DB] resize-none focus:outline-none py-10 px-6 text-white text-lg font-inter" 
            placeholder="Write something about you">

            </textarea>
        </div>
    )
}

export default BioTextArea