import { Image, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  
  return (
        <View>
          <Image style = {styles.Image} source={{uri: selectedMeal.imageUrl}} />
          <Text style = {styles.title}>{ selectedMeal.title}</Text>
          <MealDetail 
          duration={selectedMeal.duration} 
          complexity={selectedMeal.complexity} 
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}/>
          
          <List>List of Ingredients</List>

          {selectedMeal.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
          
          <Subtitle>List of Steps</Subtitle>

          {selectedMeal.steps.map((step) => (
            <Text key={step}>{step}</Text>
          ))}
        </View>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 350,
  },
  title : {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },


});