export function getName(index){
    switch(index){
        case 0:
            return "firstBoxText";
        case 1:
            return "secondBoxText";
        case 2:
            return "thirdBoxText";
        case 3:
            return "fourthBoxText";
        case 4:
            return "fifthBoxText";
        default:
            return ""
    }
}

export function getData(inputs, id, username, password){
    const boxes = {};
    //Adds properties with specific name, depending on index of input
    inputs.forEach((input, index) => {
        boxes[`boxes[${index}][text]]`] = input
    });

    const data = {
        template_id: id,
        username,
        password,
        ...boxes
    };

    //imgflip api does not accept json body so url is being used
    return Object.entries(data).reduce((initialValue, [key, value]) => (
            initialValue + encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&"
    ), "");
}
