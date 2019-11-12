import React, { useState, useEffect } from 'react';
import { Meme, MemeList } from './styles';
import PropTypes from 'prop-types';

const MemeSelection = ({memes, loadingContainer, setMeme}) => {
    const [loading, setLoading] = useState(memes.map(meme => false));
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setLoading(memes.map(meme => true));
    }, [memes]);

    function handleLoad(index){
        const newArray = loading.slice();
        if(newArray[index] !== false){
            newArray[index] = false;
            setLoading(newArray);
        }
        if(newArray.filter(element => !element).length === loading.length){
            setDisplay(true);
        }
    }

    return(
        <MemeList display={display ? 1 : 0}>
            {
              memes.map((meme, index) => <Meme onLoad={handleLoad.bind(null, index)} onClick={setMeme.bind(null, meme)} key={meme.id} src={meme.url}/>)
            }
        </MemeList>
    );
}

export default MemeSelection;

MemeSelection.propTypes = {
    memes: PropTypes.array.isRequired
}