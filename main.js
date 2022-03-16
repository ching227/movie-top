document.addEventListener('DOMContentLoaded',() => {
  fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    myJson.forEach(movie => {
      
      const tbody = document.querySelector('tbody')
      tbody.innerHTML += `
        <tr>
            <td> ${movie.rank} </td>
            <td><a href="${movie.link}"> ${movie.title} </a></td>
            <td> ${movie.year} </td>
            <td> ${movie.director} </td>
            <td> ${movie.main_stars} </td>
            <td> ${movie.rating} </td>
          </tr>
      `
    });
    
  })
})
