import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle : {backgroundColor : '#0075fc'},
        headerTintColor : 'white',
        cardStyle : {backgroundColor : '#2d619c'},
        drawerContentStyle : {backgroundColor : '#74aff3'},
        drawerActiveTintColor : 'white',
        drawerActiveTintColor : '#ffffff',
        drawerActiveBackgroundColor : '#376599'

  }}>
            <Drawer.Screen name='Categories' component={CategoriesScreen} 
            options={{
                title : 'All Categories',
                drawerIcon : ({color,size}) => <Ionicons name="list" color={color} size={size} />
              
            }}/>
            <Drawer.Screen name='Favourite' component={FavoritesScreen}
            options={{
                title : 'All Categories',
                drawerIcon : ({color,size}) => <Ionicons name="star" color={color} size={size} />
              
            }}/>
          </Drawer.Navigator>
}

export default function App() {
  return  <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle : {backgroundColor : '#0075fc'},
        headerTintColor : 'white',
        cardStyle : {backgroundColor : '#2d619c'}
      }}>
        <Stack.Screen 
        name='Drawer' 
        component={DrawerNavigator}
        options={{
          headerShown : false
        }}
        />
        <Stack.Screen 
        name='MealsOverview' 
        component={MealsOverviewScreen}
        //options={({route,navigation}) => {
        //  const catId = route.params.categoryId;
        //  return {
        //    title : catId,
        //  };
        // }}
        />
        <Stack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={{title:'About the Meal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  
}

const styles = StyleSheet.create({
  container: {
  },
});
