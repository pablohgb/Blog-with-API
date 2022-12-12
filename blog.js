const listaBlog = document.querySelector('#lista-productos');

fetch('db.json')
    .then(Response => Response.json())
    .then(data => {
        data.forEach(producto => {
            const li = document.createElement('li');
            li.innerText = producto.title + 'hello' + producto.body;
            listaBlog.append(li);
        });
    })