import React from 'react'
import "./style.scss"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import LazyLoadImg from "../../../components/lazyLoad/LazyLoadImg"
import { useNavigate } from 'react-router-dom'
const Capabilities = ({capData,ServiceName}) => {
  // console.log(capData)
  const navigation=useNavigate()
  return (
    <div className='Capabilities' >
      <ContentWrapper>
        <div className="container">
          <div className="title">
          Capabilities
          </div>
          <div className="gridclass">
            {
              capData.map(item=>(
                <div className="capCard" key={item.capId} onClick={()=>navigation(`/services/${ServiceName}/${item.capabilitiesDescription}`)}>
                  <div className="thumbnailImg">
                  <LazyLoadImg src={item.capabilitiesImg}/>
                  </div>
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

export default Capabilities