import { createRoutes } from "../support/object/createRoute";
import { loginUser } from "../support/object/login";


describe('Create Routes', () => {
  beforeEach(function(){
    cy.visit('/');
    loginUser.formComplete();
 })
  it('Create route', () => {
    createRoutes.formCreateroutes();
  })
})