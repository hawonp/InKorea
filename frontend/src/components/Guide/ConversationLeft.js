import "../../styles/Conversation.css";
import profileImage from "../../assets/images/outline_profile.png";
import soundImage from "../../assets/images/outline_volume.png";

function ConversationLeft() {
  return (
    <div id="outerBox">
      <div id="speaker">
        <img src={profileImage} />
      </div>
      <div id="sentence">
        <div class="left" id="english">
          {" "}
          Hello. How can I help you?{" "}
        </div>
        <div class="left" id="korean">
          {" "}
          안녕하세요. 어떻게 도와드릴까요?{" "}
        </div>
        <div class="left" id="pronunciation">
          <div id="text">Annyeonghaseyo. Eotteohge dowaderikkayo? </div>
          <div id="sound">
            <img src={soundImage} width={"40"} />
          </div>
        </div>
      </div>
      <div id="other">optional</div>
    </div>
  );
}

export default ConversationLeft;
