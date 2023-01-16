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
        cy.get('.bookcard-wrapper > :nth-child(1)').click()
    })

    it('displays a title, header, and nav bar', () => {
        cy.get('.logo-text').should('contain', 'Boozy Book Club')
        cy.get('[src="/static/media/cocktailGlass.c91f0dca180a715c8e85a16ef850851c.svg"]').should('be.visible')
        cy.get('[src="/static/media/bookStack.abb23c04aebd4cb27701881c6a8284ff.svg"]').should('be.visible')
        cy.get('#fav-button').should('be.visible')
        cy.get('#home-button').should('be.visible')
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