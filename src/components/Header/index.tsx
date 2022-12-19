import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import Logo from './../../../assets/logo.svg'
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo width={110} height={32} />
    </View>
  );
}

export default Header;