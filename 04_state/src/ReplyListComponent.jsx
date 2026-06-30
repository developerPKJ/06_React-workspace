import "./ReplyListComponent.css"

function ReplyListComponent(props) {
  return (
    <div>
        <h4>댓글 목록</h4>
        <ul>
            {props.replyList.map((reply, index) => (
                <li key={index}>
                    <strong>{reply.replyWriter}</strong> : {reply.replyContent}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default ReplyListComponent;