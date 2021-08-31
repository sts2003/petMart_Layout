import React from "react";
import "../src/App.css";
import MainFooter from "./screens/MainFooter";
import MainHeader from "./screens/MainHeader";

const App = () => {
  return (
    <div className="App__main">
      <MainHeader />
      <div className="main__image"></div>
      <div className="main__RsWrapper">
        <div className="main__slide">
          <div className="slide__top">
            <div className="slide__text">매장 현황</div>
            <div className="slide__bar"></div>
          </div>
          <div className="slide__images">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%A8_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%83%E1%85%A2%E1%84%80%E1%85%AE%E1%84%80%E1%85%A7%E1%86%BC%E1%84%87%E1%85%AE%E1%86%A8.png?alt=media&token=385a1eea-739b-4e20-afe7-8de599871ba0`}
            />
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fslide%20image2.png?alt=media&token=678b99ce-8f68-4ab9-9a2b-45270e234259`}
            />
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fslide%20image3.png?alt=media&token=4d32f1c6-934c-4c69-8264-23befb794412`}
            />
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fslide%20image4.png?alt=media&token=49c939b2-3f0e-4b34-b413-7b0ca5ce4bab`}
            />
          </div>
        </div>
      </div>
      <div className="main__graph">
        <div className="graph__top">
          <div className="graph__image">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fgraph%20title.png?alt=media&token=088e2d50-40e0-46a1-b004-52c62e1b181b`}
            />
          </div>
          <div className="graph__bigTitle">
            <div className="graph__title">
              <div className="title__text">업계유일</div>
              <div className="title__bar">최소 마진률 41%!</div>
            </div>
            <div className="">매장 규모별 순수익 공개!</div>
          </div>
        </div>

        <div className="graph__bottom">
          <div className="graph__graph">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fgraph.png?alt=media&token=867d1b23-ed00-4165-91a1-1baf59f90c12`}
            />
          </div>
          <div className="graph__table"></div>
        </div>
      </div>
      <div className="main__banner">
        <div className="banner__texts">
          <div className="banner__text1">펫마트 입점 브랜드</div>
          <div className="banner__text2">
            펫마트는 약 700여개의 유명, 신규브랜드와 5000여개의 품목을
            취급하고있습니다.
          </div>
        </div>
        <div className="banner__images">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%8F%E1%85%A9%E1%84%8F%E1%85%A9%E1%84%83%E1%85%A9%E1%86%A8_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=b0dbf289-7401-4bae-bbf3-f7736052415d`}
          />
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%80%E1%85%A1%E1%86%B7%E1%84%90%E1%85%A1%E1%86%AB%E1%84%91%E1%85%A2%E1%84%83%E1%85%B3_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=8d39e9e6-f883-4efd-8df4-bb81144355a0`}
          />
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%80%E1%85%A1%E1%86%B7%E1%84%90%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A9%E1%84%85%E1%85%A2_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=45a7eae7-a762-4d79-9a82-6a7dc4b33d70`}
          />
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%80%E1%85%A1%E1%86%B7%E1%84%90%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%84%8E%E1%85%B5_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=982fbefa-cf8c-4a94-ab42-31d79e8fd507`}
          />
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%83%E1%85%A9%E1%84%83%E1%85%A1%E1%86%B7%E1%84%83%E1%85%A9%E1%84%83%E1%85%A1%E1%86%B7.png?alt=media&token=ed1804be-f877-4d5b-a1b2-b8f614fcb065`}
          />
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%8B%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%91%E1%85%A1%E1%86%B7.png?alt=media&token=037c19e5-1b39-4ee1-afdd-b86b0a7a926e`}
          />
        </div>
      </div>

      <div className="main__RsWrapper">
        <div className="main__startBanner">
          <div className="startBanner__title">
            <div>지금!</div>
            <div className="title__wrapper">
              <div className="title__color">펫마트</div>
              <div style={{ color: `black` }}>를</div>
            </div>
            <div className="title__wrapper">
              <div className="title__color">시작</div>
              <div style={{ color: `black` }}>해야</div>
            </div>
            <div>되는 이유</div>
          </div>
          <div className="startBanner__images">
            <div className="startBanner__top">
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FbannerTop.png?alt=media&token=477289a2-95e1-429f-ad20-a58b85b354db`}
              />
            </div>
            <div className="startBanner__bot">
              <div className="startBanner__left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fbannerleft.png?alt=media&token=82c0ee54-7cde-4d7a-9bc4-510876db78ea`}
                />
              </div>
              <div className="startBanner__right">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fbanner%20lerft.png?alt=media&token=c9e0d597-a32b-404b-bccc-f6e0fc1254e5`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__story">
        <div className="story__top">
          <div className="story__left">
            <div className="left__1">
              <div>펫마트와</div>
              <div>함께 인생</div>
              <div>제2막 시작!</div>
            </div>
            <div className="left__2">
              <div>가맹점 성공스토리</div>
              <div>68호 군산점</div>
            </div>
          </div>
          <div className="story__right">
            <img
              className="img__story"
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube.png?alt=media&token=33492f00-554f-43f2-9cdf-375722920e3e`}
            />
          </div>
        </div>
        <div className="story__mid">
          <div className="story__mid__1">
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube1.png?alt=media&token=56016464-0f6c-4039-b4be-66590a39052d`}
              />
              <div className="mid__text">펫마트 진해점 성공스토리</div>
            </div>
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube2.png?alt=media&token=6238f738-7316-45f2-9f95-bdf4328d04a9`}
              />
              <div className="mid__text">펫마트 부산강서점 성공스토리</div>
            </div>
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube3.png?alt=media&token=4bef18a1-8d87-42a5-b945-a58b25d963c2`}
              />
              <div className="mid__text">펫마트 제주도남점 성공스토리</div>
            </div>
          </div>
          <div className="story__mid__2">
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube4.png?alt=media&token=defce26d-8a3b-435b-b6ea-67159b51d05f`}
              />
              <div className="mid__text">펫마트 전주효자점 성공스토리</div>
            </div>
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube5.png?alt=media&token=8322ead5-08b9-43e3-9b0c-e8e250fc9cd9`}
              />
              <div className="mid__text">펫마트 비산점 성공스토리</div>
            </div>
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2Fyoutube6.png?alt=media&token=5fbf5883-f8b4-4423-9462-6484bc8ae4de`}
              />
              <div className="mid__text">펫마트 부천점 성공스토리</div>
            </div>
          </div>
        </div>
        <div className="story__bottom">
          <div>더보기</div>
        </div>
      </div>
      <div className="main__RsWrapper">
        <div className="main__whyPetmart">
          <div className="whyPetMart__title">
            <div className="whyPetMart__title__main">왜 펫마트일까?</div>
            <div className="whyPetMart__title__desc">
              예비 창업자들이 펫마트를 선택하는 이유!
            </div>
          </div>
          <div className="whyPetmart__images">
            <div className="whyPetmart__1">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart%201_1.png?alt=media&token=359e508c-a00b-4b95-8fb5-2232eab54787`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title">
                  <img
                    className="desc__img"
                    src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart1_2.png?alt=media&token=e57ba8f6-2756-4600-9861-0ea4d27b8fdd`}
                  />
                </div>
                <div className="desc__desc"></div>
              </div>
            </div>
            <div className="whyPetmart__2">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart2_2.png?alt=media&token=ca136dfa-f3b7-4ebb-802e-b6c8cd599935`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
            <div className="whyPetmart__3">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart3_1.png?alt=media&token=24a91a06-9fcc-4bff-af90-a5a638be139f`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
            <div className="whyPetmart__4">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart4_2.png?alt=media&token=d92a3867-36ad-49a5-89ab-feea347237a1`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
          </div>
          <div className="sticker__Area">
            <div>
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%B5%E1%86%AF.png?alt=media&token=157f7462-a253-40e8-bde8-07a473b145e2`}
              />
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%8E%E1%85%A9.png?alt=media&token=53170d34-5b41-40d4-8072-8de1253bacdf`}
              />
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1.png?alt=media&token=7f757f50-187c-41b1-bb75-651b40c74bb1`}
              />
            </div>
          </div>
          <div className="whyPetmart__images">
            <div className="whyPetmart__5">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart5_1.png?alt=media&token=ca73b361-d3db-4de7-9c4a-1e291dfba487`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
            <div className="whyPetmart__6">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart6_2.png?alt=media&token=444fbfa8-3f3e-470b-8596-ac22e330b016`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
            <div className="whyPetmart__7">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart7_1.png?alt=media&token=2d59b32d-8db7-49d4-a415-128026681cb7`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
            <div className="whyPetmart__8">
              <div className="petmart__imgs">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2FwhyPetMart8_2.png?alt=media&token=1160cdfd-591a-482b-bca5-5721b21cab1f`}
                />
              </div>
              <div className="petMart__desc">
                <div className="desc__title"></div>
                <div className="desc__desc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__RsWrapper">
        <div className="main__price">
          <div className="price__title">개설비용</div>
          <div className="price__table">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/tesk%2F%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AF%E1%84%87%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC.png?alt=media&token=fe55cb45-ab63-42e4-ae35-a6f773fba113`}
            />
          </div>
          <div className="price__bottom">
            &#8251; 상기 자료는 지역, 상권의 특성 및 매장 구조 등의 시장 상황에
            따라 변동 될 수 있습니다. (별도 : 임차보증금, 임차료, 기타)
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
};

export default App;
