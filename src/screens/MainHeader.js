import React from "react";
import "../styles/MainHeader.css";

const Main1 = () => {
  return (
    <div className="main__header">
      <div className="media__header">
          <div></div>
          <div></div>
          <div></div>
        </div>
      <div className="header__RsWrapper">
        <img
          className="main__logo"
          src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Flogo.png?alt=media&token=3e8680e3-2b22-4e40-aee0-c6c84ca8f5fc`}
        />
        <ul>
          <li>회사소개</li>
          <li>매장안내</li>
          <li>가맹절차</li>
          <li>가맹상담 / FAQ</li>
        </ul>
        <div className="main__number">가맹문의 1588-1684</div>
      </div>
    </div>
  );
};

export default Main1;
