// render the review summary with metrics
const ReviewSummary = ({issues, criticalIssues, rating}) => {
    console.log(issues);
    return (
        <div className='grid grid-cols-3'>
            <div className='flex flex-col items-center'>
                <div className='text-[#00d4ff] text-4xl'>
                    {issues}
                </div>
                <div className='text-[#e0e0e0] text-left'>
                    ISSUES FOUND
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='text-[#00d4ff] text-4xl'>
                    {criticalIssues}
                </div>
                <div className='text-[#e0e0e0] items-center text-center'>
                    CRITICAL ISSSUES
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='text-[#00d4ff] text-4xl'>
                    {rating}%
                </div>
                <div className='text-[#e0e0e0] items-end text-right'>
                    SCORE
                </div>
            </div>
        </div>
    );
};

export default ReviewSummary;