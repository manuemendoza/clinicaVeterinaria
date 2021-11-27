export const ApiConsumer = {

    loginUser: async (email, password) => {
        try {
            let result = await fetch(`http://localhost:9525/clients/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });
            
            const userData = await result.json();
            console.log(userData.token);
            return userData;
        } catch (error) {
            console.log(error);
        }
    },
    
    CreateUser: async (name, surName, email, telephone, password) => {
        try {
            let result = await fetch(`http://localhost:9525/clients`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "surName": surName,
                    "email": email,
                    "phoneNumber": telephone,
                    "password": password

                })
            })

            return await result.json()
        } catch (error) {

            console.log(error)
        }
    },
    CreatePet: async (name, animal, breed, gender, information, idUser) => {
        try {
            let result = await fetch(`http://localhost:9525/clients`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "animal": animal,
                    "breed": breed,
                    "gender": gender,
                    "information": information,
                    "idUser": idUser

                })
            })

            return await result.json()
        } catch (error) {

            console.log(error)
        }
    },

}