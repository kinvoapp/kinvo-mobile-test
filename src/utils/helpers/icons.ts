import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const icons = [
  IconFontAwesome,
  IconMaterialCommunity,
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialIcons,
  EvilIcons,
  Octicons,
  SimpleLineIcons,
];

icons.forEach((icon) => icon.loadFont());

export {
  IconFontAwesome,
  Entypo,
  IconMaterialCommunity,
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
  EvilIcons,
  Octicons,
  SimpleLineIcons,
};
