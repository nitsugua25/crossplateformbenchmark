import React, { useState, useRef } from "react";
import {FlatList, Text, View, TextInput, Button, Dimensions} from "react-native";

export default function Container() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const flatListRef = useRef<FlatList>(null);

    const { width } = Dimensions.get("window");
    const generateData = () => {
        const number = parseInt(inputValue, 10);
        if (isNaN(number) || number <= 0) return;

        const newData:any = Array.from({ length: number }, (_, i) => ({
            id: i + 1,
            title: `Item ${i + 1}`,
        }));
        setData(newData);

        // Automatically scroll to the top after generating data
        flatListRef.current?.scrollToIndex({ index: 0, animated: true });
    };


    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 10,
                }}
                placeholder="Enter number of items"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Button title="Generate List" onPress={generateData} />
            <FlatList
                ref={flatListRef}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={{
                            width: width,
                            padding: 10,
                            borderBottomWidth: 1,
                            borderColor: "#ccc",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>{item.title}</Text>
                    </View>
                )}
            />

        </View>
    );
}