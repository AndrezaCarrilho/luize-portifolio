import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Luíze Carrilho</Text>
      <Text style={styles.subtitle}>
        Desenvolvedora em transição para empreendedora da moda praia com alma artística e coração cósmico
      </Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>🌞 Sobre</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>📖 Acadêmico</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>💼 Profissional</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>⭐ Projetos</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>🌸 Jogo</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fceaff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6a4c93',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#5a5a5a',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#f8d1e0',
    padding: 15,
    width: '100%',
    borderRadius: 20,
    marginBottom: 10
  },
  buttonText: {
    color: '#6a4c93',
    fontSize: 18,
    textAlign: 'center'
  }
});