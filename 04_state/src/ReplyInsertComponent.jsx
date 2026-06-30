function ReplyInsertComponent(props) {
    
    const handleInsert = (e) => {
        e.preventDefault();

        const replyInput = document.getElementById("replyInput").value;
        const replyWriter = document.getElementById("replyWriter").value;

        let newReplyList = props.replyList;

        newReplyList.unshift({replyWriter : replyWriter, replyContent : replyInput});

        props.setReplyList([...newReplyList]);
    };
    
    return (
        <div>
            <h4>댓글 작성</h4>
            
            <form action="" onSubmit={handleInsert}>
                작성자 : <input id="replyWriter" type="text"/> <br />
                내용 : <input id="replyInput" type="text" /> <br />
                <button type="submit">댓글 작성</button>
            </form>
        </div>
    );
}

export default ReplyInsertComponent;