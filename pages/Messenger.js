import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
var jwt = require('jsonwebtoken');
import Head from 'next/head';
import Header from '../components/Header';
import { useSession, getSession  } from 'next-auth/client';

function Messenger ({messageSenderProfile, messageReceiverProfile}){
    
    //console.log(messageSenderId + " "+ messageReceiverID);
    //console.log(" sender Profile "+ JSON.stringify(messageSenderProfile));
    const messageSenderId = messageSenderProfile.user[0]._id;
    const messageSenderName = messageSenderProfile.user[0].userName;
    const messageReceiverID = messageReceiverProfile.users[0]._id;
    const messageReceiverName = messageReceiverProfile.users[0].fullName;
    const messageReceiverImage = messageReceiverProfile.users[0].profilePic;
    const chatClient = StreamChat.getInstance('54bjxgj4wefx');
    
    const filters = { type: 'messaging', members: { $in: [messageSenderId] } };
    const sort = { last_message_at: -1 };

    //console.log(messageReceiverName +" "+messageReceiverImage);

    // useEffect(() =>{
    const senderUserToken = jwt.sign({
        "user_id": messageSenderId
    }, '56fbem4f3hvaemwb5svep9v2ghdcb77acacu2953j2cjq9pp35e4yejg75kq8atb');
    const receiverUserToken = jwt.sign({
        "user_id": messageReceiverID
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
        chatClient.disconnect();
        chatClient.connectUser(
        {
            id: messageSenderId,
            name: messageSenderName,
            image: `https://getstream.io/random_png/?id=${messageSenderId}&name=${messageSenderName}`,
        },
            senderUserToken,  
        );
    }
    //console.log(chatClient);
    const channelID = (messageSenderId > messageReceiverID) ? messageSenderId+"-"+messageReceiverID : messageReceiverID+"-"+messageSenderId;
    console.log(channelID);
    console.log(messageReceiverImage+ "-" + messageReceiverName);
    const channel = chatClient.channel('messaging', channelID, {
        name: messageReceiverName +" & "+ messageSenderName,
        members: [messageSenderId, messageReceiverID],
    });

    return( 
        <div className="bg-white">
            <Head>
                <title>Elance | Messenger</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <div className="h-full w-full">
                <Chat client={chatClient}>
                    {/* <Header page={"messenger"}/> */}
                    <Window>
                        <Header page={"messenger"}/>
                        <ChannelList filters={filters} sort={sort} />
                        <Channel channel={channel}>
                            <Window>
                                <ChannelHeader/>
                                <MessageList />
                                <MessageInput />
                             </Window>
                        <Thread />
                        </Channel>
                    </Window>
                </Chat>
            </div>
        </div>
    );
}
export default Messenger;

export async function getServerSideProps(context) {
    const nextAuthSession = await getSession(context);
    if(nextAuthSession && nextAuthSession.user && nextAuthSession.user.email){
        const messageSenderEmail = nextAuthSession.user.email;
        const messageSenderProfile = await fetch("http://elance-be.herokuapp.com/api/users/getUserByEmail",{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "email": messageSenderEmail
                            })
                        });
        const messageSenderProfile_json = await messageSenderProfile.json();
        const messageReceiverProfile = await fetch("http://elance-be.herokuapp.com/api/users/getAllUsers", {
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


