// create utlity function which can use the image inside assets folder

export const getImageUrl = (path) =>{
    return new URL(`/assets/${path}` , import.meta.url).href;
     
}