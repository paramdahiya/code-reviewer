import Editor from "@monaco-editor/react";

function CodeComponent({langSelection, code, handleSubmit, handleCodeChange}){
    return (
        <div className='mt-5'>
            <label htmlFor="code" className="text-[#e0e0e0]">Write Your Code</label>
            <Editor
                height="400px"
                language={langSelection.toLowerCase()}
                value={code}
                onChange={(value) => handleCodeChange(value)}
                theme="vs-dark"
                options={{
                    fontSize: 14,
                    padding: 16,
                }}
            />
            <div className='flex justify-center'>
                <button type="submit" className='w-1/2 rounded-md
                bg-[#0099ff] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
                onClick={handleSubmit}>
                    REVIEW CODE
                </button>
            </div>
        </div>
    )
}

export default CodeComponent;