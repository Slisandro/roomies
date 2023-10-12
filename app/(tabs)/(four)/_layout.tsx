import React from 'react';
import { Stack } from 'expo-router';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import useInstanceChatClient from '../../../services/chat';
import { ChatProvider } from '../../../contexts/chat-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

const chatClient = useInstanceChatClient();

export default function TabThreeScreen() {
    return (
        <ChatProvider>
            <OverlayProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <Chat client={chatClient}>
                            <Stack>
                                <Stack.Screen name="index" />
                                <Stack.Screen name="channelScreen" />
                            </Stack>
                        </Chat>
                    </SafeAreaView>
                </GestureHandlerRootView>
            </OverlayProvider>
        </ChatProvider>
    );
}