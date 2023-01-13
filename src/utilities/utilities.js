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

export const cleanRandomDrinkData = (data) => {
    const { strDrink, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15 } = data.drinks[0]
    const cleanRandomDrink = {
        name: strDrink,
        glass: strGlass,
        instructions: strInstructions,
        img: strDrinkThumb,
        ingredient1: strIngredient1,
        ingredient2: strIngredient2,
        ingredient3: strIngredient3,
        ingredient4: strIngredient4,
        ingredient5: strIngredient5,
        ingredient6: strIngredient6,
        ingredient7: strIngredient7,
        ingredient8: strIngredient8,
        ingredient9: strIngredient9,
        ingredient10: strIngredient10,
        ingredient11: strIngredient11,
        ingredient12: strIngredient12,
        ingredient13: strIngredient13,
        ingredient14: strIngredient14,
        ingredient15: strIngredient15,
        measure1: strMeasure1,
        measure2: strMeasure2, 
        measure3: strMeasure3,
        measure4: strMeasure4,
        measure5: strMeasure5,
        measure6: strMeasure6,
        measure7: strMeasure7,
        measure8: strMeasure8,
        measure9: strMeasure9,
        measure10: strMeasure10,
        measure11: strMeasure11,
        measure12: strMeasure12,
        measure13: strMeasure13,
        measure14: strMeasure14,
        measure15: strMeasure15
    }
    return cleanRandomDrink
}