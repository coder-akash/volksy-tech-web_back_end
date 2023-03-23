process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const a = process.stdin.read();
  if (a !== null) {
    process.stdout.write(`Your name is: ${a}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
