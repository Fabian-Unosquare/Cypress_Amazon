describe('Amazon: Verify Hamburguer Left Menu', () => {
	it('Scenario 2', () => {

		//const leftMenuBtn = '#nav-hamburger-menu';
		const leftMenuBtn = "a[id='nav-hamburger-menu']";
		
		cy.visit('https://www.amazon.com/')
		cy.wait(800)
		cy.get(leftMenuBtn).click()

		//cy.contains('shop by department').should('exist')
		cy.readFile('cypress/e2e/BuscarPorDepartamento.json').then(departamento => {

			//cy.get(Shinobi.Electronics).should('be.visible')

			for (var index in departamento) {
				cy.get(departamento[index]).should('be.visible')
			}
	
		})

		cy.contains('programs & features').should('exist')
		cy.readFile('cypress/e2e/ProgramayFuncionalidades.json').then(funcionalidades => {

			for (var index in funcionalidades) {
				cy.get(funcionalidades[index]).should('exist')
			}

		})

	})
})