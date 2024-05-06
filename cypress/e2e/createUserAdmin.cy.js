import { loginUser } from "../support/object/login";
import { createUser } from "../support/object/createUser";

describe('Create user Administrador', () => {
  beforeEach(function(){
    cy.visit('/');
    loginUser.formComplete();
 })
  it('Form create user administrador', () => {
    createUser.formCompleteCreateUser();
  })
})