import React from "react";
import "./style.scss";
import { homeServies } from "../../DataBase/homepagedata";
import LazyLoadImg from "../../components/lazyLoad/LazyLoadImg";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import {AiOutlineArrowRight} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="mainContent">
      <ContentWrapper>
        <div className="title">
          <h2>Let's Collaborate</h2>
        </div>
        {homeServies?.map((item) => (
          <div key={item?.id}>
            <div className="content" onClick={()=>navigate(`/services/${item?.ServiceName}`)}>
              <div className="leftContent">
                  <h1 className="serviceName">{item?.ServiceName}</h1>
                  <div className="des">{item?.description}</div>
                  <div className="cta">{item?.ctaName} <AiOutlineArrowRight/> </div>

              </div>
              <div className="rightContent">
                <LazyLoadImg src={item?.srcImg} />
              </div>
            </div>
          </div>
        ))}
      </ContentWrapper>
    </div>
  );
};

export default Home;
