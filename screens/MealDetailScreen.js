import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect } from "react";
import IconButton from "../components/MealDetail/IconButton";

function MealDetailScreen({route,navigation}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Pressed!');
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonPressHandler} icon="star" color="white"/>;
      },
    });
  },[navigation,headerButtonPressHandler])
  
  return (
        <ScrollView style={styles.rootContainer}>
          <Image style = {styles.Image} source={{uri: selectedMeal.imageUrl}} />
          <Text style = {styles.title}>{ selectedMeal.title}</Text>
          <MealDetail 
          duration={selectedMeal.duration} 
          complexity={selectedMeal.complexity} 
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}/>
          
          <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
              <Subtitle>List of Ingredients</Subtitle>
              <List data={selectedMeal.ingredients}/>
              <Subtitle>List of Steps</Subtitle>
              <List data={selectedMeal.steps}/>
            </View>
          </View>

        </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
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
  listContainer : {
    width: '80%'
  },
  listOuterContainer : {
    alignItems: 'center'
  }
});