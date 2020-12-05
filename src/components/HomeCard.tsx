import React from 'react';
import { View, Text, Image, StyleSheet, TextStyle, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../assets/colors';
import typography from '../assets/fonts';
import { IHomeSection } from '../constants/types';

interface IHomeCard {
  item: IHomeSection;
}

type IHomeCardProps = IHomeCard;

const HomeCard: React.FC<IHomeCardProps> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(item.route)}>
      <View style={styles.mainSection}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Image source={item.icon} />
        </View>

        {/* Ttile and description */}

        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>

      <View>
        {/* Label */}

        {item.label && (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  mainSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    ...typography.title,
    color: colors.primary,
  } as TextStyle,
  description: {
    fontWeight: '600',
    ...typography.caption,
    color: colors.textGrey,
  } as TextStyle,
  labelContainer: {
    backgroundColor: colors.aqua,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 50,
  },
  label: {
    ...typography.caption,
    color: colors.white,
  } as TextStyle,
});

export default HomeCard;
