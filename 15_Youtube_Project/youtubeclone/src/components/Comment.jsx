import { PROFILE_ICON } from "../utils/constants";

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="flex items-center mb-1 rounded-md shadow-sm p-2">
      <img className="h-10" src={PROFILE_ICON} alt="icon" />
      <div className="grow px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
