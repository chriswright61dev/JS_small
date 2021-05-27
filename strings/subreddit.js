// subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

// subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"

// subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"

function subReddit(link) {
  console.log(link.indexOf("/r/"));
  console.log(link.indexOf('/")'));

  //   console.log(link.substring(link.indexOf("/r/"), -2));
  console.log(link.substring(link.indexOf("/r/") + 3, link.length - 1));
}

console.log(subReddit("https://www.reddit.com/r/funny/"));
