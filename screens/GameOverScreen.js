import { View,Image,StyleSheet,Text} from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen(props) {
    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> round to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></Text>
            <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontSize:22,
        fontFamily:'open-sans',
        textAlign:"center",
        marginVertical:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    }
})