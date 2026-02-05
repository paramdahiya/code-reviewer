import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Card from './components/Card';
import EmptyReview from './components/EmptyReview';
import ReviewLoader from './components/ReviewLoader';
import Review from './components/Review';
import Error from './components/Error';

function App() {
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState({});
  const [serverError, setServerError] = useState({})

  // function to upadate the loading value, status -> bool
  function updateLoading(status){
    setLoading(status);
  }

  function updateReviewData(review){
    let {rating, code, issues, criticalIssues, bugs, performanceIssues, generalInfo} = review;
    let aiReview = {rating, code, issues, criticalIssues, bugs, performanceIssues, generalInfo};
    console.log(aiReview);
    setReviewData(aiReview);
  }

  // update the serverError value
  function updateServerError(serverErr){
    let {errStatus, message}  = serverErr;
    let err = {errStatus, message};
    setServerError(err);
  }

  return (
    <>
      {Object.keys(serverError).length!==0 ? <Error error={serverError}/> : 
        <>
          <Header />
          <Card updateLoading={updateLoading} updateReviewData={updateReviewData} setServerError={setServerError}/>
          {loading && <ReviewLoader />}
          { (!loading && Object.keys(reviewData).length===0) && <EmptyReview />}
          { (!loading && Object.keys(reviewData).length!==0) && <Review reviewData={reviewData}/>}
        </>
      }
    </>
  )
}

export default App
