import { selectInstitutes, selectOrientedTo, selectSexualorientation, selectTipeServices, selectTipeVictimary } from "../utils/functions";

class CreateRoutes{
    formCreateroutes(){
        let container ={
            optionParameters: 'Parámetros',
            logoutButton:'Cerrar sesión',
            optionRoutesGest: 'Gestión de rutas',
            buttonCreateRoutes: 'Crear Ruta',
            inputOrientedTo: 'Orientado a..',
            buttonNext: 'Siguiente',
            labelSelect: 'Selecciona',
            buttonAddService: 'Agregar servicio',
        } 
            
        
        let locator = {
            inputFormNameRoute: '#create-user-name',
            inputFormDescriptionRoute: '#create-route-description',
            buttonEndCreate: 'button.create-user-form__footer__btn-siguiente.uppercase',

        }
        //Number random
        const numberRandom = Math.floor(Math.random() * 10000) + 1;
        cy.wait(2000)
        cy.contains(container.optionParameters).click();
        cy.wait(1000)
        cy.contains(container.optionRoutesGest).click();
        cy.wait(1000)
        cy.contains(container.buttonCreateRoutes).click();
        cy.wait(2000)
        cy.get(locator.inputFormNameRoute).type('Rutas de prueba cypress ' + numberRandom)
        cy.get(locator.inputFormDescriptionRoute).type('Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de la industria')
        cy.contains(container.inputOrientedTo).click()
        cy.contains(selectOrientedTo()).click()
        cy.contains(container.buttonNext).click();
        cy.contains('Orientación sexual').click();
        cy.contains(container.labelSelect).click();
        cy.contains(selectSexualorientation()).click();
        cy.contains('País').click();
        cy.contains(container.labelSelect).click();
        cy.contains('Colombia').click();
        cy.contains('Tipo de victimarios').click();
        cy.contains(container.labelSelect).click();
        cy.contains(selectTipeVictimary()).click();
        cy.contains(container.buttonNext).click();
        cy.contains(container.buttonAddService).click();
        cy.contains(container.labelSelect).eq(0).click();
        cy.contains(selectTipeServices()).click();
        cy.contains(container.labelSelect).click();
        cy.contains(selectInstitutes()).click()
        cy.contains('añadir').click()
        cy.get(locator.buttonEndCreate).click();
        cy.wait(5000)
        cy.contains(container.logoutButton).click();
       
        
    }
}

export const createRoutes = new CreateRoutes()