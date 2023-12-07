
const arr = [];

const fetchData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            arr.push(5),
            document.querySelector('#article--image').setAttribute('src','https://images.wsj.net/im-896114/social')
         }, 5000);
})}


fetchData().then((e) => {
    console.log(e)
})


