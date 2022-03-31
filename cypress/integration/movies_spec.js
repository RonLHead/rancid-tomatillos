describe('Movies homepage flow', () => {
    it('Should be able to visit the page and render the correct elements', () => {
        cy.visit('http://localhost:3000')
            .contains('Rancid Tomatillos')
            .get('h2')
                .contains('The second most trusted measurer of movie quality!')
            .get('div')
                .should('have.class', 'movies-container')
    })
})


