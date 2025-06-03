import React from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather, FontAwesome5, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
        <Image
    source={require('../assets/1000046501.jpg')}
    style={styles.foto}/>
      <Text style={styles.nome}>Luíze Carrilho</Text>
      <Text style={styles.subtitulo}>
        Oi, eu sou a Andreza Luíze Carrilho, estudante de Sistemas para Internet. Este é meu portfólio digital, onde compartilho meus projetos e habilidades na área de tecnologia.
      </Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Sobre')}>
        <Feather name="sun" size={24} color="#6B445F" />
        <Text style={styles.textoBotao}>Sobre Mim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Acadêmico')}>
        <FontAwesome5 name="book" size={20} color="#6B445F" />
        <Text style={styles.textoBotao}>Acadêmico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Profissional')}>
        <MaterialIcons name="work" size={24} color="#6B445F" />
        <Text style={styles.textoBotao}>Profissional</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Projetos')}>
        <Entypo name="star-outlined" size={24} color="#6B445F" />
        <Text style={styles.textoBotao}>Projetos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('JogoSenha')}>
        <MaterialCommunityIcons name="flower" size={26} color="#6B445F" />
        <Text style={styles.textoBotao}>Jogo Senha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  foto: {
  width: 130,
  height: 130,
  borderRadius: 65,
  marginBottom: 20,
  borderWidth: 4,
  borderColor: '#F7D7DF',
},
  container: {
    backgroundColor: '#FAEDF4',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  nome: {
    fontSize: 42,
    textAlign: 'center',
    color: '#6B445F',
    fontWeight: '600',
    lineHeight: 50,
    marginBottom: 10,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6B445F',
    marginBottom: 40,
    lineHeight: 24,
  },
  botao: {
    backgroundColor: '#F7D7DF',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoBotao: {
    marginLeft: 12,
    fontSize: 18,
    color: '#6B445F',
    fontWeight: '500',
  },
});
