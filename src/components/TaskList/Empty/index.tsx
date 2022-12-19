import React from 'react';
import { Text, View } from 'react-native';
import Clipboard from './../../../../assets/clipboard.svg';
import { styles } from './styles';

// import { Container } from './styles';

const Empty: React.FC = () => {
  return (
    <View style={styles.container}>
      <Clipboard width={56} height={56} />
      <View style={styles.textContainer}>
        <Text style={{ ...styles.text, fontWeight: 'bold', }}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

export default Empty;