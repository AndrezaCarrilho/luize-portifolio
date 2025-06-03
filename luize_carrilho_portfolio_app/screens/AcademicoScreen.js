import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AcademicoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formação Acadêmica 🎓</Text>
      <Text style={styles.texto}>Me formei no Ensino Médio em 2021, na escola EREM Professor Fernando Mota. Logo depois, em 2022, comecei a faculdade de Marketing, mas percebi que não era bem o que eu queria e acabei desistindo. Foi aí que conheci o Embarque Digital, um programa que me abriu portas para um novo caminho.

Em 2023, comecei o curso de Sistemas para Internet, minha atual faculdade. No meio do caminho, cheguei a trancar o 4º período e pensei em desistir, porque tive muita dificuldade em aprender alguns conteúdos, especialmente a linguagem Java, que não entrava na minha cabeça de jeito nenhum. Foi um momento difícil, mas resolvi não desistir.

Decidi encarar o desafio de frente e continuar firme até o final do curso. Desde então, tenho me dedicado muito e buscado aprender além da faculdade, fazendo cursos online sobre front-end, organização pessoal, banco de dados e outras áreas que me ajudam a fortalecer meu conhecimento e preparar meu futuro.

Hoje, vejo essa trajetória não como uma linha reta, mas como uma caminhada cheia de aprendizado, adaptações e muita vontade de crescer.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#db7093',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AcademicoScreen;