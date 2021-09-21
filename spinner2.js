//process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spin = ['|','/','-','\\','|','/','-','\\',];
function mySpinner(pos) {
  let delay = 0;
  for (let angle of pos) { 
    delay +=200;
      setTimeout(() => {
        process.stdout.write(`\r${angle}`);      
      },delay)    
    } 
}


mySpinner(spin)

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 200);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 700);