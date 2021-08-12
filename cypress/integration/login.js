describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Login with incorret email', ()=>{
        cy.login('lalala', 'ahre1234');
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })       
    })
})