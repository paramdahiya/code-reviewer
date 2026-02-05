// renders the final review of the code
import Bug from "./Bug";
import PerformanceBug from "./PerformanceBug";
import Info from "./Info";
import ReviewSummary from "./ReviewSummary";

const Review = ({reviewData}) => {
    return (
        <div className='border-1 border-[#00d4ff] border-solid rounded-xl w-full md:w-3/4 p-5 mx-auto'>
            <h1 className="text-2xl text-[#00d4ff]">Review Results</h1>
            {reviewData.bugs.map((bug)=>(<Bug desc={bug.desc}/>))}
            {reviewData.performanceIssues.map((issue)=>(<PerformanceBug desc={issue.desc}/>))}
            {reviewData.generalInfo.map((info)=>(<Info desc={info.desc}/>))}
            <hr className='h-px my-8 bg-neutral-quaternary border-0 bg-[#00d4ff]' />
            <ReviewSummary issues={reviewData.issues} criticalIssues={reviewData.criticalIssues} rating={reviewData.rating}/>
        </div>
    );
};

export default Review;