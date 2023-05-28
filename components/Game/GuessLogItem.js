import{View,Text,StyleSheet} from 'react-native'
import Colors from '../../constants/colors';
function GuessLogItem(props){
return(
    <View style={styles.ListItem}>
    <Text style={styles.itemText}>#{props.roundNumber}</Text>
    <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
);
}

export default GuessLogItem;

const styles=StyleSheet.create({
    ListItem:{
        borderColor:Colors.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    itemText:{
        fontFamily:'open-sans'
    }
})

