import React from 'react'

import "./style.scss"
import LazyLoadImg from '../../components/lazyLoad/LazyLoadImg'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const SubCapabilities = ({capData,capSubtitle}) => {
    console.log(capData)
    console.log(capSubtitle)
  return (
    <div className='SubCapabilities'>
        <ContentWrapper>
        <div className="container">
          <div className="title">
          Capabilities
          </div>
          <div className="sub">
            {capSubtitle}
          </div>
         
          <div className="gridclass">
            {
              capData.map(item=>(
                <div className="capCard" key={item.capId}>
                     
                  <div className="thumbnailImg">
                  <LazyLoadImg src={item.capabilitiesImg}/>
                  </div>
                  <div className="subTitle">
                        {item.capabilitiesTitle}
                    </div>
                    <hr />
                  <div className="description">
                    {item.capabilitiesDescription}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default SubCapabilities