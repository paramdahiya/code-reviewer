const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();
const ai = new GoogleGenAI({apiKey:process.env.API_KEY});

async function promptAi(prompt) {

    try{
        const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            systemInstruction: `You are a senior developer with 7+ years of experience. Review the code
            in terms of functionality, quality and readability. Identify the total number of issues which is
            equal to the sum of critical issues, performance issues and general info.For each issue provide a short description. Finally, give a score out of 100 to express how good the code is overall and also give the 
            correct version of the code.Make sure that the descriptions are concise and only give the most relevant
            description.Additionally, give any general information related to the code based on coding practices and industry standards.
            Return the response in the following manner: {rating: number, code: string, issues: total number of issues found, criticalIssues: number of critical issues,
            bugs:[{desc: string}], performanceIssues:[{desc:string}], generalInfo: [ {desc:string} ]}. If you recieve something that is not a code snippet or any other
            input which is not a code return an empty json {}.`,
            responseMimeType: 'application/json',
        }
        });
        return (JSON.parse(response.text));
    }catch(e){
        console.log(e?.error?.code || e?.status || 500);
        throw e;
    }
}

module.exports = promptAi;