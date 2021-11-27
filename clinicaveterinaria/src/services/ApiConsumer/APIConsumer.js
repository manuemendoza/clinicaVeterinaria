export const ApiConsumer = {

    loginUser: async (email, password) => {
        try {
            let result = await fetch(`http://localhost:9525/users/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            
            const token = await result.json();
            console.log(token);
            return token 
        } catch (error) {
            console.log(error)
        }
    },
    
    CreateUser: async (name, surname, email, telephone, password) => {
        try {
            let result = await fetch(`http://localhost:9525/users`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "surname": surname,
                    "email": email,
                    "telephone": telephone,
                    "password": password

                })
            })

            return await result.json()
        } catch (error) {

            console.log(error)
        }
    },

}