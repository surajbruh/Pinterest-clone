const topics = document.querySelectorAll(".topics > li")

let topicFlag = 0;
topics.forEach((topic) => {
    topic.addEventListener('click', () => {
        topics.forEach(topic => { topic.classList.remove('underline') });
        topic.classList.add('underline');
    })
})


// const containerOverlay = document.getElementById('container-overlay');
// const searchOverlay = document.getElementById('search-overlay');
// const searchInput = document.getElementById("searchInput");

// searchInput.addEventListener('click', () => {
//     containerOverlay.style.display = 'block';
// })