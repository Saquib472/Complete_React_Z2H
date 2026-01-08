import { PROFILE_ICON } from "../utils/constants"

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-start gap-1">
        <img className="h-3 md:h-8" src={PROFILE_ICON} alt="chatIcon" />
        <h1 className="text-sm font-bold md:text-lg">{name}:</h1>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage