import React from 'react';
import { ChannelList } from 'stream-chat-expo';
import { chatUserId } from '../../../services/chat/config';
import { useChatContext } from '../../../contexts/chat-context';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native';

const filters = {
    members: {
        '$in': [chatUserId]
    }
};

const sort = {};

export default function ChannelListScreen() {
    const { setChannel } = useChatContext();
    const navigation = useNavigation();
    return (
        <ChannelList
            filters={filters}
            sort={sort}
            onSelect={(channel) => {
                setChannel(channel);
                // // @ts-expect-error
                // navigation.navigate('ChannelScreen');
            }}
        />
    );
};