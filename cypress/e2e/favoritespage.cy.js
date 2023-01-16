describe('Top 100', () => {
    beforeEach(() => {
        cy.intercept("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ", {
            method:"GET",
            fixture: "../fixtures/nytBookList.json"
        })
        cy.intercept("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic", {
            method:"GET",
            fixture:"../fixtures/singleCocktailIdOnly.json"

        })
        cy.intercept("https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15395", {
            method:"GET",
            fixture:"../fixtures/cocktailDetails.json"

        })
        cy.visit('http://localhost:3000/')
        cy.get('.bookcard-wrapper > :nth-child(1)').click()
        cy.get('.save-button').click()
        cy.get('#fav-button').click()


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

    it('Displays page title and favorited book cards', () => {
        cy.get('.favorites-page-title').should('contain', 'The Favorites List')
        cy.get('div.fav-book-card').should('be.visible')
        cy.get('#fav-book-button').should('be.visible')
        cy.get('#fav-book-button > img').should('have.attr', 'src', "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781668001226.jpg")
        cy.get('.fav-drink-name').should('contain', '1-900-FUK-MEUP')
        cy.get('.trash').should('be.visible')
    })

    it('Should be able to click the trash button for a specific favorited book card and that book card will be removed from the favorites list', () => {
        cy.get('.trash').click()
        cy.get('.no-fav-message').should('be.visible')

    })

    it('Displays a message when no favorites exist', () => {
        cy.get('.trash').click()
        cy.get('.no-fav-message').should('contain', "You currently have no favorite pairings." )
    })

    it('Displays book and drink details when favorite book card is clicked on favorites page', () => {
        cy.get('#fav-book-button').click()
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
    })

    it('Should go to home page from favorites page when the home button is clicked on the home page and then go to favorites page with favorites page button is clicked on home page', () => {
            cy.get('#home-button').click()
            cy.get('.booklist').should('be.visible')
            cy.get('#fav-button').click()
            cy.get('.favorites').should('be.visible')
    })
 
})