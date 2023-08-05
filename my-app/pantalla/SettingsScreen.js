import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const handleOptionPress = (option) => {
    // Aquí podrías implementar lógica para manejar la opción seleccionada
    console.log('Opción seleccionada:', option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ajustes</Text>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Seguridad')}
      >
        <Text style={styles.optionText}>Seguridad y Privacidad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Personalizar')}
      >
        <Text style={styles.optionText}>Pago</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Modo Oscuro')}
      >
        <Text style={styles.optionText}>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Preferencias')}
      >
        <Text style={styles.optionText}>Preferencias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Ayuda')}
      >
        <Text style={styles.optionText}>Ayuda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  option: {
    width: '80%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;