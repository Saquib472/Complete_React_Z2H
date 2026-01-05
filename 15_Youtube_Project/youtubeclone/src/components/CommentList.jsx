import Comment from "./Comment"

const CommentList = ({comments}) => {
  return (
    comments.map((comment,index)=> {
        return (
            <>
                <Comment key={index} comment={comment} />
                {comment.replies.length > 0 && <div className="pl-9 border-l border-l-black"><CommentList key={index} comments={comment.replies} /></div>}
            </>
        )
    })
  )
}

export default CommentList