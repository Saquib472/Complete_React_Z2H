import { PROFILE_ICON } from "../utils/constants"

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-start gap-1">
        <img className="h-8" src={PROFILE_ICON} alt="chatIcon" />
        <h1 className="font-bold">{name}:</h1>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage