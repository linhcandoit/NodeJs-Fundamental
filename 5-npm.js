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
*/

const lodash = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);
