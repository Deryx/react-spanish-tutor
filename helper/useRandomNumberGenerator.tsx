function randomNumberGenerator( arrLength, maxNumber ) {
    const randomNumbers: number[] = [];
    let index = 0;

    while( index < arrLength ) {
        let newNumber = Math.floor(( Math.random() * maxNumber ));
        if( randomNumbers.indexOf( newNumber ) === -1 ) {
            randomNumbers.push( newNumber );
            index++;
        }
    }

    return randomNumbers;
}

export default randomNumberGenerator;