import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from 'react-redux'

import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = props => {
    const places = useSelector(state => state.places.places);

    console.log('places => ', places);

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PlaceItem
                    onSelect={() => {
                        console.log('test navigate');
                        props.navigation.navigate('PlaceDetailScreen', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        })
                    }}
                    image={null}
                    title={itemData.item.title}
                    address={'Panorama Jatinangor'}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({

});

PlaceListScreen.navigationOptions = {
    headerTitle: 'Semua Lokasi'
};

export default PlaceListScreen;