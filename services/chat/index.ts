import { chatApiKey, chatSecret } from './config';
import { StreamChat } from 'stream-chat';

const useInstanceChatClient = () => StreamChat.getInstance(chatApiKey) // , chatSecret);

export default useInstanceChatClient;