import { selectBirthDay, selectCivilState, selectDisability, selectIndentityGender, selectLanguage, selectRangeAllAges, selectSexualorientation, selectTypeDocument } from "../utils/functions";
import { listLastnameUser } from "../utils/functions";
import { listNameUser } from "../utils/functions";

class ReportCaseVictim {
    formReportCase() {
        let container = {
            baseUrl: 'https://redpaviqa.opitech.com.co/redpavi/',
            nameButtonReportCase: 'REPORTAR UN CASO',
            nameChipVictim: 'Víctima',
            buttonNext: 'siguiente',
            labelCivilState: 'Selecciona tu estado civil',
            labelGenderSelect: 'Selecciona tu identidad de genero con la que te identificas',
            labelSexualOrientation: 'Selecciona tu orientación sexual',
            labelFirstLanguage: 'Selecciona tu idioma nativo',
            labelSecondLanguage: 'Si hablas un segundo idioma seleccionalo',
            labelLastCountry: 'Selecciona  el último país de residencia',
        }
        let locator = {
            buttonReportCase: '.button-primary',
            chipVictim: '.ng-star-inserted',
            listTypeDocuments: '#status',
            inputDocumentNumber: '#report-case-victimDocumentNumber',
            inputFirstNames: '#report-case-victim-name',
            inputLastname: '#report-case-victim-lastname',
            listRangeAge: '#pn_id_10',
            inputBirthDate: '#report-case-victim-birthdate',
            listCivilState: '#pn_id_8',
            listDisability: '.p-multiselect-label.p-placeholder',
            radioButtonMigrant: '.p-radiobutton-box',
        }

        cy.visit(container.baseUrl);
        cy.wait(1000);
        cy.contains(locator.buttonReportCase, container.nameButtonReportCase).click();
        cy.contains(locator.chipVictim, container.nameChipVictim).click();
        cy.contains(container.buttonNext).click();
        cy.get(locator.listTypeDocuments).click();
        cy.contains(selectTypeDocument()).click();
        cy.get(locator.inputDocumentNumber).type('123456789', { delay: 100 });
        cy.get(locator.inputFirstNames).type(listNameUser(), { delay: 100 });
        cy.get(locator.inputLastname).type(listLastnameUser(), { delay: 100 });
        cy.get(locator.listRangeAge).click();
        cy.contains(selectRangeAllAges()).click();
        cy.get(locator.inputBirthDate).type(selectBirthDay())
        cy.contains(container.labelCivilState).click();
        cy.contains(selectCivilState()).click();
        cy.contains(container.labelGenderSelect).click();
        cy.contains(selectIndentityGender()).click();
        cy.contains(container.labelSexualOrientation).click();
        cy.contains(selectSexualorientation()).click();
        cy.get(locator.listDisability).click();
        cy.contains(selectDisability()).click();
        cy.get('body').click(700, 900);
        cy.contains(container.labelFirstLanguage).click();
        cy.contains(selectLanguage()).click();
        cy.contains(container.labelSecondLanguage).click();
        cy.contains(selectLanguage()).click();
        cy.get(locator.radioButtonMigrant).eq(0).click();
        cy.get('#focus').click();
        cy.contains('Colombia').click();
        cy.contains(container.buttonNext).click();
    }
}

export const reportCaseVictim = new ReportCaseVictim();