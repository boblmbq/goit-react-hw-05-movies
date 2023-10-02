export function maxSymbols(text) {
  const maxWordsAmount = 30;
  const textWordsAmount = text.split(' ');

  if (textWordsAmount.length > maxWordsAmount) {
    const slicedText = textWordsAmount.slice(0, maxWordsAmount);
    return `${slicedText.join(' ')}...`;
  }
  return text;
}
