function countSyllables(str) {
  let testString = str.toLowerCase();
  let stringLength = testString.length;
  console.log(stringLength);
  let syllableMax = stringLength;
  for (let index = 1; index < syllableMax; index++) {
    part = testString.substring(0, index + 1);
    count = testString.match(new RegExp(part, "g")).length;
    console.log(index);
    console.log(part);
    console.log(count);
    if ((count = stringLength / index)) {
      return count / 2;
    } else {
      return 1;
    }
  }
}
// start at 2 chars
// if that is in string length / 2 times stop

// 3 times if in string length \e

countSyllables("ADadadadADadadad");
// countSyllables("dede");

// function countSyllables(str) {
//     let testString = str.toLowerCase();
//     let syllableMax = testString.length / 2;
//     for (let index = 2; index < syllableMax; index++) {
//       part = testString.substring(0, index);
//       count = testString.match(new RegExp(part, "g")).length;
//       console.log(index);
//       console.log(part);
//       console.log(count);
//       if (count = testString.length / index) {
//         return count;
//       }
//     }
//   }
