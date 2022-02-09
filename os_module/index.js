//The OS module provides information about the computer's operating system.

var os = require('os');



//1. arch() 	Returns the operating system CPU architecture
//2. userInfo() 	Returns information about the current user.
//3. cpus() 	Returns an array containing information about the computer's CPUs
//4. endianness() 	Return BE or LE depending if Node.js was compiled with Big Endian or Little Endian.
//5. EOL 	Returns the end-of-line marker for the current operating system
//6. freemem() 	Returns the number of free memory of the system
//7. hostname() 	Returns the hostname of the operating system
//8. loadavg() 	Returns an array containing the load averages, (1, 5, and 15 minutes)
//9. networkInterfaces() 	Returns the network interfaces that has a network address
//10. platform() 	Returns information about the operating system's platform
//11. release() 	Returns information about the operating system's release
//12. tmpdir() 	Returns the operating system's default directory for temporary files
//13. totalmem() 	Returns the number of total memory of the system
//14. type() 	Returns the name of the operating system
//15. uptime() 	Returns the uptime of the operating system, in seconds



//total and freememory
const totalmemory = os.totalmem(),freememory = os.freemem();

console.log(totalmemory,freememory);


//computer architecture

const arch = os.arch();

console.log(arch)

// user information

const user_info = os.userInfo();

console.log(user_info)


// cpu information

const cpus = os.cpus();

console.log(cpus);

// Return BE or LE depending if Node.js was compiled with Big Endian or Little Endian.
const endianness = os.endianness();

console.log(endianness)

//load average (1, 5, and 15 minutes)

const loadavg = os.loadavg();

console.log(loadavg);


//network address 
const networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces);

//information about operating system

const platform = os.platform();

console.log(platform)


//operating system release 

const release = os.release();

console.log(release);


// default directory for temprory file 

const tmpdir = os.tmpdir();

console.log(tmpdir)

// return the name of os 

const type = os.type();

console.log(type)

// up time of operating system  in seconds

const uptime = os.uptime();

console.log(uptime)