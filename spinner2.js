const spinnerElem = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r\n",
];

let delay = 100;
for (const elem of spinnerElem) {
  setTimeout(() => {
    process.stdout.write(elem);
  }, delay);
  delay += 200;
}
