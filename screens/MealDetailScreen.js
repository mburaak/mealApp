import { Image, Pressable, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  
  return (
        <View>
          <Image source={{uri: selectedMeal.imageUrl}} />
          <Text>{ selectedMeal.title}</Text>
          <MealDetail duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
          <Text>List of Ingredients</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
          <Text>List of Steps</Text>
        </View>
  );
}
export default MealDetailScreen;
