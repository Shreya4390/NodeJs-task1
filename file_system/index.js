var fs = require("fs");
  
// Asynchronous read
fs.readFile('./input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(data)
   console.log("Asynchronous read: " + data.toString());
});


// Result 
// data will print buffer  Asynchronous read: hello team
// data.toString() convert buffer into string format  <Buffer 68 65 6c 6c 6f 20 74 65 61 6d>
// err will retuen error msg 
// { [Error: ENOENT: no such file or directory, open './input1.txt']
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: './input1.txt' }


// Synchronous read
var data = fs.readFileSync('./input.txt');
console.log("Synchronous read: " + data.toString());



// open file  to read data 


console.log("opening file!");
fs.open('./input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File open successfully","***",fd.toString());     
});


// open file read method using path , buffer size, file length
var buf = new Buffer(1024)
  
console.log("opening an existing file");
fs.open('./input.txt','r+',(err,data)=>{
    if(err){
        console.log(err);
        return err;
    }
    console.log("File read successfully!");
    fs.read(data,buf,0,buf.length,0 ,(error,bytes)=>{
      console.log(err,data);
      if(err){
          return err;
      }else{
          console.log("*****************",bytes);
          if(bytes>0){
              console.log(typeof buf,buf)
              console.log(buf.slice(0,bytes.toString()));
              const text = buf.slice(0,bytes.toString());
              console.log(text,text.toString())
          }
      }
    })

})

// write file
const file_data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut elit convallis, rutrum mauris at, posuere nibh. Nunc bibendum diam nec justo ultrices lobortis at sed risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi lacus dolor, ullamcorper id congue faucibus, sagittis non magna. Donec eros orci, maximus nec convallis vitae, porttitor et enim. Fusce a erat leo. Donec rhoncus sem sed ultricies rutrum. Phasellus vitae nunc ut ex pellentesque mollis id dignissim nibh. '

fs.writeFile('./input.txt', file_data,(err)=>{
    if (err) {
       return console.error(err);
    }else{
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    }
 });

 fs.readFile('./input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    const mergedata=data+'hello team';
    fs.writeFile('./input.txt', mergedata,(err)=>{
        if (err) {
           return console.error(err);
        }else{
        console.log("Data written successfully!");
        console.log("Let's read newly written data");
        }
     });
    
    console.log("Updated Data " + data.toString());
 });


 var append_data = "\n Next Paragraph. \n Maecenas rutrum neque a lacus tempor, quis posuere quam consequat. Sed ac ante cursus orci dapibus eleifend. Etiam tincidunt nibh quis tempor vehicula. Nam feugiat dolor vitae rhoncus ullamcorper. Nullam varius eros vitae tristique pharetra. Proin ultrices et libero et laoreet. Curabitur et quam mollis, tempor augue a, ultrices tortor. Vivamus vestibulum nisl nec leo viverra vulputate. Etiam dignissim, diam eget dictum ultricies, sem sem finibus tortor, nec volutpat nisi nulla sed elit. Integer turpis felis, ultrices vel tellus ut, pharetra sodales leo. Sed efficitur dui tristique sagittis bibendum. Pellentesque tincidunt quam vitae ipsum pellentesque posuere. Morbi sed porta nunc, eu semper ipsum. ";
 //Append method
 fs.appendFile('./input.txt',append_data, 'utf8',
  
    // Callback function
    function(err) { 
        if (err){
            throw err;
        }
        // If data
        console.log("Data is appended to file successfully.")
        console.log(append_data)
});



//For synchronously appending

// var fs = require('fs');
   
// var sync_data = "\nContinue learning";
   
// // Append data to file
// fs.appendFileSync('./input.txt', sync_data, 'utf8');
// console.log("Data is appended to file successfully thorough synchronously.")


//Close file

fs.close(1,(err,data)=>{console.log("err","**","data")});

fs.open('./index.txt',(err,data)=>{
    console.log(data)
});


fs.unlink('./index.txt',(err,unlinkfile)=>{
    console.log('File unlinked successfully.')
})




