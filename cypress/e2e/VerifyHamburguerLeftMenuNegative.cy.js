describe('Amazon: Verify Hamburguer Left Menu', () => {
	it('Scenario 2', () => {

		const leftMenuBtn = "a[id='nav-hamburger-menu']";
		//const leftMenuBtn = '#nav-hamburger-menu';
		
		cy.visit('https://www.amazon.com')
		cy.wait(800)
		cy.get(leftMenuBtn).click()

		
		cy.contains('shop by department').should('exist')
		cy.readFile('cypress/e2e/BuscarPorDepartamentoNegative.json').then(departamento => {

			//cy.get(Shinobi.Electronics).should('be.visible')	
			for (var index in departamento) {
				cy.get(departamento[index]).should('exist')
				cy.get(departamento[index]).should('not.be.visible')
				cy.get(departamento[index]).click()
			}
				
		})

	})
})