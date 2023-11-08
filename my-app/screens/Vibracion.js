import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect, Vibration, Button } from "react";

export default function VibracionScreen() {
    const ONE_SECOND_IN_MS = 1000;

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Vibrate for 10 seconds"
                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
              />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: 'white',
    },
    boton: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: '#58CBC0'
    },
    texto: {
        color: '#58CBC0',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
});