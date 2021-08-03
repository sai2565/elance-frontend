import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
var jwt = require('jsonwebtoken');
import Head from 'next/head';
import Header from '../components/Header';
import { useSession, getSession  } from 'next-auth/client';

function Messenger ({messageSenderProfile, messageReceiverProfile}){

    const messageSenderId = messageSenderProfile.user[0]._id;
    const messageSenderName = messageSenderProfile.user[0].userName;
    const messageReceiverID = messageReceiverProfile.users[0]._id;
    const messageReceiverName = messageReceiverProfile.users[0].fullName;
    const messageReceiverImage = messageReceiverProfile.users[0].profilePic;
    const chatClient = StreamChat.getInstance('54bjxgj4wefx');
    
    // const filters = { type: 'messaging', members: { $in: [messageSenderId] } };
    // const sort = { last_message_at: -1 };

    const senderUserToken = jwt.sign({
        "user_id": messageSenderId
    }, '56fbem4f3hvaemwb5svep9v2ghdcb77acacu2953j2cjq9pp35e4yejg75kq8atb');
    
    try{
        chatClient.connectUser(
        {
            id: messageSenderId,
            name: messageSenderName,
            image: `https://getstream.io/random_png/?id=${messageSenderId}&name=${messageSenderName}`,
        },
            senderUserToken,
        );
    }catch(error){
        chatClient.disconnectUser();
        chatClient.connectUser(
        {
            id: messageSenderId,
            name: messageSenderName,
            image: `https://getstream.io/random_png/?id=${messageSenderId}&name=${messageSenderName}`,
        },
            senderUserToken,  
        );
    }

    const channelID = (messageSenderId > messageReceiverID) ? messageSenderId+"-"+messageReceiverID : messageReceiverID+"-"+messageSenderId;
    const channel = chatClient.channel('messaging', channelID, {
        image: messageReceiverImage,
        name: messageReceiverName,
        members: [messageSenderId, messageReceiverID],
    });

    return( 
        <div className="bg-white">
            <Head>
                <title>Elance | Messenger</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
                <Chat client={chatClient}>
                    
                        {/* <Window> */}
                            {/* <ChannelList filters={filters} sort={sort} /> */}
                            <Channel channel={channel}>
                                <div className="h-full w-full bg-white">
                                    <Window>
                                        <Header page={"messenger"}/>
                                        <ChannelHeader/>
                                        <MessageList />
                                        <MessageInput />
                                    </Window>
                                </div>
                            <Thread />
                            </Channel>
                        {/* </Window> */}
                    
                </Chat>
            
        </div>
    );
}
export default Messenger;

export async function getServerSideProps(context) {
    const nextAuthSession = await getSession(context);
    if(nextAuthSession && nextAuthSession.user && nextAuthSession.user.email){
        const messageSenderEmail = nextAuthSession.user.email;
        const messageSenderProfile = await fetch("http://elance-be.herokuapp.com/api/v1/users/getUserByEmail",{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "email": messageSenderEmail
                            })
                        });
        const messageSenderProfile_json = await messageSenderProfile.json();
        const messageReceiverProfile = await fetch("http://elance-be.herokuapp.com/api/v1/users/getAllUsers", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ 
                                "_id": context.query.userId
                            })
            });
            const messageReceiverProfile_json = await messageReceiverProfile.json();

        return {
            props : {
                "messageSenderProfile" : messageSenderProfile_json,
                "messageReceiverProfile" : messageReceiverProfile_json
            }
        }
    }
    
}


