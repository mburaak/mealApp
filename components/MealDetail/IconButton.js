import { Pressable, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';

function IconButton({onPress,icon,color}){
    return <TouchableOpacity onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
    </TouchableOpacity>


}

export default IconButton;