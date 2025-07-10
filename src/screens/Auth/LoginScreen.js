import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeProvider';
import { lightTheme, darkTheme } from '../theme/theme';

const LoginScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const activeTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: activeTheme.background }]}>
      <Text style={[styles.title, { color: activeTheme.text }]}>Login Screen</Text>

      <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: activeTheme.primary }]}>
        <Text style={{ color: '#fff' }}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  button: {
    padding: 15,
    borderRadius: 8
  }
});
