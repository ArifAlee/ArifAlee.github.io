
const starwars = async function(){
    try {
        const res = await axios.get("https://swapi.dev/api/people/1/")
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

starwars()