import { StyleSheet,View } from "react-native";
import Colors
 from "../../constants/colors";
function Card(props){
return(
<View style={styles.inputContainer}>{props.children}</View>
);
}

export default Card;

const styles=StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:24,
        borderRadius:8,
        padding:15,
        marginTop:36,
        backgroundColor:Colors.primary800,
        elevation:4
    },
})