
const Error = ({error}) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div>
            <h2 className="text-[#00d4ff] text-4xl">{error.errStatus}</h2>
        </div>
        <div>
            <h2 className="text-[#00d4ff] text-4xl">{error.body || 'Something went wrong...'}</h2>
        </div>
    </div>
  );
};

export default Error;