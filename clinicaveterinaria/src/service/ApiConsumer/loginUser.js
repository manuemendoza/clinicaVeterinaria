export const loginUser = {
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
        //@manuemendoza tenemos que mejorar esto porfavor es una caca
        console.log(error)
    }
    }
}