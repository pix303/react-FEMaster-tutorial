import React from 'react';

type Pet = {
    name: string;
    breed: string;
    age: number;
}

const PetComponent = (props: Pet) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.breed} - {props.age}</h2>
        </div>
    )
}


export default PetComponent