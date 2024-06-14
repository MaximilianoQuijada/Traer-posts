/** Definimos función para resolver promesa desde API, utilizando async - await */
const getPosts = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    if (data !== null) {
   /** Definimos constante y mapeamos el resultado para poder retornar un elemento html */
    const postsInfo = data.map(i =>
      `<div>
        <ul>
         <li>
          <span> <strong>${i.title}</strong> </span></br>
          <span>  ${i.body} </span></br>
         </li>
        </ul>
      </div>`
      ).join('');
      /** insertamos la constante en archivo html*/
      document.querySelector('#post-data').innerHTML = postsInfo; 
    }
  } catch (error) {
    console.log(error)
  }
 };