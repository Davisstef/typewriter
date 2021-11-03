const sentence = "hello there from lighthouse labs\n";

for (const char of sentence) {
  process.stdout.write(char);
  setTimeout(() => {

  }, 1000)
}