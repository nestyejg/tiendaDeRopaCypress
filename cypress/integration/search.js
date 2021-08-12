describe('Search elements',()=>{
    beforeEach(()=>{
        cy.visit('/');  //se escribe asi y no se especifica la url porque lo toma del baseUrl del cypress.json
    })
    it('search elements with multiple results', () =>{
        cy.search('dress')
        cy.fixture('searchResults').then((searchResults)=>{
            cy.get(searchResults.title).should('contain','dress')
        })
    })

    it('search for elements with no results', ()=>{
        cy.search('querty')
        cy.fixture('searchResults').then((searchResults)=>{
            cy.get(searchResults.alert).should('contain','No results were found for your search')
        })  
    })
})