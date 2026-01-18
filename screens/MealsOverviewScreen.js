import {useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import { MEALS , CATEGORIES } from '../data/dummy-data';
import { View, FlatList } from 'react-native';

function MealsOverviewScreen({route , navigation}) {
    //const route = useRoute(); // Alternatif yöntem kullanımı prop olarak route almak yerine useRoute hookunu kullanmak.
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    


    function renderMealItem(itemData){
        function selectMealItemHandler(){ 
            console.log('Karta tıklandı!');
            navigation.navigate('MealDetail')
        }
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity.toUpperCase(),
            affordability: item.affordability.toUpperCase(),
        };

        return <MealItem {...mealItemProps} onPress={selectMealItemHandler} />;
    }  

  return (
    <View>
        <FlatList   
        data={displayedMeals} 
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem} />
    </View>    
  );
}   
export default MealsOverviewScreen;
