export const ApiAdmin =  {
    loginAdmin: async (email, password) => {
        try {
            let result = await fetch(`http://localhost:9525/admins/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });
            
            const adminData = await result.json();
            console.log(adminData.token);
            return adminData;
        } catch (error) {
            console.log(error);
        }
    },

    UpDateAdmin: async (id, name, surName, email, phoneNumber, password) => {
        
        let data = {};
        if (name) {
            data.name = name;
        }
        if (surName) {
            data.surName = surName;
        }
        if (email) {
            data.email = email;
        }
        if (phoneNumber) {
            data.phoneNumber = phoneNumber;
        }
        if (password) {
            data.password = password;
        }

        let userUpDate;
        let url = `http://localhost:9525/admins/${id}`;
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
            body: JSON.stringify(data)
        })
        userUpDate = await result.json();
        console.log(userUpDate);
        return userUpDate;
    },
};
