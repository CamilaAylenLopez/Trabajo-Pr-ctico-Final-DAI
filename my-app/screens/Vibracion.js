import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, FlatList, Vibration, Button  } from "react-native";
import React, { useState, useEffect} from "react";

export default function VibracionScreen() {
    const ONE_SECOND_IN_MS = 1000;

    return (
        <>
            <Button
                title="Vibrate for 10 seconds"
                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
            />
        </>
    );
}
