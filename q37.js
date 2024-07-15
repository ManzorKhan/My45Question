//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size, message) {
    console.log("you heve ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\""));
}
// calling the function
make_shirt2("large", "I love Typescript");
// create a medium shirt with the default message
make_shirt2("medium", "I love Typescript");
// create a shirt of any size with a different message
make_shirt2("small", 'keep calm and code on!');
