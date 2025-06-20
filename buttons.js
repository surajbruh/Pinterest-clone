const topics = document.querySelectorAll(".topics > li")

let topicFlag = 0;
topics.forEach((topic) => {
    topic.addEventListener('click', () => {
        topics.forEach(topic => { topic.classList.remove('underline') });
        topic.classList.add('underline');
    })
})

const mobIcons = document.querySelectorAll('.mobIcon');

if (!(mobHome.hasAttribute('home'))) {
    mobHome.classList.add('contrast')
}

mobIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        mobIcons.forEach(i => i.classList.remove('contrast'));
        icon.classList.add('contrast');
    })
})

const iconCons = document.querySelectorAll(`.icon`)
const homeIcon = document.getElementById(`home`)

if (!(homeIcon.hasAttribute('home'))) {
    homeIcon.classList.add('contrast')
}

iconCons.forEach((icon) => {
    icon.addEventListener('click', () => {
        iconCons.forEach(i => i.classList.remove('contrast'));
        icon.classList.add('contrast');
    })
})

const mainContainer = document.querySelector('.main');
const topicBar = document.querySelector('.topic-bar');

let lastScrollTop = 0;
let ticking = false;

mainContainer.addEventListener('scroll', function () {
  const scrollTop = this.scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      const delta = scrollTop - lastScrollTop;

      if (Math.abs(delta) > 10) {
        if (delta > 0) {
          topicBar.style.transform = 'translateY(-100%)';
        } else {
          topicBar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      }

      ticking = false;
    });

    ticking = true;
  }
});
