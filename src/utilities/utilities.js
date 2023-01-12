export const cleanBookListData = (data) => {
        const cleanBookList = [] 
        data.results.lists.forEach((list) => {
            list.books.forEach((book) => {
                if(!cleanBookList.find(cleanBook => cleanBook.title === book.title)) {
                    //possible put a GET request for drink to pair with book here.... is this possible? I could then create a drink key that would house the drink information....
                    const cleanedBook = {
                        id: Date.now(),
                        amazonProductUrl: book.amazon_product_url,
                        author: book.author,
                        bookImg: book.book_image,
                        nytReviewLink: book.book_review_link,
                        buyLinks: book.buy_links,
                        description: book.description,
                        publisher: book.publisher,
                        title: book.title
                        //drink: {all drink info here}
                    }
                    cleanBookList.push(cleanedBook)
                }
            })
        })
        return cleanBookList
}

export const cleanDrinkListData = (data) => {
    const cleanDrinkList = data.drinks.map( drink => {
        return {
            name: drink.strDrink,
            id: drink.idDrink
        }
    })
    return cleanDrinkList
}