import React, { useState } from 'react'
// rfce
// class jobban úgy néz ki, mint vanillaJS class, hook is vanillaJS, de class-t csak kb react nélkül is életre tudnánk kelteni, a hooks-t nem

function ButtonWithHooks() {
    // const []... és a 3 kövi const greetinggel ugyanazt csinálja
    // const [greeting, setGreeting] = useState("Hello2")
    const greetingUseState = useState("Hello2");
    const greeting = greetingUseState[0];
    const setGreeting = greetingUseState[1];

    const [title, setTitle] = useState("Main Title")

    return (
        <div>
            <h1>{title}</h1>
            <p>{greeting}</p>
            <button onClick={() => setGreeting("Bye2")}>Click Me</button>
            <button onClick={() => setTitle("Main Title 2")}>Click Me</button>
        </div>
    )
}

export default ButtonWithHooks
