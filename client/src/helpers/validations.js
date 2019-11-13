export function validateInputs(inputs){
    const validatedInputs = inputs.filter(input => input.trim() !== "")
    return validatedInputs.length === inputs.length && inputs.length !== 0
}