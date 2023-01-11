export const getBookList = async () => {
    const url = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ"
    // will need to filter out any repeated books
    const response  = await fetch(url)
    if(!response.ok) {
        throw response
    }
    return response.json()
}