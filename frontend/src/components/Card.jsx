// create card layout
import {useState} from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Loader from './Loader';
import CodeComponent from './CodeComponent';

const LANGUAGES=["python", "javaScript", "c", "c#", "sql", "html", "css"];
const SERVERURL = import.meta.env.VITE_SERVERURL;

function Card(props){

    const [langSelection, setLangSelection] = useState("Python")
    const [code, setCode] = useState("");
    const [error, setError] = useState(false); // used for error handling, mainly for user inputs

    const handleChange = ({target})=>{
        setLangSelection(target.value);
    }

    const handleCodeChange = (value)=>{
        setError(false); // reset the error value
        setCode(value);
    };

    const handleSubmit=()=>{
        // error handling
        // empty code
        if(code.trim() === ''){
            setError(true);
            return;
        }

        props.updateLoading(true);
        axios.post(SERVERURL + '/api/review', {prompt:code, langSelection})
        .then((res)=>{
            props.updateLoading(false);

            // check if the user submitted something which is not code
            if(Object.keys(res.data).length === 0){
                setError(true);
                return;
            }

            setCode(res.data.code);
            props.updateReviewData(res.data);
        })
        .catch((err)=>{
            console.log("server....");
            let errStatus = null;
            let body = null;
            props.updateLoading(false);

            if(err.request){
                errStatus=503;
                body='Service Unavailable'
            }
            else{
                errStatus = err.response.status;
                body = err.response.data.message;
            }
            props.setServerError({errStatus, body});
    
        })
    }
    return (
        <div className='border-1 border-[#00d4ff] border-solid rounded-xl flex flex-col w-full md:w-3/4 p-5 mx-auto m-5 gap-2'>
            <h1 className='text-2xl text-[#00d4ff]'>Submit Code</h1>
            <label htmlFor="language" className='text-[#e0e0e0]'>Programming Language</label>
            <div className={langSelection.trim()===''?'text-red-400 flex items-center' : 'hidden'}>
                <FontAwesomeIcon icon={faExclamation}/>
                <p>Please Select a Programming Language</p>
            </div>
            <input className='border border-[#00d4ff] border-solid rounded-md px-2 text-[#e0e0e0]' list='language-choice' id='language'
            value={langSelection} onChange={handleChange}></input>
            <datalist id='language-choice'>
                {LANGUAGES.map((lang, index)=>(
                    <option key={index} value={lang}>{lang}</option>
                ))}
            </datalist>
            <CodeComponent langSelection={langSelection} code={code} handleSubmit={handleSubmit} handleCodeChange={handleCodeChange}/>
            <div className={error ?'text-red-400 flex items-center justify-center' : 'hidden'}>
                <FontAwesomeIcon icon={faExclamation}/>
                <p>Please Write Some Code To Review</p>
            </div>
        </div>
    )
}

export default Card;