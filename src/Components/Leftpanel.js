import React from "react";
import Plus from "../images/penIcon.png";
import star from "../images/starIcon.png";
import send from "../images/sendIcon.png";
import inbox from "../images/inboxIcon.png";
import snooze from "../images/snoozeIcon.png";
export default function Leftpanel() {
  return (
    <div style={{ backdropColor: "#001D35", minHeight: "100vh" }}>
      <div
        style={{
          marginLeft: "1vw",
          width: "11vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "15px",
          backgroundColor: "#C2E7FF",
        }}
      >
        <img
          src={Plus}
          style={{ width: "1.5vw", marginLeft: "1.4vw" }}
          alt="plus_icon"
        />
        <h4
          style={{ marginLeft: "1.2vw", fontWeight: "500", fontSize: "1.2vw" }}
        >
          Compose
        </h4>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={inbox}
          style={{ width: "1.4vw", marginLeft: "2vw" }}
          alt="plus_icon"
        />
        <span
          style={{ marginLeft: "0.8vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={star}
          style={{ width: "1.4vw", marginLeft: "2vw" }}
          alt="plus_icon"
        />
        <span
          style={{ marginLeft: "0.8vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={snooze}
          style={{ width: "1.4vw", marginLeft: "2vw" }}
          alt="plus_icon"
        />
        <span
          style={{ marginLeft: "0.8vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={send}
          style={{ width: "1.4vw", marginLeft: "2vw" }}
          alt="plus_icon"
        />
        <span
          style={{ marginLeft: "0.8vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Send
        </span>
      </div>
    </div>
  );
}
