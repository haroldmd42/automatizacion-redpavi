import { createRamdomEmail, emailUsers, selectBirthDay } from "../utils/functions";
import { listLastnameUser } from "../utils/functions";
import { listNameUser } from "../utils/functions";

class CreateUserOperator{
    formCreateUserOperator(){
        let container = {
            logoutButton: 'Cerrar sesión',
            buttonCreate: 'Crear usuario',
            //Cambiar de perfil: Operador de territorio -> Se debe remplazar en typeProfyle
            typeProfyle: 'Líder operador de territorio',
            buttonNext: 'siguiente',
            buttonCloseWindowDialog: 'Salir sin guardar',
            buttonEndForm: 'Terminar',
            buttonConfirmPassword: ' Establecer contraseña ',
            password:'Opi12345#',
        }

        let locator = {
            ticketProfileRoll: '.p-button-label',
            formName: '#create-user-name',
            formLastName: '#create-user-lastname',
            formDocumentNumber: '#user-create-documentNumber',
            formPhoneNumber: '#user-edit-phone',
            formBirthDate: '#create-user-birthdate',
            formListCountry: 'span.p-element.p-dropdown-label.p-inputtext.p-dropdown-label-empty.ng-star-inserted',
            formEmailUser: '#create-user-email',
            formPassword: '#new-password',
            iconCloseForm: 'svg.p-icon.p-sidebar-close-icon',
            idEmail: '#forgot-password-email',
            idPassword:'#confirm-password',
            idButtonLogin:'button.p-element.p-ripple.p-button-rounded.p-button-secondary.p-button.p-component',
            formNewPassword: '#first-session-password',
            formConfirmNewPassword: '#confirm-session-password-confirmation'
        }

        cy.contains(container.buttonCreate).click();
        cy.wait(1000);
        cy.contains(locator.ticketProfileRoll, container.typeProfyle).click();
        cy.wait(1000);
        cy.contains(container.buttonNext).click();
        cy.get(locator.formName).type(listNameUser(), { delay: 100 });
        cy.get(locator.formLastName).type(listLastnameUser(), { delay: 100 });
        cy.get(locator.formDocumentNumber).type('123213123', { delay: 100 });
        cy.get(locator.formPhoneNumber).type('+573222345678', { delay: 100 });
        cy.get(locator.formBirthDate).type(selectBirthDay())
        cy.wait(1000);
        cy.contains(container.buttonNext).click({ force: true });
        cy.get(locator.formListCountry).click();
        cy.contains('Colombia').click();
        cy.get('#states').click();
        cy.contains('Nariño').click();
        cy.get('#city').click();
        cy.contains('Pasto').click();
        cy.contains(container.buttonNext).click({ force: true });
        // Almacenar el correo electrónico aleatorio
        let randomEmail = listNameUser();
        const numberRandom2 = Math.floor(Math.random() * 1000) + 1;
        const randomemailsUser = randomEmail.split(' ').join('').toLowerCase()+numberRandom2+'@yopmail.com'
        cy.get(locator.formEmailUser).type(randomemailsUser, { delay: 100 });
        cy.get(locator.formPassword).type(container.password, { delay: 100 });
        cy.wait(1000);
        cy.contains(container.buttonNext).click({ force: true });
        cy.wait(5000);
        cy.contains(container.buttonEndForm).click();
        cy.wait(5000);
        cy.contains(container.logoutButton).click();
        cy.get(locator.idEmail).type(randomemailsUser, { delay: 100 });
        cy.get(locator.idPassword).type(container.password,{delay:100})
        cy.get(locator.idButtonLogin).click();
        cy.get(locator.formNewPassword).type(container.password);
        cy.get(locator.formConfirmNewPassword).type(container.password);
        cy.contains(container.buttonConfirmPassword).click()
        cy.wait(5000);
    
    }
}


export const createUserOperator = new CreateUserOperator();