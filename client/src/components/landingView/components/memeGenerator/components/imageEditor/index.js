import React, {useState, useEffect} from 'react';
import {
    ImageEditorContainer,
    SelectedImage,
} from './styles';
import PropTypes from 'prop-types';

const ImageEditor = ({meme}) => {
    const [width, setWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
        };
                
        window.addEventListener('resize', handleResize)
    
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        }
    })
    return(
        <ImageEditorContainer width={width}>
            <SelectedImage src={meme.url} alt={meme.name}/>
        </ImageEditorContainer>
    );
};

export default ImageEditor;

ImageEditor.propTypes = {
    meme: PropTypes.object.isRequired
}