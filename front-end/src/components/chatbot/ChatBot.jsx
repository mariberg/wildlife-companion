import React,{ useEffect } from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';



const ChatBot = () => {


       useEffect(()=>{
        window.watsonAssistantChatOptions = {
            integrationID: "4bf83202-dd86-46fb-993e-8cb723191b56", // The ID of this integration.
            region: "eu-gb", // The region your integration is hosted in.
            serviceInstanceID: "df848c67-b995-4397-b040-53505c63587e", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
        };
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);

       }, [])
   
    

       return (
              <div id="ibm-chatbot-container" style={{ position: "absolute", bottom: "80px", right: "30px", textAlign: "right" }}>
           
              <h1 style={{ color: "#20601F" }}>CHAT WITH OUR BOT TO LEARN MORE <ArrowDownOutlined /></h1>
          </div>
          
          
       )
}

export default ChatBot;