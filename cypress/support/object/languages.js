
class EstateLanguage {
  languageActions() {
    let CONTAINER = {
      optionParameters: 'Parámetros',
      optionLanguages: 'Idiomas'

    }
    let LOCATOR = {
      idLanguage: '.list-item__actions__status__update',
    }
    cy.contains(CONTAINER.optionParameters).click();
    cy.contains(CONTAINER.optionLanguages).click();
    cy.get(LOCATOR.idLanguage).invoke('show').then($elements => {
      const totalElements = $elements.length;
      const randomIndex = Cypress._.random(0, totalElements - 1);
      cy.get(LOCATOR.idLanguage)
        .eq(randomIndex)
        .click();
    });
    cy.contains('Confirmar').click()


  }

}

export const estateLanguage = new EstateLanguage();