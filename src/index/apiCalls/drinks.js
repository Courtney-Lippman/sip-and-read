export const getRandomDrink = async () => {
    const url = ""
    const response  = await fetch(url)
    if(!response.ok) {
        throw response
    }
    return response.json()
}