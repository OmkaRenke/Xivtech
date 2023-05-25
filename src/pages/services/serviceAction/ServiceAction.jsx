import React from 'react'
import "./style.scss"

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
const ServiceAction = ({servicesActionData,serviceActionDesc}) => {
//   console.log(serviceActionDesc)
//   console.log(servicesActionData)
  return (
    <div className='ServiceAction'>
		<ContentWrapper>
			<div className="flexClass">
			{
				servicesActionData.map(item=>
					(<div className="content" key={item.actionHeadingId}>
						<h2 className={`actionName ${item.next? "borderLineRight":"" }`}>
							{item.actionName}
						</h2>
					</div>)
				)
			}
			</div>
			<div className="descriptonContent">
				{serviceActionDesc}
			</div>
			<div className="getInTouchBtn">
				<button className='btn '>Get in touch</button>
			</div>
		</ContentWrapper>
	</div>
  )
}

export default ServiceAction