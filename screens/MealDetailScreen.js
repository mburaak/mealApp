import { Pressable, Text, View } from "react-native";

function MealDetailScreen({onPress}) {
  return (
    <Pressable onPress={onPress}>
        <View>
        <Text>Meal Detail Screen!</Text>
        </View>
    </Pressable>
  );
}
export default MealDetailScreen;
