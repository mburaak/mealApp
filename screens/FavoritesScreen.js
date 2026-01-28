import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";


function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

    if(favoriteMeals.length === 0){
        return <View style={styles.container}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }

    return (
        <MealsList items={favoriteMeals}/> 
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#2d619c',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 32,
        color: 'white',
    },
});