const countriySearch = () => {
    const inputField = document.getElementById('input_field');
    const inputText = inputField.value;
    inputField.value = '';


    fetch(`https://restcountries.eu/rest/v2/${inputText}`)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries_container');
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="h-100">
                <img src="${country.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${country.name} </h5>
                </div>
                <div class="card-footer text-center">
                    <button onclick="loadDetail('${country.alpha2Code}')" class="btn btn-transform fw-bold"> Learn More </butotn>
                </div>
            </div>
        `;
        countriesContainer.appendChild(div);
    })
}

const loadDetail = alphaCode => {
    const url = `https://restcountries.eu/rest/v2/alpha/${alphaCode}`
    fetch(url)
    .then(res => res.json())
    .then(data => DisplayDetail(data))
}

const DisplayDetail = country => {
    const singleContainer = document.getElementById('single_container');
    singleContainer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card-header bg-transparent border-success text-center"> coun ${country.name} </div>
    <div class="card-body text-success">
    <img src="${country.flag}" class="card-img-top" alt="...">
    </div>
    <div class="card-footer bg-transparent border-success text-center">
        <p> Capital: ${country.capital} </P>
        <p> Population: ${country.population} </P>
    </div>
    `;
    singleContainer.appendChild(div);
    window.scroll(0, 40);
}