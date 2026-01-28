import { View, FlatList } from 'react-native';

import MealItem from './MealItem';

function MealsList({items}) {
       function renderMealItem(itemData){
   
           const item = itemData.item;
   
           const mealItemProps = {
               id: item.id,
               title: item.title,
               imageUrl: item.imageUrl,
               duration: item.duration,
               complexity: item.complexity.toUpperCase(),
               affordability: item.affordability.toUpperCase(),
           };
   
           return <MealItem {...mealItemProps}/>;
       }  
   
     return (
       <View>
           <FlatList   
           data={items} 
           keyExtractor={(item) => item.id}
           renderItem={renderMealItem} />
       </View>    
     );
}   

export default MealsList;