import React, { useState } from "react";
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        // you can add validation
        setTitleValue(text)
    }

    const savePlaceHandler = () => {
        console.log('titleValue ==', titleValue);
        dispatch(placesActions.addPlace(titleValue));
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Nama Tempat</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={titleValue} />
                <Button title="Simpan" color={Colors.accent} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 6,
    }
});

NewPlaceScreen.navigationOptions = {
    headerTitle: "Tambah Tempat Baru"
}

export default NewPlaceScreen;