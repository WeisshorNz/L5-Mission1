// Function that counts the number of times the words in the keywords array repeat in the input (word)
export function countKeywords(word: string): number {
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  const wordArray = word.toLowerCase().split(/\s+/);

  let count = 0;
  for (const keyword of keywords) {
    count += wordArray.filter((w) => w.includes(keyword)).length;
  }

  // Limit the count to a maximum of 5 and a minumum of 1
  count = Math.max(1, Math.min(count, 5));

  return count;
}