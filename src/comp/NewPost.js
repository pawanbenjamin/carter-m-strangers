    
    
    
    
    
    
    
    
    
// This is where I wanted to have my new post function part of my app. 
    
    
    
    function handleLocation(event) {
        setLocation(event.target.value);
    }

    function handleDeliever(event) {
        setDeliver(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch()
            method: "POST",
            headers: {
                `Content-Type`: `application/json`,
                `Authorization`: `Bearer TOKEN_STRING_HERE`
            },
            body: JSON.stringify ({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: willDeliver,
                }
            })
          }).then(response => response.json())
            .then(result => {
                console.log(result);
            })  
           .catch(console.error);
    }       