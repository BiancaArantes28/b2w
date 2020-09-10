export const getHelloWorldHello = (state) => state.helloWorld.hello;
export const getHelloWorld = (state) => getHelloWorldHello(state).text;
export const getStatusHelloWorld = (state) => getHelloWorldHello(state).status;
