const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "587ed1631b201177eefe4e7836f26cd9",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
