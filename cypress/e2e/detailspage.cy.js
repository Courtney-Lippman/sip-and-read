describe('Details Page', () => {
    beforeEach(() => {
        cy.intercept("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ", {
            method:"GET",
            fixture: "../fixtures/nytBookList.json"
        })
        cy.intercept("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic", {
            method:"GET",
            fixture:"../fixtures/cocktailsIDOnly.json"

        })
        cy.visit('http://localhost:3000/')
    })

    it('', () => {

    })

    it('', () => {

    })

    it('', () => {

    })

    it('', () => {

    })

    it('', () => {

    })

    it('', () => {

    })

})