import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useTheme } from '../contexts/ThemeContext'; // Assumindo que esse hook está implementado corretamente

function HomeScreen() {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={{ color: theme.colors.text, marginBottom: theme.spacing(1) }}>Home Screen</Text>
            <Button
                title="Alternar tema"
                color={theme.colors.primary}
                onPress={toggleTheme}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
