import { TextInput,View ,StyleSheet,Alert,Text} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen(props){

    const [enteredNumber,setEnteredNumber]=useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber=parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid number!',
            'Number has to be between 1 and 99',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler}])
            return;
        }
        props.onPickNumber(chosenNumber)
    }

return(

    
    
<View style={styles.rootContainer}>
<Title>Guess My Number</Title>
<Card>
    <InstructionText>Enter a Number</InstructionText>
    <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" value={enteredNumber} onChangeText={numberInputHandler}/>
    <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>    
    </View>
    
    </View>
    
</Card>
</View>
);
}

export default StartGameScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
   
    numberInput:{
        height:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
        width:50,
        textAlign:"center"
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    
});