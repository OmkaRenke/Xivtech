import AiRpaImg from "../assets/IMG-XIVTECH/AI + RPA is what we do/heroImg.png" 
import capAiImg from "../assets/IMG-XIVTECH/AI + RPA is what we do/Capabilities/rp4.jpg"

import EmbarceImg from "../assets/IMG-XIVTECH/Embrace Cloud/heroImg.webp"
import capEmbarceImg1 from "../assets/IMG-XIVTECH/Embrace Cloud/capabilities/tile1.png"
import capEmbarceImg2 from "../assets/IMG-XIVTECH/Embrace Cloud/capabilities/tile2.png"

import invoateSpeedImg  from "../assets/IMG-XIVTECH/Innovate with Speed/heroImg.jpg"
import capInvovateSpeedImg1  from "../assets/IMG-XIVTECH/Innovate with Speed/capabilities/tile1.png"

import makeBoldImg from "../assets/IMG-XIVTECH/Make Bolder Choices/heroImg.jpg"
import capMakeBoldImg1 from "../assets/IMG-XIVTECH/Make Bolder Choices/capabilities/tile1.png"
import capMakeBoldImg2 from "../assets/IMG-XIVTECH/Make Bolder Choices/capabilities/tile2.png"

export const  servicesDB = [
    {
      id: 11,
      ServiceName: "AI + RPA is what we do",
      heroTitle: "AI + RPA = Enabling End-to-End Automation",
      heroSubTitle:
        "Drive Efficiency, Automate and Monetize",
        heroImg:AiRpaImg,
      serviceAction:[
        {
            actionHeadingId:"action-11-1",
            actionName: "Process",
            next:true
         },
         {
            actionHeadingId:"action-11-2",
            actionName: "Automation",
            next:true
         },
         {
            actionHeadingId:"action-11-3",
            actionName:  "Monetization",
            next:false
         }
      ],
      serviceActionDescription:"Our team of professionals help you deliver measurable business outcomes by strategizing, designing and executing results driven AI + RPA automation. With Ekisu - our flagship AI automation product, we help you with end-to end automation for your workflows. Each automation helps you save time, reduce cost of human capital, and improve efficiency! Now that’s successful Digital Transformation!",
      capabilities:[
        {   capId:111,
            capabilitiesImg:capAiImg,
            capabilitiesDescription:"Bot Automation Simplified Build,Deploy and Scale bots"
        }
      ]
    },
    {
        id: 22,
        ServiceName: "Make Bolder Choices",
        heroTitle: "Cloud Native = Future Proof",
        heroSubTitle:
          "Achieve Competitive Advantage with Agility, Reliability, Responsiveness and Speed.",
          heroImg:makeBoldImg,
        serviceAction:[
          {
            actionHeadingId:"action-22-1",
            actionName: "Speed",
            next:true
         },
         {
            actionHeadingId:"action-22-2",
            actionName:"Agility",
            next:true
         },
         {
            actionHeadingId:"action-22-3",
            actionName: "Cost-Effective",
            next:false
         }
        ],
        serviceActionDescription:"We know cloud. We help unlock real value by helping you transform your business by virtue of cloud transformation. Being Cloud-Native enables Rapid Responsiveness, Innovative Features, and Zero Downtime. We help you accelerate business velocity and growth by embracing rapid change, large scale and resilence. Our expertise and focus on the Twelve-Factor App and the API First principles allow us to build true cloud-native apps.",
        capabilities:[
          {     
            capId:221,
              capabilitiesImg:capMakeBoldImg1,
              capabilitiesDescription:"Build Apps - Deliver New apps Users Love"
          },
          {     
            capId:222,
              capabilitiesImg:capMakeBoldImg2,
              capabilitiesDescription:"Modernize Apps - Rearchitect Valuable Legacy Apps"
          },
        ]
      },
      {
        id: 33,
        ServiceName: "Innovate with Speed",
        heroTitle: "DevOps with Azure",
        heroSubTitle:"Greater Agility, Resilience and Portability by building and deploying apps rapidly.",
        heroImg:invoateSpeedImg,
        serviceAction:[
         {
            actionHeadingId:"action-33-1",
            actionName:"Collaborate",
            next:true
         },
         {
            actionHeadingId:"action-33-2",
            actionName:"Speed",
            next:true
         },
         {
            actionHeadingId:"action-33-3",
            actionName:"Innovate",
            next:false
         }
        ],
        serviceActionDescription:"We help you get to market quicker by integrating DevOps Automation leveraging Containers, CICD and Microservices. Achieve business outcomes by adopting DevOps. Our unique capabilities allow us to help you build continuous delivery pipeline, enhance reliability & resilience, balance agility & consistency at scale.",
        capabilities:[
            {     
                  capId:331,
                  capabilitiesImg:capInvovateSpeedImg1,
                  capabilitiesDescription:"Continuous Integration and Continuous Deployment Build, Integration and Testing process automation"
            },
        ]
      },
      {
        id: 44,
        ServiceName: "Embrace Cloud",
        heroTitle: "Cloud Transition = Business Outcomes",
        heroSubTitle:"Rapidly - Rehost, Refactor, Rearchitect, Rebuild and Replace applications to transform and achieve business goals.",
        heroImg:EmbarceImg,
        serviceAction:[
         {
            actionHeadingId:"action-44-1",
            actionName:"On-Demand",
            next:true
         },
         {
            actionHeadingId:"action-44-2",
            actionName:"Transformation",
            next:true
         },
         {
            actionHeadingId:"action-44-3",
            actionName:"Utilization",
            next:false
         }
        ],
        serviceActionDescription:"Achieve business outcomes by transforming to cloud. Our unique capabilities allow us to help you, Discover New Revenue Streams, Reduce Cycle Time, Bring Scale and Reliability, Decrease Time to Market, Future Proof your Digital Estate. Why stop here? Go beyond with adopting cloud to integrate new forms of technologies to speed up, automate and improve your business. Cloud Computing integrates technologies such as Artificial Intelligence (AI), Machine Learning, Big Data Analytics, and the Internet of Things (IoT), helping you to achieve your business goals.",
        capabilities:[
            {     
                  capId:441,
                  capabilitiesImg:capEmbarceImg1,
                  capabilitiesDescription:"Cloud Services for Microsoft Azure Innovation, Scale, DevOps, Security & Compliance with Azure Cloud"
            },
            {     
                capId:442,
                capabilitiesImg:capEmbarceImg2,
                capabilitiesDescription:"Cloud Services for AWS Innovation, Scale, DevOps, Security & Compliance with AWS"
          },
        ]
      }
  ];