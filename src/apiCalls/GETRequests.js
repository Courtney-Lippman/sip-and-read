export const getData = async (url) => {
    try {
        const response = await fetch (url)
        return response.json()
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

export const getDrinkDetails = async (id) => {
    try {
        const response = await fetch (`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
        return response.json()
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}