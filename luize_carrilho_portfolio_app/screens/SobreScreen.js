import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const SobreScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.titulo}>Sobre Mim 💁‍♀️</Text>
      <Text style={styles.texto}>
        Oi, tudo bem? Espero que sim! Eu sou a Luíze, uma pessoa cheia de sonhos, muita vontade de aprender e uma bagunça boa na cabeça — sabe quando a gente quer fazer um milhão de coisas ao mesmo tempo? Então, sou tipo assim.

        Atualmente, tô no 4° período de Sistemas para Internet. Confesso que nem sempre tô apaixonada pela área (às vezes bate aquele “será que é isso mesmo?”), mas tô firme porque acredito que o aprendizado é um degrau importante para construir meu futuro do jeitinho que eu quero.

        Falando em futuro, meu maior sonho é montar meu próprio negócio na área de moda praia — sim, aquela vibe sol, mar, biquíni e muita liberdade! Moda praia não é só roupa pra mim, é estilo de vida, é expressão, é autoestima. E eu quero criar algo que faça as pessoas se sentirem bem, confiantes e livres pra serem quem são.

        Mas a minha vida não é só código e praia, não! Eu sou apaixonada por arte, história e astronomia. Sim, eu curto viajar pelo tempo e pelo espaço sem sair do lugar. Essas paixões me ajudam a expandir minha mente, me inspiram e me fazem ver o mundo de um jeito diferente.

        Ah, e tem mais: eu AMO cozinhar! Tem coisa melhor do que criar sabores, inventar receitas e ainda se deliciar com o resultado? A cozinha é meu refúgio, meu laboratório criativo. Se você quiser trocar umas dicas de receita, tô dentro!

        Criei esse app como um jeito de juntar tudo que eu tô aprendendo, mostrar meus projetos e abrir uma porta pra quem quiser conhecer o que eu faço. Quero que seja um espaço leve, verdadeiro e cheio de energia boa.

        Se você chegou até aqui, obrigada por dedicar um tempinho pra me conhecer! Se quiser trocar ideia, dar um feedback ou só bater papo, é só me chamar. Tô sempre aberta pra novas conexões e aprendizados.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e75480',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
  },
});


export default SobreScreen;
