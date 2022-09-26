const experiencias = document.getElementById("experiencias");

experiencias.insertAdjacentHTML(
  "beforeend",
  "<ul> <li id='exp1'> <h2 class='titulosh2'>PRINCIPIANTE EN PROGRAMACIÓN</h2> <p> Esta es una certificación expedida por Alura, en la cual aprendí sobre los fundamentos de la programación WEB, aprendiendo tecnologías como HTML, CSS, JavaScript. </p> <a href='https://www.youtube.com/' class='boton' target='_blank' >Mas informacion</a > </li> <li> <h2 class='titulosh2'> GIT Y GITHUB: CONTROLE Y COMPARTA SU CÓDIGO </h2> <p> Esta es una certificación expedida por Alura, en la cual pude aprender los conceptos básicos para usar Git y GitHub para el control de versiones de una aplicación o poder trabajar de manera más fácil con distintos colaboradores. </p> <a href='https://www.youtube.com/' class='boton' target='_blank' >Mas informacion</a > </li> <li> <h2 class='titulosh2'> APRENDER A TRABAJAR EN UN ENTORNO LABORAL </h2> <p> Me gustaría poder aplicar mis conocimientos en un ambiente laborar real para así mejorar los aspectos en los cuales no este muy bien, adquirir nuevos conocimientos y desenvolverme de mejor manera. </p> <a href='https://www.youtube.com/' class='boton' target='_blank' >Mas informacion</a > </li> </ul>");

  const habilidades = document.getElementById("habilidades");

  habilidades.insertAdjacentHTML(
    "beforeend",
    "<div id='centarTabla'> <table class='tabla'> <thead> <th>Tecnologia</th> <th>Valor</th> </thead> <tr> <td>HTML</td> <td>9</td> </tr> <tr> <td>CSS</td> <td>7</td> </tr> <tr> <td>Js</td> <td>6</td> </tr> <tr> <td>Java</td> <td>6</td> </tr> </table> </div>"
  );

