const list = document.getElementById('mail-list');

for (let i = 0; i < 10; i++) {
  axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
    console.log(resp.data.response);
    list.innerHTML += `<li>${resp.data.response}</li>`
  })
}

