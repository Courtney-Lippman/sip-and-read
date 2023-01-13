export const cleanBookListData = (data) => {
        const cleanBookList = [] 
        data.results.lists.forEach((list) => {
            list.books.forEach((book) => {
                if(!cleanBookList.find(cleanBook => cleanBook.title === book.title)) {
                    const {
                        amazon_product_url,
                        author,
                        book_image,
                        book_review_link,
                        buy_links,
                        description,
                        publisher,
                        title
                      } = book
                    //possible put a GET request for drink to pair with book here.... is this possible? I could then create a drink key that would house the drink information....
                    const cleanedBook = {
                        id: Date.now(),
                        amazonProductUrl: amazon_product_url,
                        author,
                        bookImg: book_image,
                        nytReviewLink: book_review_link,
                        buyLinks: buy_links,
                        description,
                        publisher,
                        title,

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

// export const cleanRandomDrinkData = (data) => {
//     const cleanRandomDrink = {
//         name: data.drinks[0].strDrink,
//         glass: strGlass,
//         instructions: strInstructions,
//         img: strDrinkThumb,
//         ingredient1: strIngredient1,
//         ingredient2: strIngredient2,
//         ingredient3: strIngredient3,
//         ingredient4: strIngredient4,
//         ingredient5: strIngredient5,
//         ingredient6: strIngredient6,
//         ingredient7: strIngredient7,
//         ingredient8: strIngredient8,
//         ingredient9: strIngredient9,
//         ingredient10: strIngredient10,
//         ingredient11: strIngredient11,
//         ingredient12: strIngredient12,
//         ingredient13: strIngredient13,
//         ingredient14: strIngredient14,
//         ingredient15: strIngredient15,
//         measure1: strMeasure1,
//         measure2: strMeasure1, 
//         measure3: strMeasure1,
//         measure4: strMeasure1,
//         measure5: strMeasure1,
//         measure6: strMeasure1,
//         measure7: strMeasure1,
//         measure8: strMeasure1,
//         measure9: strMeasure1,
//         measure10: strMeasure1,
//         measure11: strMeasure1,
//         measure12: strMeasure1,
//         measure13: strMeasure1,
//         measure14: strMeasure1,
//         measure15: strMeasure1
//     }
//     return cleanRandomDrink
// }