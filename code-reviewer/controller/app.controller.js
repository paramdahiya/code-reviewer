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
        res.status(e.error.code).json({"message": e.error.message});
    }
}


module.exports = {getResponse};