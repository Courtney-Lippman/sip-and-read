export const getData = async (url) => {
    try {
    const response = await fetch (url)
    return response.json()
} catch (error) {
    console.error(error)
    throw new Error(`error in getData`)
}
}