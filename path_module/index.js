const path = require('path');


/*This module provides path.sep which provides the path segment separator (\ on Windows, and / on Linux / macOS), and path.delimiter 
which provides the path delimiter (; on Windows, and : on Linux / macOS).*/



/* These are the path methods:
path.basename()
path.dirname()
path.extname()
path.format()
path.isAbsolute()
path.join()
path.normalize()
path.parse()
path.relative()
path.resolve()
*/



/*BASENAME*/
//Return the last portion of a path. A second parameter can filter out the file extension:
const basename1 = require('path').basename('/test/something'),//something
basename2 = require('path').basename('/test/something.txt'), //something.txt
basename3 = require('path').basename('/test/something.txt', '.txt') //something

console.log(basename1,basename2,basename3);

/*DIRNAME*/
//Return the directory part of a path:

const dirname1 = require('path').dirname('/test/something'),// /test
dirname2 = require('path').dirname('/test/something/file.txt'), // /test/something
dirname3 = require('path').dirname('/test/something'), // /test
dirname4 = require('path').dirname('/test/something/file.txt') // /test/something



console.log(dirname1,dirname2,dirname3,dirname4);

/*EXTNAME*/
//Return the extension part of a path
const extname1 = require('path').extname('/test/something'), // ''
extname2 = require('path').extname('/test/something/file.txt') // '.txt'


console.log("***",extname1,"****",extname2)


/*FORMAT*/
/*
Returns a path string from an object, This is the opposite of path.parse
path.format accepts an object as argument with the following keys:

    root: the root
    dir: the folder path starting from the root
    base: the file name + extension
    name: the file name
    ext: the file extension

root is ignored if dir is provided
ext and name are ignored if base exists*/ 



const format1 = require('path').format({ dir: '/Users/joe', base: 'test.txt' }), //  '/Users/joe/test.txt'

format2 = require('path').format({ root: '/Users/joe', name: 'test', ext: '.txt' }), //  '/Users/joe/test.txt'

// WINDOWS
format3 = require('path').format({ root: 'C:\\Users',dir:'\joe', base: 'test.txt' }) //  'C:\\Users\\joe\\test.txt'


console.log(format1,format2,format3);



/*IS ABSLOUTE */

//Returns true if it's an absolute path


const absloute_path1 = require('path').isAbsolute('/test/something'), // true
absloute_path2 = require('path').isAbsolute('./test/something') // false

console.log(absloute_path1,absloute_path2)


/*JOIN */
const name = 'joe'
const txt = require('path').join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'
console.log(txt);


/*NORMALIZE*/

//Tries to calculate the actual path when it contains relative specifiers like . or .., or double slashes:


const normalize =require('path').normalize('/users/joe/..//test.txt') //'/users/test.txt'

console.log(normalize)

/*PARSE*/
/*Parses a path to an object with the segments that compose it:

    root: the root
    dir: the folder path starting from the root
    base: the file name + extension
    name: the file name
    ext: the file extension
*/

const parse = require('path').parse('/users/test.txt')

console.log(parse)


/* RELATIVE */
//Accepts 2 paths as arguments. Returns the relative path from the first path to the second, based on the current working directory.


const rel1 =require('path').relative('/Users/joe', '/Users/joe/test.txt'),//'test.txt'
rel2 = require('path').relative('/Users/joe', '/Users/joe/something/test.txt') //'something/test.txt'
console.log(rel1,rel2)


/*RESOLVE*/
//You can get the absolute path calculation of a relative path using path.resolve():

const txt1 = require('path').resolve('joe.txt') //'/Users/joe/joe.txt' if run from my home folder

//By specifying a second parameter, resolve will use the first as a base for the second:



const txt2 =require('path').resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' if run from my home folder

//If the first parameter starts with a slash, that means it's an absolute path:



const txt3 =require('path').resolve('/etc', 'joe.txt') //'/etc/joe.txt'

console.log(txt1,txt2,txt3)

