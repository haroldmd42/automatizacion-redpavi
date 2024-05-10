import { loginUser } from "../support/object/login";
import { createUserOperator} from "../support/object/createUserOperator"

describe('Create user Profesional en territorio and lider en territorio', () => {
  beforeEach(function(){
    cy.visit('/');
    loginUser.formComplete();
 })
  it('Form create user PLT and LT', () => {
    createUserOperator.formCreateUserOperator();
  })
})