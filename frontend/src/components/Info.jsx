// render the general info about code
const Info = (props) => {
  return (
    <div className='flex border-1 rounded-md h-20 overflow-hidden h-10 mt-2'>
        <div className='w-2 max-w-full bg-[#00d4ff]  text-[#e0e0e0]'>  
        </div>
        <div className='flex flex-col w-full max-w-full bg-[#00d4ff]/26'>
            <div className="flex flex-row w-full max-w-full">
                <div className="text-[#e0e0e0] pl-2">
                    Code Style
                </div>
                <div className="ml-2 rounded-md mt-1 bg-[#00d4ff]/40 text-xs text-[#e0e0e0] text-extrabold">
                    INFO
                </div>
            </div>
            <div className="ml-2 text-[#e0e0e0]">
                {props.desc}
            </div>
        </div>
    </div>
  );
};

export default Info;