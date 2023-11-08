import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Contactos() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                })
                if (data.length > 0) {
                    setContacts(data)
                }
            }
        })();
    }, []);

    return (
        <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={styles.container}>
                        <Text>Nombre del contacto:</Text>
                        <Text>{item.name}</Text>
                        <Text>Numero del contacto:</Text>
                        <Text>{item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number}</Text>
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});