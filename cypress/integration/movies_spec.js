import moviesTestData from './movies_test_data';

describe('Movies homepage flow', () => {
    it('Should be able to visit the page and render the correct elements', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', moviesTestData)
        cy.visit('http://localhost:3000')
            .contains('Rancid Tomatillos')
            .get('h2')
                .contains('The second most trusted measurer of movie quality!')
            .get('div')
                .should('have.class', 'movies-container')
            .get('img')
                .should('be.visible')
            .get('p')
                .should('be.visible')
            .get('img[id=718444]').click()
                .url()
                    .should('include', '/718444')
    })
})



