import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SobreScreen from './screens/SobreScreen';
import AcademicoScreen from './screens/AcademicoScreen';
import ProfissionalScreen from './screens/ProfissionalScreen';
import ProjetosScreen from './screens/ProjetosScreen';
import JogoSenhaScreen from './screens/JogoSenhaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FAEDF4', 
          },
          headerTintColor: '#6B445F', 
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
          },
          headerBackTitleVisible: false, 
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre Mim' }} />
        <Stack.Screen name="Acadêmico" component={AcademicoScreen} options={{ title: 'Formação' }} />
        <Stack.Screen name="Profissional" component={ProfissionalScreen} options={{ title: 'Experiência' }} />
        <Stack.Screen name="Projetos" component={ProjetosScreen} options={{ title: 'Meus Projetos' }} />
        <Stack.Screen name="JogoSenha" component={JogoSenhaScreen} options={{ title: 'Jogo da Senha 🔐' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
