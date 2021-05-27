function retrieveMajor(semver) {
  console.log(semver.split(".")[0]);
}

// function retrieveMinor(semver) {
//   return semver.split(".")[1].value;
// }

// function retrievePatch(semver) {
//   return semver.split(".")[2].value;
// }
retrieveMajor("1.2.4");
