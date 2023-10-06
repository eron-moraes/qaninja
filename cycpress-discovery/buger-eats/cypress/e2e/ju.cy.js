describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
      cy.viewport(1440, 900);
  
      for (let i = 0; i < 100; i++) {
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSccirFGQbUfke5GH1Ec_XdUeXbNu8_rLNKwVTHAJBXFbEvUgg/viewform');

        //cy.get('[jscontroller="A2m8uc"]').click()
  
        cy.get('#i14 > .vd3tt > .AB7Lab').click()
        cy.wait(2000); // Espera por 5 segundos (5000 milissegundos)
        cy.get('#i24 > .vd3tt > .AB7Lab').click()
        cy.wait(2000)
        cy.get('.lRwqcd > .uArJ5e > .l4V7wb').click()

        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSccirFGQbUfke5GH1Ec_XdUeXbNu8_rLNKwVTHAJBXFbEvUgg/viewform')

        cy.get('#i14 > .vd3tt > .AB7Lab').click()
        cy.wait(2000)
        cy.get('#i27 > .vd3tt > .AB7Lab').click()
        cy.wait(2000)
        cy.get('.lRwqcd > .uArJ5e > .l4V7wb').click()

        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSccirFGQbUfke5GH1Ec_XdUeXbNu8_rLNKwVTHAJBXFbEvUgg/viewform')

        cy.get('#i14 > .vd3tt > .AB7Lab').click()
        cy.wait(3000)
        cy.get('#i30 > .vd3tt > .AB7Lab').click()
        cy.wait(2000)
        cy.get('.lRwqcd > .uArJ5e > .l4V7wb').click()

        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSccirFGQbUfke5GH1Ec_XdUeXbNu8_rLNKwVTHAJBXFbEvUgg/viewform')

        cy.get('#i14 > .vd3tt > .AB7Lab').click()
        cy.wait(2000)
        cy.get('#i33 > .vd3tt > .AB7Lab').click()
        cy.wait(2000)
        cy.get('.lRwqcd > .uArJ5e > .l4V7wb').click()
        

        

      }
    });
  });