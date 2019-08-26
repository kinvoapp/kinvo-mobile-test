import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Alert,
} from 'react-native';
import ResumoImg from '../assets/Icons/resumo_icon.png';
import CarteiraImg from '../assets/Icons/carteira_icon.png';
import ContaImg from '../assets/Icons/conta_icon.png';
import PremiumImg from '../assets/Icons/premium_icon.png';
import AddImg from '../assets/Icons/add_icon.png';
import Premium from './Tab/Premium';
import Resumo from './Tab/Resumo';
import Conta from './Tab/Conta';
import Pages from './Tab/Pages';
import BottomIcon from './Components/BottomIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
  bottomBar: {
    height: 65,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#DAE0E3',
    flexDirection: 'row',
  },
});

const bottomList = [
  {
    Img: ResumoImg,
    indexPage: 0,
    title: 'Resumo',
  },
  {
    Img: CarteiraImg,
    indexPage: 1,
    title: 'Carteira',
  },
  {
    Img: PremiumImg,
    indexPage: 2,
    title: 'Premium',
  },
  {
    Img: ContaImg,
    indexPage: 3,
    title: 'Conta',
  },
];

const TabBottom = () => {
  const [selected, setSelected] = useState(1);

  const onPageSelect = (id) => {
    setSelected(id);
  };

  const onButtonClicked = () => {
    Alert.alert('Add', 'Add a  product');
  };
  const Tabs = [{
    id: 0,
    page: <Resumo />,
    title: 'Resumo',
  },
  {
    id: 1,
    page: <Pages backPage={() => setSelected(0)} />,
    title: 'Carteira',
  },
  {
    id: 2,
    page: <Premium />,
    title: 'Premium',
  },
  {
    id: 3,
    page: <Conta />,
    title: 'Conta',
  },
  ];

  useEffect(() => {

  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.pageView}>
        {Tabs[selected].page}
      </View>
      <View style={styles.bottomBar}>
        {
            bottomList.map((item, index) => {
              const { Img, indexPage, title } = item;
              if (index === (bottomList.length) / 2) {
                return (
                  <View style={{ flexDirection: 'row' }} key={Math.random()}>
                    <BottomIcon
                      Img={AddImg}
                      Button
                      onPageSelect={() => onButtonClicked()}
                    />
                    <BottomIcon
                      Img={Img}
                      indexPage={indexPage}
                      title={title}
                      onPageSelect={id => onPageSelect(id)}
                      selected={selected}
                    />
                  </View>
                );
              }
              return (
                <BottomIcon
                  Img={Img}
                  indexPage={indexPage}
                  title={title}
                  onPageSelect={id => onPageSelect(id)}
                  selected={selected}
                  backPage={() => setSelected(0)}
                  key={Math.random()}
                />
              );
            })
          }
      </View>
    </View>
  );
};

export default TabBottom;
