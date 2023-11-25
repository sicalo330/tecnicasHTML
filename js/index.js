const getElement = async () => {
  const data = await fetch('./data/indexElem.json');
  const elements = await data.json();
  let news = document.querySelector('#main');
  elements.forEach((element) => {
    news.innerHTML +=  `
    <a href="${element.link}" target="_blank"><h2 class="whi">${element.title}</h2></a>
    <aside class="aside">
    <img src="Imagenes/${element.image}.jpg" alt="Error Img" class="${element.clase}"><br>
        <div class="section">
            <article>
                <div>
                    <p class="descripcion">
                        ${element.descripcion}
                    </p>
                </div>
            </article>
        </div>
    </aside>
    <br>
    <hr>
    <br>
    `;
  });
}

getElement();