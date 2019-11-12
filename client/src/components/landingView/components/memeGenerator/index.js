import React, { useState } from 'react';
import {
    MemeGeneratorContainer
} from './styles';
import Meniu from './components/Meniu/index';
import ImageEditor from './components/imageEditor/index';
import PropTypes from 'prop-types';
import { validateInputs } from '../../../../helpers/validations';
import { getData } from '../../../../helpers/handleInputs';

const POST_MEMES_API = "https://api.imgflip.com/caption_image";

const MemeGenerator = ({showMemeSelectionClicked, currentMeme, setCurrentMeme}) => {

    const [error, setError] = useState("");

    function generateMeme(e){
        e.preventDefault();
        const inputs = [...e.target.elements].filter(element => element.tagName === "INPUT").map(input => input.value);
        if(validateInputs(inputs))
        {
            fetch(POST_MEMES_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: getData(inputs, currentMeme.id, process.env.REACT_APP_IMGFLIP_USERNAME, process.env.REACT_APP_IMGFLIP_PASSWORD),
              })
            .then(response => response.json())
            .then(res => {
                if(res.success){
                    setError("");
                    setCurrentMeme({
                        ...currentMeme,
                        url: res.data.url
                    })
                }
                else{
                    setError(res["error_message"])
                }
            });
        }
        else if(Object.entries(currentMeme).length > 0){
            setError("All inputs must contain text!")
        }
    }

    return(
        <MemeGeneratorContainer>
            <ImageEditor meme={currentMeme}/>
            <Meniu meme={currentMeme} showMemeSelectionClicked={showMemeSelectionClicked} generateMeme={generateMeme} error={error}/>
        </MemeGeneratorContainer>
    );
};

export default MemeGenerator;

MemeGenerator.propTypes = {
    showMemeSelectionClicked: PropTypes.func.isRequired,
    currentMeme: PropTypes.object.isRequired,
    setCurrentMeme: PropTypes.func.isRequired
}
