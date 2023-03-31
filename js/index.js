const block = document.querySelector('.block');




fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => data.map((countries) => {

    const box = document.createElement('div');
    box.classList.add('box');
    block.appendChild(box);

    const img = document.createElement('img');
    img.src = `${countries.flags.png}`
    img.alt = `"${countries.flags.alt}"`

    box.appendChild(img)



    const name = document.createElement('h1');

    name.textContent = countries.name.common;

    box.appendChild(name)


    const capital = document.createElement('h2');
    capital.textContent = `Capital: ${countries.capital}`;
    box.appendChild(capital);


    const population = document.createElement('h2');

    population.textContent = `Papulation: ${countries.population}`;

    box.appendChild(population);



    const test = String(countries.population);


    switch (test.length) {
        case 4:

            population.textContent = `Population: ${test.slice(0,1)}k`;

            break;

        case 5:
            population.textContent = `Population: ${test.slice(0,2)}k`;
            break;


        case 6:
            population.textContent = `Population: ${test.slice(0,3)}k`;
            break;



        case 7:
            population.textContent = `Population: ${test.slice(0,1)}mln`;
            break;

        case 8:
            population.textContent = `Population: ${test.slice(0,2)}mln`;
            break;

        case 9:
            population.textContent = `Population: ${test.slice(0,3)}mln`;
            break;

        case 10:
            population.textContent = `Population: ${test.slice(0,2).split('')}mlrd`;

            break;

        case 11:
            population.textContent = `Population: ${test.slice(0,2)}mlrd`;
            break;



        default:
            population.textContent = `Population: ${test}`;
            break;
    }



    const maps = document.createElement('a');
    maps.href = `${countries.maps.googleMaps}`;
    maps.textContent = 'maps';
    maps.target = '_blank';
    maps.style.color = 'black';
    maps.style.textDecoration = 'none';

    box.appendChild(maps);


}))