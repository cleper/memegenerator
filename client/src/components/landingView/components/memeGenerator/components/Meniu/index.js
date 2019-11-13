import React, { useState } from 'react';
import {
    MeniuContainer,
    DefaultButton,
    DefaultInput,
    ErrorMessage
} from './styles';
import PropTypes from 'prop-types';
import { getName } from '../../../../../../helpers/handleInputs';

const Meniu = ({showMemeSelectionClicked, generateMeme, meme, error}) => {
    const memeSet = Object.entries(meme).length > 0;
    const {"box_count" : boxes} = meme;
    //Define 5 boxes states for maximum of inputs availible for one meme defined in api
    const [firstBoxText, setFirstBoxText] = useState("");
    const [secondBoxText, setSecondBoxText] = useState("");
    const [thirdBoxText, setThirdBoxText] = useState("");
    const [fourthBoxText, setFourthBoxText] = useState("");
    const [fifthBoxText, setFifthBoxText] = useState("");

    const fields = {
        FIRSTBOXTEXT: {
            value: firstBoxText,
            setter: setFirstBoxText
        },
        SECONDBOXTEXT: {
            value: secondBoxText,
            setter: setSecondBoxText
        },
        THIRDBOXTEXT: {
            value: thirdBoxText,
            setter: setThirdBoxText
        },
        FOURTHBOXTEXT: {
            value: fourthBoxText,
            setter: setFourthBoxText
        },
        FIFTHBOXTEXT: {
            value: fifthBoxText,
            setter: setFifthBoxText
        }
    };

    let inputs = [];

    if(boxes){
        for(let i = 0; i < boxes; i++){
            const name = getName(i);
            let input = <DefaultInput key={i} onChange={inputChangeHandler} name={name} placeholder={`Enter ${i + 1} box text`}
            value={fields[name.toUpperCase()].value}/>;
            inputs.push(input);
        }
    }

    function inputChangeHandler(e){
        fields[e.target.name.toUpperCase()].setter(e.target.value)
    }

    return(
        <MeniuContainer onSubmit={generateMeme}>
            <DefaultButton animate={!memeSet && true} type="button" onClick={showMemeSelectionClicked}> Select meme </DefaultButton>
            {inputs}
            <ErrorMessage error={error ? 1 : 0}>{error}</ErrorMessage>
            <DefaultButton animate={memeSet && true} type="submit"> Generate meme</DefaultButton>
        </MeniuContainer>
    );
};

export default Meniu;

Meniu.propTypes = {
    showMemeSelectionClicked: PropTypes.func.isRequired,
    generateMeme: PropTypes.func.isRequired,
    meme: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
}