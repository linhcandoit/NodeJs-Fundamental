/*
Terminology
npm include resuable code. This resuable code is called package
package = module = dependencies
- Use this reusable code for my own project, not global
    => npm i <package name>
- Use this reusable code for the global, which can be access in any project
    => npm install -g <package name>

package.json: include information about the project we are working on
- to create it:
    npm init -y 
        => this will create the package.json automatically
the package we just installed can be use as an in-built module!

what does the file package.json do?
if we want to share our code to the github, we don't want to share the package we use
because it is too heavy. So, we share the package.json to the github, which inclue 
information about the package we use
When another one want to use our code, he/she clone it to his/her computer.
But, how can they dowload all the package we use to run the code
So simple! Just type in the command line: 
    npm install
        => it will automatic install all the package that our code use
*/

const lodash = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);
