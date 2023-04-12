import React from 'react';

interface GreeterProps {
    person: string
}

function Greeter({ person }: GreeterProps): JSX.Element {
    return <h1>suuuup {person}</h1>
}

export default Greeter;