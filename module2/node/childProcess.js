let cp =  require('child_process');
//  console.log(cp);

//open calculator with the help of this file

// for windows replace gnome-calculator with calc
// cp.execFileSync("calc");

let content = cp.execSync('node test.js');

console.log('output of test.js file is  '+content);
