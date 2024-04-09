import { loginUser } from "../support/object/login";

describe('Login form user', () => {
  beforeEach(function(){
    cy.visit('/');
 })
  it('Login form', () => {
    loginUser.formComplete()
  })
})