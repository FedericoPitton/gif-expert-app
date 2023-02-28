
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rW7T838O8Wz4lz4hrR8zHc8DTl3UuUb0&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;

}