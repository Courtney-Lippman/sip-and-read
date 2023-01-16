describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ", {
            method:"GET",
            fixture: "../fixtures/nytBookList.json"
        })
        cy.intercept("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic", {
            method:"GET",
            fixture:"../fixtures/singleCocktailIdOnly.json"

        })
        cy.visit('http://localhost:3000/')
    })

    it('displays a title, header, and nav bar', () => {
        cy.get('.logo-text').should('contain', 'Boozy Book Club')
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
        
        cy.get('.nyt-api-logo > img').should('be.visible')
        cy.get('.nyt-api-logo-wrapper > p').should('exist')
    })

     it('Should display all books from the pairingList when the home button is clicked from favorites page', () => {
        cy.get('#fav-button').click()
        cy.get('.favorites-page-title').should('be.visible')
        cy.get('.no-fav-message').should('be.visible')

        cy.get('#home-button').click()
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
    cy.get('.nyt-api-logo > img').should('be.visible')
    cy.get('.nyt-api-logo-wrapper > p').should('exist')

     })
    
    it('Should display book and drink details when a book card is clicked', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15395', {
            method:"GET",
            fixture: "../fixtures/cocktailDetails.json"
        })
          cy.get('.bookcard-wrapper > :nth-child(1)').click()
          cy.get('.details-page-title').should('contain', 'The Pairing')
          cy.get('.save-button').should('exist')
          cy.get('#fav-button').should('exist')
          cy.get('#home-button').should('exist')


          cy.get('.book-title-wrapper').should('exist')
          cy.get('.book-title-wrapper > .drink-book-title').should('contain', 'IT STARTS WITH US')
          cy.get('.author').should('contain', 'by Colleen Hoover')
          cy.get('.book-details-wrapper > .book-drink-img').should('have.attr', 'src', 'https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781668001226.jpg')
          cy.get('.book-text > :nth-child(1)').should('contain', "In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend." )
          cy.get('.book-text > :nth-child(2)').should('contain', 'Publisher: Atria')
          cy.get('[href="https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20"]').should('exist')

          cy.get('.drink-title-wrapper').should('exist')
          cy.get('.drink-title-wrapper > .drink-book-title').should('exist')
          cy.get('.ingredient-glass-instruction-wrapper > :nth-child(1)').should('exist')
          cy.get('.drink-details-wrapper > .book-drink-img').should('exist')

          cy.get('.nyt-api-logo > img').should('be.visible')
          cy.get('.nyt-api-logo-wrapper > p').should('exist')


    })

     it('Should display all books from the pairingList when the home button is clicked from details page', () => {
          cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15395', {
            method:"GET",
            fixture: "../fixtures/cocktailDetails.json"
        })
          cy.get('.bookcard-wrapper > :nth-child(1)').click()
          cy.get('.details-page-title').should('contain', 'The Pairing')
          cy.get('.save-button').should('exist')
          cy.get('.book-title-wrapper').should('exist')
          cy.get('.drink-title-wrapper').should('exist')

          cy.get('#home-button').click()

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
      cy.get('.nyt-api-logo > img').should('be.visible')
      cy.get('.nyt-api-logo-wrapper > p').should('exist')
     })


    it('Should show an error message when a user uses an incorrect url', () => {
        cy.visit('http://localhost:3000/bananas')


        cy.get('.page-not-found > :nth-child(1)').should('contain', '404')
        cy.get('.page-not-found > :nth-child(2)').should('contain', "Page Not Found.")
        cy.get('h2').should('contain', 'Ooops! The page you requested could not be found. Please go back to the home page.')
        cy.get('.nyt-api-logo > img').should('be.visible')
        cy.get('.nyt-api-logo-wrapper > p').should('exist')
        cy.get('.go-home-button').click()

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
    cy.get('.nyt-api-logo > img').should('be.visible')
    cy.get('.nyt-api-logo-wrapper > p').should('exist')
    })

 })

describe('Server-side error for NYT Book API', () => {
    beforeEach(() => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ', {
          method:"GET"}, {
            statusCode: 500,
          })
          cy.visit('http://localhost:3000/')
      })

    it('Should show response when there is a server error', () => {
        cy.get('.error').should('exist')
        cy.get('.error-icon').should('be.visible')
        cy.get('.oops').should('contain', 'Oops! Something went wrong!' )
        cy.get('.message').should('contain', 'Please try again later.')
    })
})

  describe('Server-side error for The CocktailsDB Alcohol Drink List API', () => {
    beforeEach(() => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic', {
          method:"GET"}, {
            statusCode: 500,
          })
          cy.visit('http://localhost:3000/')
      })

    it('Should show response when there is a server error', () => {
        cy.get('.error').should('exist')
        cy.get('.error-icon').should('be.visible')
        cy.get('.oops').should('contain', 'Oops! Something went wrong!' )
        cy.get('.message').should('contain', 'Please try again later.')
    })

})