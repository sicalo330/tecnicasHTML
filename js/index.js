const noticiasElem = [
    {
      title:'Tetris',
      image:'bertie',
      descripcion:'Berti the Brain (Bertie el Cerebro) fue uno de los primeros juegos interactivos de ordenador de la historia. Fue construido en Toronto por Josef Kates para la Exposición Nacional Canadiense de 1950. El ordenador de cuatro metros de alto permitía a los asistentes jugar al juego tic-tac-toe (tres en raya) contra una inteligencia artificial.',
      link:'https://es.wikipedia.org/wiki/Bertie_the_Brain',
      clase:'imagen'
    },
    {
      title:'Tennis for two',
      image:'tennis-for-two',
      descripcion:'Tennis for Two es un videojuego de tenis desarrollado por William Higginbotham en 1958 usando para ello un osciloscopio del Laboratorio Nacional de Brookhaven a modo de monitor conectado a una computadora analógica siendo considerado el segundo Videojuego de la historia, después de OXO. El juego constaba de una línea horizontal que era el campo de juego y otra pequeña vertical en el centro del campo representando la red. Los jugadores debían elegir el ángulo en el que salía la bola y golpearla. ',
      link:'https://es.wikipedia.org/wiki/Bertie_the_Brain',
      clase:'imagen'
    },
    {
        title:'Josef Kates',
        image:'josef',
        descripcion:'¿Quién fue Josef Kates? El ingeniero canadiense Josef Kates creó en 1950 Bertie the Brain, un gigantesco ordenador que utilizaba válvulas de vacío y era <br> capaz de ejecutar el popular juego del tres en raya. ',
        link:'https://es.wikipedia.org/wiki/Bertie_the_Brain',
        clase:'creador'
    }
  ];
  let news = document.querySelector('#main');
  noticiasElem.forEach(element => {
    news.innerHTML +=  `
    <aside class="${ element.clase }">
    <img src="Imagenes/${ element.image }.jpg" alt="Error Img" class="bertie"><br>
        <div class="section">
            <article>
                <h2 class="whi">${ element.title }</h2>
                <div>
                    <p class="descripcion">
                        ${ element.descripcion }
                    </p>
                    <a href="${ element.link }" target="_blank" class="custom-button">Leer Mas...</a>
                </div>
            </article>
        </div>
    </aside>
    <br>
    <hr>
    <br>
    `;
  });