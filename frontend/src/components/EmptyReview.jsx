import Loader from './Loader';

// placeholder card for when there is no review to show
const EmptyReview = () => {
    return (
        <div className='border-1 border-[#00d4ff] border-solid rounded-xl w-full md:w-3/4 p-5 mx-auto'>
            <h1 className="text-2xl text-[#00d4ff]">Review Results</h1>
            <div className='text-[#e0e0e0] font-bold text-center text-[20px]'>
                Upload code to get an AI review!
            </div>
        </div>
    );
};

export default EmptyReview;