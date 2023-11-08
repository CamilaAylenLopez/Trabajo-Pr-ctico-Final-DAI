import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centrar}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Contactos")}>
                    <Text style={styles.texto}>Ver tus contactos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Vibracion")}>
                    <Text style={styles.texto}>Vibración</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Camara")}>
                    <Text style={styles.texto}>Abrir camara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("SMS")}>
                    <Text style={styles.texto}>Mensaje SMS</Text>
                </TouchableOpacity>
            </View>
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
        borderRadius: 15,
        borderColor: '#58CBC0',
        backgroundColor: '#58CBC0',
        minHeight: '40px',
        minWidth: '200px',
        maxWidth: '200px',
        margin: '20px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        display: 'flex',
        color: 'white',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    centrar: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});