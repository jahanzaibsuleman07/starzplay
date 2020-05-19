export const getTredingImage = () => {
    return fetch("http://localhost:7000/")
      .then(respose => respose.text())
      .then(
        result => {
          return result;
        },
        error => {
          console.log("Error: ", error);
        }
      );
}
