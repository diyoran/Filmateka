console.clear();

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-js");

    const msg = form.querySelector("#message-js");

    const inputTitle = form.querySelector("#input-title-js");

    const inputGenre = form.querySelector("#input-genre-js");

    const inputYear = form.querySelector("#input-year-js");

    const btn = form.querySelector("#add-js");

    const container = document.querySelector("#film-js");

    const CheckInputs = () => {
        if (
            inputTitle.value !== "" &&
            inputGenre.value !== "" &&
            inputYear.value !== ""
        ) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }

    CheckInputs();

    const inputValid = (input, label) => {

        if (
            input?.value === ""
        ) {
            msg.classList.add("error");
            msg.textContent = `${label} не должно быть пустым!`
        } else {
            msg.classList.remove("error");
            msg.textContent = "";
        }
    }

    [inputGenre, inputTitle, inputYear].forEach((input) => {
        inputValid(input, `Поле`)
    })

    const film = {
        title: null,
        genre: undefined,
        year: "0000"
    }

    inputTitle.addEventListener("input", () => {
        CheckInputs();
        inputValid(inputTitle, `название фильма`);
        film.title = inputTitle.value
    })

    inputGenre.addEventListener("input", () => {
        CheckInputs();
        inputValid(inputGenre, `жанр фильма`);
        film.genre = inputGenre.value
    })

    inputYear.addEventListener("input", () => {
        CheckInputs();
        inputValid(inputYear, `год фильма`);
        film.year = inputYear.value
    });

    btn.addEventListener("click", () => {
        CheckInputs();

        container.insertAdjacentHTML("beforeend", `
     <div class="card mb-20">
        <h4 class="title-4">${film.title}</h4>
        <div class="badge">${film.genre}</div>
        <div class="badge">${film.year}</div>
     </div>
     `);

     inputTitle.value = ""
     inputGenre.value = ""
     inputYear.value = ""


    })

});