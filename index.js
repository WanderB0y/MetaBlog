import fetch from 'node-fetch';

const fetchData = async (url) => {
    const response = await fetch('https://robohash.org/avb');
    return response.blob();
}

fetchData().then((e) =>{
    console.log(typeof e);
    const img = document.createElement('img');
    const imgURL = URL.createObjectURL(e);

    console.log(imgURL)

    img.setAttribute('src', 'imgURL')
    document.querySelector('header').append(img);
})

