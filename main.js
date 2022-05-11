axios.get('http://localhost:3000/addressbook')
    .then(res => 
        document.getElementById('addressbook').innerHTML = JSON.stringify(res.data)
    );




document.getElementById('send').addEventListener('click', () => {

    axios.post('http://localhost:3000/addressbook', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    },
    {
        headers:{
            'content-type':'application/json'
        }
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });


});