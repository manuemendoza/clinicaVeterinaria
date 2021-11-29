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
    logout: async (token) => {
        try {
            let result = await fetch(`http://localhost:9525/clients/logout`, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('token') 
                },
                body: JSON.stringify({
                    "token": token
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
                headers: { 
                    'Content-Type': 'application/json',
                },
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
            let result = await fetch(`http://localhost:9525/pet`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')  },
                body: JSON.stringify({
                    "name": name,
                    "kind": animal,
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
    UpDateUser: async (id, name, surName, email, telephone, password) => {
        let userUpDate;
        let url = `http://localhost:9525/clients/${id}`;
        const result = await fetch(url, {
            method: "PUT",
            headers: { "Authorization": "Bearer " + localStorage.getItem('token') },
            body: JSON.stringify({
                "name": name,
                "surName": surName,
                "email": email,
                "phoneNumber": telephone,
                "password": password

            })
        })
        userUpDate = await result.json();
        console.log(userUpDate);
        return userUpDate;
    },

}
