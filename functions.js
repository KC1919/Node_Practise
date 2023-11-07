export const sayHello = (name) => {
    console.log(`Hello ${name}`);
}



const getTime = () => {
    console.log(`Current time: ${new Date().toLocaleTimeString()}`);
}

export default getTime;