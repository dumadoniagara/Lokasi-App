import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoriteScreen = props => {
    return (
        <View>
            <Text>Favorite Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

FavoriteScreen.navigationOptions = {
    headerTitle: 'Favorit Saya'
}

export default FavoriteScreen;