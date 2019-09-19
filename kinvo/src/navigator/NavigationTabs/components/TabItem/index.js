/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity,Text,Image } from 'react-native';

import styles from './styles';

export default class index extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    active: false,
  }

  render() {
    const {
      title,
      active,
      onPress,
      iconName,
      iconSize
    } = this.props;

    renderImageIcon = ()=> {

      const nameImage = title.toString()
      
      // ARMENGUE por não usar icon
     
     if(nameImage == 'Wallet')
     return  <Image source={require("../../../../imagens/Wallet.png")} />
     if(nameImage == 'Account')
     return  <Image source={require("../../../../imagens/Account.png")} />  
     if(nameImage == 'Plus')
     return  <Image source={require("../../../../imagens/Plus.png")} />
     if(nameImage == 'Premium')
     return  <Image source={require("../../../../imagens/Premium.png")} />
     if(nameImage == 'Summary')
     return  <Image source={require("../../../../imagens/Summary.png")} />
    }

    const icon = renderImageIcon()
    

    return (
      <TouchableOpacity style={[styles.tabItem, active ? styles.active : styles.inactive]} onPress={onPress} activeOpacity={0.6}>
      {icon}
      </TouchableOpacity>
    );
  }
}
