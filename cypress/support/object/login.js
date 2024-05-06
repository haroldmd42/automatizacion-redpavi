


class LoginUser {
    formComplete() {
       let CONTAINER = {
        email: 'yan.munozd+2@opitech.com.co',
        password: 'Opi12345#',
       }
       let LOCATOR ={
        idEmail: '#forgot-password-email',
        idPassword:'#confirm-password',
        idButtonLogin:'button.p-element.p-ripple.p-button-rounded.p-button-secondary.p-button.p-component',
        idButtonActiveSession: 'button.p-ripple.p-element.p-button-secondary.p-button-rounded.flex.justify-content-center.uppercase.p-button.p-component.ng-star-inserted'
       }
       
        cy.get(LOCATOR.idEmail).type(CONTAINER.email,{delay: 100}).should('have.value',CONTAINER.email);
        cy.get(LOCATOR.idPassword).type(CONTAINER.password,{delay:100}).should('have.value',CONTAINER.password);
        cy.get(LOCATOR.idButtonLogin).click();
        
    
    }
   
}

export const loginUser = new LoginUser();