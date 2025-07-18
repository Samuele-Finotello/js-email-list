const list = document.getElementById('mail-list');

const generateMail = () => {
  for (let i = 0; i < 10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
      list.innerHTML += `<li class="list-group-item list-group-item-dark">${resp.data.response}</li>`
    })
  }
}

generateMail();

const button = document.getElementById('restart');

button.addEventListener('click', (event) => {
  event.preventDefault();

  list.innerHTML = '';
  generateMail();
})