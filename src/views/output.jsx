export function Output({ uploadedFile }) {
  const removeComments = (file) => {
    let string = '';
    let i = 0;
    let nestedLevel = 0;

    while (i < file.length) {
      if (file.charAt(i) === '/' && file.charAt(i + 1) === '*') {
        // If nested is 0, start counting the levels
        if (nestedLevel === 0) {
          nestedLevel = 1;
        } else {
          nestedLevel++;
        }
        i += 2;
      } else if (file.charAt(i) === '*' && file.charAt(i + 1) === '/') {
        // if its level 1 , meaning there's no more to check and it moves on
        if (nestedLevel === 1) {
          nestedLevel = 0;
          i += 2;
        } else if (nestedLevel > 1) {
          nestedLevel--;
          i += 2;
        } else {
          string += file.charAt(i);
          i++;
        }
      } else if (file.charAt(i) === '/' && file.charAt(i + 1) === '/') {
        if (nestedLevel === 0) {
          i += 2;
          continue;
        } else {
          string += file.charAt(i);
          i++;
        }
      } else {
        string += file.charAt(i);
        i++;
      }
    }

    return string;
  };

  const stringWithoutComments = removeComments(uploadedFile);

  return <div>{stringWithoutComments}</div>;
}
