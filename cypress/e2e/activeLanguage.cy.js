import { loginUser } from "../support/object/login";
import { estateLanguage } from "../support/object/languages";

describe('Parameter Language', () => {
  beforeEach(function(){
    cy.visit('/');
    loginUser.formComplete();
 })
  it('Active or Inactive', () => {
    estateLanguage.languageActions();
  })
})