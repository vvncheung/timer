const args = process.argv;
let newArray = args.slice(2);


// note: timer will return a . instead of system sound
const timer = function (newArray) {
  let seconds = 0;
  for (let element of newArray) {
    if (element === ""  || element < 0 || element === isNaN) {
      break;
    } else {
      setTimeout(() => {
        process.stdout.write('.');
      }, (element *= 1000));
    }
    seconds = element;
  }
  setTimeout(() => {
    console.log("");
  }, seconds);
};

timer(newArray);