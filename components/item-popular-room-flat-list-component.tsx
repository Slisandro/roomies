import React from 'react';
import { Image, Text, View } from 'react-native';
import IconComponent from './icon-component';
import { PopularRoom } from '../models/popular-room';

function ItemPopularFlatListComponent({ item, distance }: { item: PopularRoom, distance: string }) {
    return (
        <View
            style={{
                backgroundColor: "rgba(255,255,255,.6)",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 15,
                height: "auto",
                maxWidth: 175,
                paddingBottom: 14,
                
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}
        >
            <Image source={{ uri: item.media[0] }} width={175} height={125} borderTopLeftRadius={10} borderTopRightRadius={10} />
            <View style={{ display: "flex", gap: 10, width: "100%", paddingHorizontal: 10 }}>
                <Text style={{ color: "#000", fontWeight: "800" }}>{item.title}</Text>
                <Text style={{ color: "#00000075", maxWidth: "100%" }}>{item.description.slice(0, 30)}...</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 2 }}>
                    <Text style={{ color: "#00000095" }}>
                        A {distance} km
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                        <IconComponent
                            color='rgba(212,175,55, 1)'
                            family='AntDesign'
                            name='star'
                            key={item.id}
                            onPress={() => { }}
                            size={10}
                            style={{}}
                        />
                        <Text style={{ color: "#00000075", fontWeight: '700' }}>
                            {item.likes}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemPopularFlatListComponent