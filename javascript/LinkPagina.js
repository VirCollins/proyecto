fetch('http://localhost:3000/ProyectoMarvelD')
                        .then(function(response) {
                            if (response.ok) {
                                return response.json();
                            }
                            throw new Error('La respuesta no fue satisfactoria');
                        })
                        .then(data => {
                            console.log(data);

                          
                            const page = data.page;
                            const limit = data.limit;

                           
                            let linkPaginado = document.createElement('a');
                            linkPaginado.href = '/paginado.html?page=' + page + '&limit=' + limit;
                            linkPaginado.textContent = 'Paginado'; 
                            linkPaginado.classList.add('miclase');
                            document.body.appendChild(linkPaginado);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });