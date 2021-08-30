import React from "react";
import "../styles/MainFooter.css";

const MainFooter = () => {
  return (
    <div className="mainFooter__main">
      <div className="footer__RsWrapper">
        <div className="footer__fir">
          <div>주식회사 선진펫</div>
          <div>
            <div>주소 : 경상북도 청도군 청도읍 송읍길 79 주식회사 선진펫</div>
            <div style={{ margin: `0 50px` }}>대표이사 : 이권형</div>
            <div>대표번호 : 053-982-1550</div>
          </div>
          <div>
            <div style={{ marginRight: `10px` }}>팩스 : 053-986-1545</div>
            <div>통신판매업신고번호 : 제2012-대구동구-0113호</div>
          </div>

          <div>
            <div>사업자등록번호 : 502-86-16211</div>
            <div style={{ fontWeight: `600` }}>[사업자정보확인]</div>
          </div>

          <div style={{ margin: `10px 0` }}>
            Copyright &copy; 주식회사 선진펫 All rights reserved.
          </div>
          <div>
            <div className="first__image">
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Ffooter_image1.png?alt=media&token=f94dfcbb-7b44-4ec7-8b83-7547b64b22a8`}
                alt="footer__image1"
              />
            </div>
            <div className="second__image">
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Ffooter_image2.png?alt=media&token=c98bc925-fdc4-4cfd-9887-e61369534122`}
                alt="footer__image1"
              />
            </div>
          </div>
        </div>
        <div className="footer__sec">
          <div>평일 : 8:30 - 17:30</div>
          <div>점심시간: 12:30 - 13:30</div>
          <div>토,일/공휴일은 휴무</div>
          <div>E-Mail : sunjinpf@naver.com</div>
        </div>

        <div className="footer__thi">
          <div style={{ marginBottom: `20px` }}>
            <div>펫마트 창업문의</div>
            <div>1588-1684</div>
          </div>
          <div style={{ marginBottom: `20px` }}>
            <div>서울/수도권 가맹문의</div>
            <div>1577-0731</div>
          </div>
          <div>E-mail : vvvkmvvv@sunjinpet.co.kr</div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
