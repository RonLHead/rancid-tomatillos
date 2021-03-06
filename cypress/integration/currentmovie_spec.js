import {currentMovieTestData, currentMovieTestDataSad} from './current_movie_test_data';
import moviesTestData from './movies_test_data';

describe('Current movie flow', () => {
    it('Should be able to visit the movie page for Money Plane and render the correct elements', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', moviesTestData)
        cy.visit('http://localhost:3000')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', currentMovieTestData)
        cy.visit('http://localhost:3000/718444')
            .contains('Rancid Tomatillos')
            .get('h2')
                .contains('The second most trusted measurer of movie quality!')
            .get('div')
                .should('have.class', 'current-movie')
            .get('img')
                .should('have.class', 'backdrop')
                .and('be.visible')
            .get('img')
                .should('have.class', 'current-poster')
                .and('be.visible')
            .get('div')
                .should('have.class', 'movie-info')
                .and('be.visible')
            .get('h3')
                .should('have.class', 'current-movie-title')
                .contains('Rogue')
            .get('div')
                .should('have.class', 'current-movie-stats')
            .get('p')
                .contains('When the hunter becomes the prey.')
            .get('p')
                .contains('2020, Action, 106m')
            .get('p')
                .contains('🍅 Average Rating: 7')
            .get('div')
                .should('have.class', 'current-movie-wtk')
            .get('h3')
                .contains('WHAT TO KNOW')
            .get('p')
                .contains('Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.')
            .get('p')
                .contains('Budget: $0.00')
            .get('p')
                .contains('Revenue: $0.00')
            .get('button')
                .contains('Back').click()
    });

    it("Should be able to te alt-image if the current movie's poster images are missing", () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', currentMovieTestDataSad)
        cy.visit('http://localhost:3000/718444')
            .contains('Rancid Tomatillos')
            .get('h2')
                .should('have.class', 'sub-heading')
                .contains('The second most trusted measurer of movie quality!')
            .get('img')
                .should('have.class', 'backdrop')
                .and(($img) => {
                    expect($img[0].naturalWidth).to.equal(0)
                })
            .get('img')    
                .should('have.class', 'current-poster')
                .and(($img) => {
                    expect($img[1].naturalWidth).to.equal(0)
                })
    });

    it("Should be able to display an error message if the movies data isn't fetched properly", () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', {forceNetworkError: true})
        cy.visit('http://localhost:3000/718444')
            .contains('Rancid Tomatillos')
            .get('h2')
                .should('have.class', 'sub-heading')
                .contains('The second most trusted measurer of movie quality!')
            .get('div')
                .contains('TypeError: Failed to fetch')
    });

});
