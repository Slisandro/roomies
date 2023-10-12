import { useState, useEffect } from 'react';
import useInstanceChatClient from '../../services/chat';
import { chatUserId, chatUserName } from '../../services/chat/config';

const chatClient = useInstanceChatClient();

const user = {
    id: chatUserId,
    name: chatUserName,
};

export const useChatClient = () => {
    const [clientIsReady, setClientIsReady] = useState(false);

    useEffect(() => {
        console.debug("ENTRA")
        const setupClient = async () => {
            try {
                const token = chatClient.createToken(chatUserId);
                console.log({ token });
                const chat = await chatClient.connectUser(user, token);
                console.log({ chat });

                setClientIsReady(true);

                // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
                // But in case you need the chat to load from offline storage first then you should render chat components
                // immediately after calling `connectUser()`.
                // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
            } catch (error) {
                // if (error instanceof Error) {
                console.error(`An error occurred while connecting the user: ${error.message}`);
                // }
            }
        };

        console.log(chatClient.userID, "UserId")
        
        // If the chat client has a value in the field `userID`, a user is already connected
        // and we can skip trying to connect the user again.
        
        if (!chatClient.userID) {
            setupClient();
            console.log({ chatClient })
        }
    }, []);

    return {
        clientIsReady,
    };
};