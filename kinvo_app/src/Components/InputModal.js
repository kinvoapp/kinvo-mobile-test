import React, { useState, useEffect } from 'react';
import {
  Text, View, Modal, StyleSheet, TouchableOpacity, TextInput, Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FUNDS, PENSION, POST_FIXED_INCOME, TREASURY_DIRECT,
  SAVINGS, PRE_FIXED_INCOME, BITCOIN, STOCK, DEBENTURES, CURRENCY,
  FII, BDR, CommonStyles,
} from '../commonValues';

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  innerContainer: {
    backgroundColor: CommonStyles.backGroundColor,
    marginHorizontal: 70,
    padding: 10,
    borderRadius: 2,
    elevation: 3,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 15,
    height: 40,
    width: '100%',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginBottom: 10,
    elevation: 5,
  },
  input: {
    borderRadius: 1,
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 12,
    fontFamily: CommonStyles.fontSemibold,
    color: CommonStyles.fontColor,
  },
  inputContainer: {
    padding: 5,
  },
  btn: {
    marginTop: 10,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.selectedColor,
  },
  textBtn: {
    fontFamily: CommonStyles.fontSemibold,
    fontSize: 14,
    color: 'white',
  },
  pickerContainer: {
    borderRadius: 2,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#BBB',
  },
});


const InputModal = ({
  title, visible, onClose, textBtn, onBtnPress,
}) => {
  const titleText = title || 'Attention';
  const [selectedItem, setSelectedItem] = useState(1);
  const [productName, setProductName] = useState('');
  const [financialInstitutionName, setFinancialInstitutionName] = useState('');
  const [equity, setEquity] = useState('');
  const [profitability, setProfitability] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const pn = productName !== '';
    const fi = financialInstitutionName !== '';
    const eq = equity !== '';
    const pro = profitability !== '';
    setDisabled(!(pn && fi && eq && pro));
  }, [productName,
    financialInstitutionName,
    equity,
    profitability]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
    >
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.topView}>
            <Text style={styles.title}>{titleText.toUpperCase()}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Icon name="close" size={25} color="#900" />
            </TouchableOpacity>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedItem}
              onValueChange={itemValue => setSelectedItem(itemValue)}
              style={styles.inputContainer}
            >
              <Picker.Item label="FUNDS" value={FUNDS.id} key={Math.random()} />
              <Picker.Item label="PENSION" value={PENSION.id} key={Math.random()} />
              <Picker.Item label="POST FIXED INCOME" value={POST_FIXED_INCOME.id} key={Math.random()} />
              <Picker.Item label="TREASURY DIRECT" value={TREASURY_DIRECT.id} key={Math.random()} />
              <Picker.Item label="SAVING" value={SAVINGS.id} key={Math.random()} />
              <Picker.Item label="PRE FIXED INCOME" value={PRE_FIXED_INCOME.id} key={Math.random()} />
              <Picker.Item label="BITCOIN" value={BITCOIN.id} key={Math.random()} />
              <Picker.Item label="STOCK" value={STOCK.id} key={Math.random()} />
              <Picker.Item label="DEBENTURES" value={DEBENTURES.id} key={Math.random()} />
              <Picker.Item label="CURRENCY" value={CURRENCY.id} key={Math.random()} />
              <Picker.Item label="FII" value={FII.id} key={Math.random()} />
              <Picker.Item label="BDR" value={BDR.id} key={Math.random()} />
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              maxLength={60}
              onChangeText={value => setProductName(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Instituição financeira</Text>
            <TextInput
              style={styles.input}
              maxLength={60}
              onChangeText={value => setFinancialInstitutionName(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Equity</Text>
            <TextInput
              maxLength={60}
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={value => setEquity(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Rentabilidade</Text>
            <TextInput
              maxLength={60}
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={value => setProfitability(value)}
            />
          </View>
          <TouchableOpacity
            disabled={disabled}
            style={[styles.btn, disabled ? { opacity: 0.5 } : {}]}
            onPress={() => onBtnPress({
              productName, financialInstitutionName, equity, profitability,
            }, selectedItem)}
          >
            <Text style={styles.textBtn}>{textBtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;
