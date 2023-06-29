export function Output({ uploadedFile }) {
  const removeComments = (file) => {
    let string = '';
    for (let i = 0; i < file.length; i++) {
      if (file.charAt(i) === '/' && file.charAt(i + 1) === '*') {
        i += 2;
        while (!(file.charAt(i) === '*' && file.charAt(i + 1) === '/') && i < file.length) {
          string += file.charAt(i);
          i++;
        }

        i += 2;
      } else if (file.charAt(i) === '/' && file.charAt(i + 1) === '/') {
        i += 2;
      } else {
        string += file.charAt(i);
      }
    }
    return string;
  };

  const fileWithoutComments = removeComments(uploadedFile);

  return <div>{fileWithoutComments}</div>;
}

// const removeComments = (file) =>{
//     let string = ''
//     for (let i = 0; i < file.length; i++) {

//         if(file.charAt(i) === '/' && file.charAt === '*'){
//             i += 2
//             while(!file.charAt(i) === '*'  &&  !file.charAt(i + 1) === '/'){

//             }
//         }

//     }

// }
