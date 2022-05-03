import "../styles/Conversation.css";

function ConversationLeft(){
    return(
        <div id = "outerBox">
            <div id = "speaker">image</div>
            <div id = "sentence">
                <div class = "left" id = "english"> English</div>
                <div class = "left" id = "korean"> 한글입니다</div>
                <div class = "left" id = "pronunciation"> 
                    <div id = "text">text</div>
                    <div id = "sound">sound</div>
                </div>
            </div>
            <div id = "other">optional</div>
        </div>
    )
}

export default ConversationLeft;