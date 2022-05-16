import "../../styles/Conversation.css";
import profileImage from "../../assets/images/outline_profile.png";
import soundImage from "../../assets/images/outline_volume.png";
import infoImage from "../../assets/images/outline_info.png";

function ConversationRight() {
  return (
    <div id="outerBox">
      <div id="other">
        <img src={infoImage} width={"70"} />
      </div>
      <div id="sentence">
        <div class="right" id="english">
          {" "}
          Hello. How can I help you?{" "}
        </div>
        <div class="right" id="korean">
          {" "}
          안녕하세요. 어떻게 도와드릴까요?{" "}
        </div>
        <div class="right" id="pronunciation">
          <div id="sound">
            <img src={soundImage} width={"40"} />
          </div>
          <div id="text">Annyeonghaseyo. Eotteohge dowaderikkayo? </div>
        </div>
      </div>
      <div id="speaker">
        <img src={profileImage} />
      </div>
    </div>
  );
}

export default ConversationRight;
