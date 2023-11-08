import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Contactos")}>
                <Text style={styles.texto}>Ve tus contactos</Text>
            </TouchableOpacity>
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