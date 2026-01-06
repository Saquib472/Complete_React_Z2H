import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addmessage } from "../utils/store/chatSlice";
import { generateMessage, generateName } from "../utils/randomString";

const LiveChat = () => {
  const [inputMsg, setInputMsg] = useState('')
  const messages = useSelector(store => store.chat.messages)
  const dispatch = useDispatch()
    useEffect(()=>{
        // Call the API and Fetch Live Comment. Here I am doing hard coding.
        const timer = setInterval(()=>{
            dispatch(addmessage({
                name : generateName(),
                message : generateMessage(20) + '🚀'
            }))
        },1500)

        return ()=>clearInterval(timer)
    },[])

  return (
    <div className="col-span-4">
        <div className="border border-gray-400 h-[450px] w-full rounded-lg p-2 bg-gray-50 flex flex-col-reverse overflow-y-auto">
            {
                messages.map(msg => <ChatMessage name={msg.name} message={msg.message} />)
            }
        </div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addmessage({name: 'Saquib', message: inputMsg}))
            setInputMsg('')
        }} className="w-full rounded-lg mt-2">
            <input onChange={(e)=>setInputMsg(e.target.value)} value={inputMsg} className="w-4/5 p-2 border border-gray-400 rounded-l-lg" type="text" placeholder="Live chat" />
            <button className="p-2 w-1/5 border border-gray-400 rounded-r-lg bg-gray-100">Send</button>
        </form>
    </div>
  );
};

export default LiveChat;
