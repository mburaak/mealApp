import CategoryGridTile from "../components/CategoryGridTile";
import {CATEGORIES} from "../data/dummy-data";
import { FlatList, View } from "react-native";

function CategoriesScreen({navigation}) {
function renderCategoryItem(itemData){
   function pressHandler(){
        navigation.navigate('MealsOverview',
          {categoryId : itemData.item.id}
        );
    }
    return(
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    )
}


  return (
    <View style={{flex: 1, backgroundColor: '#2d619c'}}>
      <FlatList
       data={CATEGORIES}
       keyExtractor={(item) => item.id}
       renderItem={renderCategoryItem}
       numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;