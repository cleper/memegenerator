import React, { useState } from 'react';
import {
    LandingViewContainer,
    LandingViewHeader,
    MemeSelectionContainer
} from './styles';
import MemeGenerator from './components/memeGenerator/index';
import MemeSelection from './components/memeSelection/index';

const GET_MEMES_API = "https://api.imgflip.com/get_memes";

const LandingView = () => {
    const [showMemeSelection, setShowMemeSelection] = useState(false);
    const [memes, setMemes] = useState([]);
    const [currentMeme, setCurrentMeme] = useState({});

    function showMemeSelectionClicked(){
        if(!showMemeSelection){
            getMemes()
        }
        setShowMemeSelection(!showMemeSelection);
    }

    function getMemes(){
        if(memes.length === 0){
            fetch(GET_MEMES_API)
            .then(response => response.json())
            .then(res => {
                setMemes(res.data.memes);
            });
        }
    }

    function setMeme(meme){
        setCurrentMeme(meme);
        setShowMemeSelection(false);
    }

    return(
        <LandingViewContainer>
            <LandingViewHeader> A meme generator using imgflip api </LandingViewHeader>
            <MemeGenerator showMemeSelectionClicked={showMemeSelectionClicked} currentMeme={currentMeme} setCurrentMeme={setMeme}/>
            <MemeSelectionContainer  show={showMemeSelection}>
                <MemeSelection memes={memes.slice(0, 10)} setMeme={setMeme}/>
            </MemeSelectionContainer>
        </LandingViewContainer>
    );
}

export default LandingView;