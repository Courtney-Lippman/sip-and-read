import { BsTrash } from 'react-icons/bs'
describe('Details Page', () => {
    beforeEach(() => {
        cy.intercept("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ", {
            method:"GET",
            fixture: "../fixtures/nytBookList.json"
        })
        cy.intercept("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic", {
            method:"GET",
            fixture:"../fixtures/singleCocktailIDonly.json"

        })
        cy.intercept("https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15395", {
            method:"GET",
            fixture:"../fixtures/singleCocktailIDonly.json"

        })
        cy.visit('http://localhost:3000/')
        cy.get('.bookcard-wrapper > :nth-child(1)').click()
    })

    it('Displays a title, header, and nav bar', () => {
        cy.get('.logo-text').should('contain', 'Boozy Book Club')
        cy.get('[src="/static/media/cocktailGlass.c91f0dca180a715c8e85a16ef850851c.svg"]').should('be.visible')
        cy.get('[src="/static/media/bookStack.abb23c04aebd4cb27701881c6a8284ff.svg"]').should('be.visible')
        cy.get('#fav-button').should('be.visible')
        cy.get('#home-button').should('be.visible')
      })

    it('Displays NYT API logo and TheCocktailDB text', () => {
        cy.get('.nyt-api-logo > img').should('be.visible')
        cy.get('.nyt-api-logo-wrapper > p').should('exist')
    })

    it('Displays page title and Save Pairing button', () => {
        cy.get('.details-page-title').should('contain', 'The Pairing')
        cy.get('.save-button').should('be.visible')

    })

    it('Should display pairing is saved message if pairing is saved', () => {
        cy.get('.save-button').click()
        cy.get('.saved-message').should('contain', 'This pairing has been saved.')
    })

    it('Displays book details', () => {
        cy.get('.book-title-wrapper').should('be.visible')
        cy.get('.book-title-wrapper').should('exist')
        cy.get('.book-title-wrapper > .drink-book-title').should('contain', 'IT STARTS WITH US')
        cy.get('.author').should('contain', 'by Colleen Hoover')
        cy.get('.book-details-wrapper > .book-drink-img').should('have.attr', 'src', 'https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781668001226.jpg')
        cy.get('.book-text > :nth-child(1)').should('contain', "In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend." )
        cy.get('.book-text > :nth-child(2)').should('contain', 'Publisher: Atria')
        cy.get('[href="https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20"]').should('exist')

    })

    it('Displays drink details', () => {
        cy.get('.drink-title-wrapper').should('exist')
        cy.get('.drink-title-wrapper > .drink-book-title').should('contain', '1-900-FUK-MEUP')
        cy.get('.ingredient-glass-instruction-wrapper > :nth-child(1)').should('contain', 'Ingredients:')
        cy.get('.drink-details-wrapper > .book-drink-img').should('have.attr', 'src', 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uxywyw1468877224.jpg')
        cy.get('.ingredient-list > :nth-child(1)').should('contain', 'Absolut Kurant ~ 1/2 oz')
        cy.get('.ingredient-list > :nth-child(2)').should('contain', 'Grand Marnier ~ 1/4 oz')
        cy.get('.ingredient-list > :nth-child(3)').should('contain', 'Chambord raspberry liqueur ~ 1/4 oz')
        cy.get('.ingredient-list > :nth-child(4)').should('contain', 'Midori melon liqueur ~ 1/4 oz')
        cy.get('.ingredient-list > :nth-child(5)').should('contain', 'Malibu rum ~ 1/4 oz')
        cy.get('.ingredient-list > :nth-child(6)').should('contain', 'Amaretto ~ 1/4 oz')
        cy.get('.ingredient-list > :nth-child(7)').should('contain', 'Cranberry juice ~ 1/2 oz')
        cy.get('.ingredient-list > :nth-child(8)').should('contain', 'Pineapple juice ~ 1/4 oz')
        cy.get('.ingredient-glass-instruction-wrapper > :nth-child(3)').should('contain', 'Glass: Old-fashioned glass')
        cy.get('.ingredient-glass-instruction-wrapper > :nth-child(4)').should('contain', 'Instructions: Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.')
    })

    it("should allow user to save pairing and display the pairing on the favorites page", () => {
        cy.get('.save-button').click()
        cy.get('#fav-button').click()

        cy.get('.favorites-page-title').should('contain', 'The Favorites List')
        cy.get('.favorites-card-wrapper').should('exist')
        cy.get('div.fav-book-card').should('exist')
        cy.get('.fav-book-card > img').should('have.attr', 'src', 'https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781668001226.jpg')
        cy.get('.fav-drink-name').should('contain', '1-900-FUK-MEUP')
        cy.get('.trash').should('be.visible')
    })

    it('Details page should display when the book card is selected on the favorites page', () => {
        cy.get('.save-button').click()
        cy.get('#fav-button').click()
        cy.get('#fav-book-button').click()
        cy.get('.details-page').should('exist')

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

    // describe('Server-side error for TheCocktailsDB API GET by ID url', () => {
    //     beforeEach(() => {
    //         cy.intercept('', {
    //           method:"GET"}, {
    //             statusCode: 500,
    //           })
    //           cy.visit('http://localhost:3000/')
    //       })
    
    //     it('Should show response when there is a server error', () => {
    //         cy.get('.error').should('exist')
    //         cy.get('.error-icon').should('be.visible')
    //         cy.get('.oops').should('contain', 'Oops! Something went wrong!' )
    //         cy.get('.message').should('contain', 'Please try again later.')
    //     })
    // })



})