describe('Homepage', () => {
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

    it('displays a title, header, and nav bar', () => {
        cy.get('.logo-text').should('contain', 'Novel Sipper')
        cy.get('[src="/static/media/cocktailGlass.c91f0dca180a715c8e85a16ef850851c.svg"]').should('be.visible')
        cy.get('[src="/static/media/bookStack.abb23c04aebd4cb27701881c6a8284ff.svg"]').should('be.visible')
        cy.get('#fav-button').should('be.visible')
        cy.get('#home-button').should('be.visible')
      })

    it('displays the page title and all books from pairingList', () => {
        cy.get('.booklist-page-title').should('be.visible')
            .and('contain', 'The Book List')
        cy.get('.bookcard-wrapper > :nth-child(1)').within(()=> {
            cy.get('img').should('have.attr', 'src', "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781668001226.jpg")
        })
        cy.get(':nth-child(1) > .drink-name').should('exist')
        cy.get('.bookcard-wrapper > :nth-child(2)').within(()=> {
            cy.get('img').should('have.attr', 'src', "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780593237465.jpg")
        })
        cy.get(':nth-child(2) > .drink-name').should('exist')
        cy.get('.bookcard-wrapper > :nth-child(3)').within(()=> {
            cy.get('img').should('have.attr', 'src', "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780593083888.jpg")
        })
        cy.get(':nth-child(3) > .drink-name').should('exist')
    })

//     it('Should display all books from the pairingList when the home button is clicked from details page', () => {

//     })

//     it('Should display all books from the pairingList when the home button is clicked from favorites page', () => {

//     })

//     it('Should display details when a book card is clicked', () => {

//     })

//     it('Should show an error message when a user uses an incorrect url', () => {

//     })

 })

// describe('Server-side error', () => {
//     beforeEach(() => {

//     })

//     it('Should show response when there is a server error', () => {

//     })

//     it('Should close the modal when the dismiss button is clicked', () => {

//     })

//   })