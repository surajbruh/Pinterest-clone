async function main() {
    let a = await getData();
    // console.log(a);
    
    return parseData(a);
    
}

async function getData() {
    const data = await fetch(`http://192.168.0.108:3000/data/`);
    const info = await data.text();
    return info;
}

const parseData = (data) => {
    // let files = []
    let parseContainer = document.createElement('div');
    parseContainer.innerHTML = data;

    let aTagList = parseContainer.querySelectorAll('td>a');
    aTagList.forEach((e) => {
        let href = e.href;

        let fileName = href.split('/data/').pop();
        if (/\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(fileName)) {
            // files.push(fileName);
            let element = `<div class="img"><img src="data/${fileName}" alt=""></div>`
            // console.log(element)
            document.querySelector(`.content`).insertAdjacentHTML("afterbegin", element)
        }
    })

}

const addImages = async () => {
    let x = await main()
    return x;
}
addImages()