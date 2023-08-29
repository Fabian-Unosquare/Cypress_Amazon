describe('Amazon', () => {
	it('Cool comment', () => {
		cy.visit('https://www.amazon.com')
		cy.url().should('include', 'amazon')
		cy.get('#twotabsearchtextbox').should('exist')
		cy.get('#nav-search-submit-button').should('exist')
		cy.get('#twotabsearchtextbox').type('Macbook Pro')
		cy.get('#nav-search-submit-button').click()

		cy.get('.puis-price-instructions-style').then(($el) => {
			if ($el.length > 2) {
				console.log("Got more than 2 products");
			} else {
				console.log("Did not get more than 2 products");
			}
		}).log()


		//cy.get('.s-title-instructions-style').first().click()
		cy.wait(800)
		cy.get("img[data-image-index='1']").first().click()

			
		
		cy.get('.apexPriceToPay').then(($el) => {
			let price = $el.text()
			console.log("PRICE:   " + price)
		});
		

		
		let price = () => cy.get('.apexPriceToPay')
		price().should('not.have.value', 'null')
		


	})
})