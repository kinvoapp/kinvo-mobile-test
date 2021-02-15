export default function handleWords(word: string): string {
  const lastWord = word;
  const newWord = lastWord.split(' ').slice(0, 2).join(' ');

  return newWord;
}
