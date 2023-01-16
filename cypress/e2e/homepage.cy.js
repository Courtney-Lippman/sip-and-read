describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept(url, {
            method:"GET",
            fixture: "../fixtures/nytBookList.json"
        })
        cy.intercept(url, {
            method:"GET",
            fixture:"../fixtures/cocktailsIDOnly.json"

        })
        cy.visit('http://localhost:3000/')
    })

    it('displays a title, header, and nav bar', () => {
        cy.get("#title").should('contain', 'Novel Sipper')
      })

})