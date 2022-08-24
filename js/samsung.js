
const srchBtn = document.querySelector('#srch-btn');
const search = document.querySelector('.search');
const xBtn = document.querySelector('#x-btn');

srchBtn.addEventListener('click', e => {
    const select = this.target;
    search.classList.add('.on');
})



function selectbox(selectedLi) {
    list.forEach((li) => {
        li.classList.remove('on')
    })
    if (selectedLi) {
        selectedLi.classList.add('on')
    }
}

ul.addEventListener('click', e => {
    const selectedLi = e.target;
    console.log(selectedLi);
    selectbox(selectedLi);
})

