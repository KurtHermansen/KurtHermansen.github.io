const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let hero = document.createElement('div');
            let h3 = document.createElement('h3');
            let image = document.createElement('img');
            let motto = document.createElement('p');           
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');

            hero.setAttribute('class', 'card-hero');
            h3.textContent = towns[i].name;            
            image.setAttribute('src', '/Lesson9/images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name + ' image')
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain: ' + towns[i].averageRainfall;

            card.appendChild(hero);
            hero.appendChild(image);
            hero.appendChild(h3);     
            card.appendChild(motto);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rain);

            document.querySelector('div.cards').appendChild(card);}
    });