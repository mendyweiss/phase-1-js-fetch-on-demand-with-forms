const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e);
      eve = e.target['0'].value;

      fetch(`http://localhost:3000/movies/${eve}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
  })
}
let eve;
document.addEventListener('DOMContentLoaded', init);