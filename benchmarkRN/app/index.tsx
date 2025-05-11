import { Text, View } from "react-native";
import  Container  from './element/Container';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container></Container>
    </View>
  );
}
