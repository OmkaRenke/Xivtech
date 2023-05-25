import React, { useEffect } from "react";
import { servicesDB } from "../../DataBase/servicePageData";
import { useLocation, useParams } from "react-router-dom";
import "./style.scss";

import LazyLoadImg from "../../components/lazyLoad/LazyLoadImg";
import ServiceAction from "./serviceAction/ServiceAction";
import Capabilities from "./cap/Capabilities";
import SubCapabilities from "../subServices/SubCapabilities"
import {subServicesDB} from "../../DataBase/detailservicedata"
const Services = () => {
  const loaction=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[loaction])
  const { serviceName, subServiceName } = useParams();
  const dataIndex0 = servicesDB.filter(
    (item) => item?.ServiceName === serviceName
  );
  const data = dataIndex0[0];

	// subService dataBase start
	const Cap=subServicesDB.filter(item=>item?.ServiceName === serviceName)
	const Capdat=Cap?.map(item=>item?.Cap.filter(item=>item?.id === subServiceName))
	const Capdata=Capdat[0][0]
	// console.log(Capdata)
	// subService dataBase end

  return (
    <div className="container">
      <div className="heroBanner">
        <div className="opacityDiv">
          <LazyLoadImg src={ subServiceName ? Capdata?.heroImg :data?.heroImg} />
          <div className="opacitylayer"></div>
        </div>
      </div>
      <div className="textInfo">
        <div className="title">{ subServiceName ? Capdata?.heroTitle :data?.heroTitle}</div>
        <div className="subTitle">{ subServiceName ? Capdata?.heroSubTitle :data?.heroSubTitle}</div>
      </div>
      <ServiceAction
        servicesActionData={ subServiceName ? Capdata?.serviceAction : data?.serviceAction}
        serviceActionDesc={ subServiceName ? Capdata?.serviceActionDescription :data?.serviceActionDescription}
      />
     {
		subServiceName ? ( <SubCapabilities
			capData={Capdata?.subCapabilities}
			capSubtitle={Capdata?.capSubtitle}
		  />):(
			<Capabilities
			capData={data?.capabilities}
			ServiceName={data.ServiceName}
		  />
		)
	 }
    </div>
  );
};

export default Services;
