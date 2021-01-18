import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Text, Touchable, View } from "react-native";
import Container from "../../components/Container";
import Card from "../../components/Card";
import { RootStackParamList } from "../../utils/navigator";
import Colors from "../../utils/colors";
import Typography from "../../components/Typography";
import Badget from "../../components/Badget";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/Icon";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

type Option = {
  title: string;
  // TODO: transformar em um enum
  icon: React.ComponentProps<typeof Icon>["name"];
  redirectTo?: keyof RootStackParamList;
  subtitle: string;
  isNew?: boolean;
};

function Home({ navigation }: Props) {
  const options: Option[] = [
    {
      title: "Ações",
      icon: "stocks",
      subtitle: "Nacionais",
      redirectTo: "Stocks",
    },
    {
      title: "Fundos",
      icon: "funds",
      subtitle: "De investimentos",
      isNew: true,
    },
    { title: "Previdências", icon: "pension", subtitle: "Privadas" },
  ];

  return (
    <Container>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            option.redirectTo && navigation.push(option.redirectTo)
          }
        >
          <Card>
            {/* TODO: Componentizar isso! */}
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: Colors.BODY,
                  borderRadius: 56,
                  marginRight: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name={option.icon} />
              </View>
              <View style={{ flexGrow: 1 }}>
                <Typography type="title">{option.title}</Typography>
                <Typography type="subtitle">{option.subtitle}</Typography>
              </View>
              <View>{option.isNew && <Badget />}</View>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
      {/* <Text>Se eu vou entrar na Kinvo vei!</Text> */}
    </Container>
  );
}

export default Home;
