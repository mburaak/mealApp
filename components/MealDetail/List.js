import { View, Text, StyleSheet } from "react-native";

function List({children}) {
    return( 
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>          
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
   subtitle : {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 4,
    textAlign: 'center',
    color: '#7ed6ec',
  },
  subtitleContainer: {
    borderBottomColor: '#7ed6ec',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    padding: 6,
    marginVertical: 4,
  },
});


