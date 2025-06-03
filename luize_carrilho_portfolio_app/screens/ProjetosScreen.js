import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProjetosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Projetos 💻</Text>
      <Text style={styles.texto}>Adota Recife (2º Período)
Durante o segundo período da faculdade, desenvolvi em equipe o Adota Recife, um aplicativo mobile voltado para facilitar a adoção responsável de cães e gatos na cidade. O objetivo era conectar abrigos e protetores independentes com pessoas que desejam adotar, promovendo amor, acolhimento e uma nova chance para os animaizinhos. 💖🐶🐱
O app foi pensado com uma navegação simples e acessível, além de trazer informações como vacinas, porte, e temperamento dos pets.
{"\n\n"}
Plataforma de Cursos (3º Período)
No terceiro período, desenvolvi o frontend de uma plataforma de cursos online gratuita, com foco em pessoas de baixa renda que buscam aprender e se capacitar. A ideia do projeto nasceu do desejo de democratizar o conhecimento e criar oportunidades para quem nem sempre tem acesso a instituições formais. 📚🌱
A interface foi criada pensando em acessibilidade, leveza visual e fácil navegação, sendo adaptável para dispositivos móveis.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f5',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c71585',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ProjetosScreen;