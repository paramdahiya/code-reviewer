const promptAi = require('../services/ai.service');

const getResponse = async (req, res)=>{
    try{
        let {prompt, langSelection} = req.body;
        let requestObj = {prompt, langSelection};
        let response = await promptAi(requestObj.prompt);
        console.log(response);
        res.status(200).json(response);
    }
    catch(e){
        console.log(e);
        console.log('here');
        const statusCode = e.error?.code || e?.status || 500;
        const message = e.error?.message || 'Something went wrong';

        console.log(statusCode);
        if (statusCode === 429) {
            return res.status(429).json({ 
                message: 'Daily limit reached. Please try again tomorrow.',
                retryAfter: 86400 // seconds until reset
            });
        }
        res.status(statusCode).json({"message": message});
    }
}


module.exports = {getResponse};