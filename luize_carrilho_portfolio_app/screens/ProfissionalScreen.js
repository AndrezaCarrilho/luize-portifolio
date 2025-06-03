import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfissionalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Experiência Profissional 💼</Text>
      <Text style={styles.texto}>Ainda não iniciei oficialmente na área de TI, mas já empreendo com muito amor e dedicação. Sou dona de uma loja virtual de moda praia, onde atuo em várias frentes: desde a curadoria das peças até a comunicação visual da marca. 👙✨
Minha maior vontade é expandir esse negócio, unindo minha veia criativa com os aprendizados da tecnologia para criar algo único no mundo da moda. Acredito que o design, a arte e o digital podem andar juntos para transformar sonhos em realidade.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ProfissionalScreen;