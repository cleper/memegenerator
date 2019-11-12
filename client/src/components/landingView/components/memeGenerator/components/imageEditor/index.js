import React from 'react';
import {
    ImageEditorContainer,
    SelectedImage
} from './styles';
import PropTypes from 'prop-types';

const ImageEditor = ({meme}) => {

    return(
        <ImageEditorContainer>
            <SelectedImage src={meme.url} alt={meme.name}/>
        </ImageEditorContainer>
    );
};

export default ImageEditor;

ImageEditor.propTypes = {
    meme: PropTypes.object.isRequired
}