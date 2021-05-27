function getExtension(arr) {
  //   arr string.indexOf('.')
  //   console.log(arr[0].indexOf("."));
  //   console.log(arr[0].substring(4));
  //   console.log(arr[0].substring(arr[0].indexOf(".")));
  // arr[1]
  //   const map1 = arr.map(x => x.substring(x.indexOf(".")));
  return (map1 = arr.map(x => x.substring(x.indexOf(".") + 1)));
  //   return arr.map(x => x.split('.')[1])
}

getExtension(["code.html", "code.css"]);
//➞ ["html", "css"]

//getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
//➞ ["jpg", "pdf", "mp3"]

//getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
//➞ ["rb", "cpp", "py", "js"]
