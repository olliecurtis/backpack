(() => {
  const strings = process.argv[2]
  console.log(strings);
  console.log(typeof strings);
  process.exit(0)
})();
