import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const generatePassword = () => {
  let digits = [];
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);
    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }
  return digits.join('');
};

const getResult = (guess, password) => {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === password[i]) {
      bulls++;
    } else if (password.includes(guess[i])) {
      cows++;
    }
  }
  return `${bulls}A${cows}B`;
};

export default function JogoSenhaScreen() {
  const [password, setPassword] = useState('');
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4 || /\D/.test(guess)) {
      Alert.alert('Erro', 'Digite 4 dígitos únicos!');
      return;
    }

    const result = getResult(guess, password);
    const newAttempts = [{ guess, result }, ...attempts];
    setAttempts(newAttempts);
    setGuess('');

    if (guess === password) {
      setGameOver(true);
      Alert.alert('Parabéns!', 'Você acertou a senha!');
    } else if (newAttempts.length >= 10) {
      setGameOver(true);
      Alert.alert('Fim de Jogo', `Você usou todas as tentativas. Senha: ${password}`);
    }
  };

  const handleShowPassword = () => {
    Alert.alert('Senha', `A senha atual é: ${password}`);
  };

  const resetGame = () => {
    setPassword(generatePassword());
    setGuess('');
    setAttempts([]);
    setGameOver(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎀 Joguinho da Senha 🎀</Text>
      <Text style={styles.subtitle}>Tente adivinhar a senha secreta de 4 dígitos únicos!</Text>

      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={setGuess}
        placeholder="Digite sua tentativa"
        keyboardType="numeric"
        maxLength={4}
        editable={!gameOver}
      />

      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={handleGuess} disabled={gameOver} color="#ec407a" />
        <View style={{ height: 10 }} />
        <Button title="Mostrar Senha" onPress={handleShowPassword} color="#f06292" />
        {gameOver && (
          <>
            <View style={{ height: 10 }} />
            <Button title="Jogar Novamente" onPress={resetGame} color="#f48fb1" />
          </>
        )}
      </View>

      <FlatList
        data={attempts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.attempt}>
            {index + 1}. {item.guess} ➜ {item.result}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fce4ec', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ad1457',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ec407a',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff0f6',
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  attempt: {
    fontSize: 18,
    marginVertical: 4,
    color: '#4a148c',
  },
});
