export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6DOVtDs7qtGxJ3Msaxu3axY5KCnp0osB&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      img: img.images.downsized_medium.url,
    };
  });
  return gifs;
  //   setimages(gifs);
};
