import { createRamdomEmail } from "../utils/functions";
import { listLastnameUser } from "../utils/functions";
import { listNameUser } from "../utils/functions";

class CreateUser {
    formCompleteCreateUser() {
        let container = {
            logoutButton: 'Cerrar sesión',
            buttonCreate: 'Crear usuario',
            buttonNext: 'siguiente',
            buttonCloseWindowDialog: 'Salir sin guardar',
            buttonEndForm: 'Terminar',
            buttonConfirmPassword: ' Establecer contraseña ',
            password:'Opi12345#',
        }

        let locator = {
            formName: '#create-user-name',
            formLastName: '#create-user-lastname',
            formDocumentNumber: '#user-create-documentNumber',
            formPhoneNumber: '#user-edit-phone',
            formBirthDate: '#create-user-birthdate',
            formEmailUser: '#create-user-email',
            formPassword: '#new-password',
            iconCloseForm: 'svg.p-icon.p-sidebar-close-icon',
            idEmail: '#forgot-password-email',
            idPassword:'#confirm-password',
            idButtonLogin:'button.p-element.p-ripple.p-button-rounded.p-button-secondary.p-button.p-component',
            formNewPassword: '#first-session-password',
            formConfirmNewPassword: '#confirm-session-password-confirmation'
        }

        // Almacenar el correo electrónico aleatorio
        let randomEmail = createRamdomEmail();

        cy.contains(container.buttonCreate).click();
        cy.wait(1000);
        cy.contains(container.buttonNext).click();
        cy.get(locator.formName).type(listNameUser(), { delay: 100 });
        cy.get(locator.formLastName).type(listLastnameUser(), { delay: 100 });
        cy.get(locator.formDocumentNumber).type('123213123', { delay: 100 });
        cy.get(locator.formPhoneNumber).type('+573222345678', { delay: 100 });
        cy.get(locator.formBirthDate).type('2000-04-02')
        cy.wait(1000);
        cy.contains(container.buttonNext).click({ force: true });
        cy.get(locator.formEmailUser).type(randomEmail, { delay: 100 });
        cy.get(locator.formPassword).type(container.password, { delay: 100 });
        cy.wait(1000);
        cy.contains(container.buttonNext).click({ force: true });
        cy.wait(5000);
        cy.contains(container.buttonEndForm).click();
        cy.wait(5000);
        cy.contains(container.logoutButton).click();
        cy.get(locator.idEmail).type(randomEmail, { delay: 100 });
        cy.get(locator.idPassword).type(container.password,{delay:100})
        cy.get(locator.idButtonLogin).click();
        cy.get(locator.formNewPassword).type(container.password);
        cy.get(locator.formConfirmNewPassword).type(container.password);
        cy.contains(container.buttonConfirmPassword).click()
        cy.wait(5000);
    }
}

export const createUser = new CreateUser();
