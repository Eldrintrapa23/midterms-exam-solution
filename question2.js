function  delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}`)
    }, 2000);
}

//Example
delayedGreeting("Alice");