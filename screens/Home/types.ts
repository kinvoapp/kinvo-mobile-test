import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";

export type HomeProps = {
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}