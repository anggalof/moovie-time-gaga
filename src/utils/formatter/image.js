export const getImageUrl = (imageId, type) => {
	if (!imageId) {
		return process.env.PUBLIC_URL + '/img/image-not-found.png';
	}

  let imageURL = `https://image.tmdb.org/t/p/w92${imageId}`;
  if (type === 'original') {
    imageURL = `https://image.tmdb.org/t/p/original/${imageId}`;
  }
  return imageURL;
};
