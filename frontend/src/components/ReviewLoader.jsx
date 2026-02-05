// render the review component when user submit code review
import Loader from "./Loader";
const ReviewLoader = (props) => {
    return (
        <div className='border-1 border-[#00d4ff] border-solid rounded-xl w-full md:w-3/4 p-5 mx-auto'>
            <h1 className="text-2xl text-[#00d4ff]">Review Results</h1>
            <Loader />
        </div>
    );
};

export default ReviewLoader;