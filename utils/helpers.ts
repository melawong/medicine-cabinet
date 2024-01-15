export const capitalize = (phrase: string): string => {
  if (!phrase) return "";
  const firstLetterUppercase = phrase.trim()[0].toUpperCase();
  const lowerCaseRemaining = phrase.trim().slice(1).toLowerCase();
  return firstLetterUppercase + lowerCaseRemaining;
};
