import React from "react";

function LuggageIcon(props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.58889 15.75H3.17778V4.725H1.58889C0.711524 4.725 0 5.4303 0 6.3V14.175C0 15.0447 0.711524 15.75 1.58889 15.75ZM19.0667 14.175V6.3C19.0667 5.4303 18.3551 4.725 17.4778 4.725H15.8889V15.75H17.4778C18.3551 15.75 19.0667 15.0447 19.0667 14.175ZM14.3 4.725V2.3625C14.3 1.05771 13.233 0 11.9167 0H7.15C5.8337 0 4.76667 1.05771 4.76667 2.3625V15.75H14.3V4.725ZM11.9167 4.725H7.15V2.3625H11.9167V4.725Z"
        fill="#12273D"
      />
    </svg>
  );
}

export default LuggageIcon;
