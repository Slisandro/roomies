import React from 'react';
import { FlatList } from "react-native";

export default function FlatListComponent ({ data, renderItem, ...props }) {
    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
            {...props}
        />
    )
}