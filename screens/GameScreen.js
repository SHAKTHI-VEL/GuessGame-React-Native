import { View, Text ,StyleSheet,SafeAreaView, Alert} from "react-native";
import Title from "../components/UI/Title";
import { useState,useEffect} from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import { FlatList } from "react-native";
import GuessLogItem from "../components/Game/GuessLogItem";

function generateRandomBetween(min,max,exclude){
    const rndNum=Math.floor(Math.random()*(max-min))+min;

    if(rndNum===exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}

let minBoundary=1;
let maxBoundary=100;

function GameScreen(props) {

    const initialGuess=generateRandomBetween(1,100,props.userNumber)
    const[currentGuess,setCurrentGuess]=useState(initialGuess);
    const[guessRounds,setGuessRounds]=useState([initialGuess]);

    useEffect(()=>{
        if(currentGuess===props.userNumber){
            props.onGameOver(guessRounds.length);
        }
    },[currentGuess,props.userNumber,props.onGameOver])

    useEffect(()=>{
        let minBoundary=1;
let maxBoundary=100;
    },[])

    function nextGuessHandler(direction){

        if((direction==='lower' && currentGuess<props.userNumber) ||
        (direction==='greater' && currentGuess>props.userNumber))
        {
            Alert.alert("Don't Lie",'You know this is wrong',[{text:'Sorry!',style:'cancel'}]);
            return;
        }


        if(direction==='lower'){
            maxBoundary=currentGuess;
            
        }else{
            minBoundary=currentGuess+1;
            
        }
        const newRndNumber=generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds=>[newRndNumber,...prevGuessRounds])
    }

    const guessRoundsListLength=guessRounds.length;

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
            <FlatList 
            data={guessRounds} 
            renderItem={(itemData)=>(
            <GuessLogItem 
            roundNumber={guessRoundsListLength-itemData.index} 
            guess={itemData.item}

            />
            )}
            />

            </View>
        </View>
    );
}

export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:38
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    instructionText:{
        marginBottom:12
    },
    listContainer:{
        flex:1,
        padding:16
    }
    
})