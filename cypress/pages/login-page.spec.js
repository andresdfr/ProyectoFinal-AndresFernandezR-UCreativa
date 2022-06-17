class LoginPage {

    elements = {
        usernameTxt: () => cy.get('[data-test="username"]'),
        passwordTxt: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('#login-button'),
        errorUsernameSpan: () => cy.get('form > :nth-child(1) > .svg-inline--fa'),
        errorPasswordSpan: () => cy.get('form > :nth-child(2) > .svg-inline--fa'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    credentials = {
        usernameStandard: "standard_user",
        password: "secret_sauce"
    }

    typeUser(username){
        this.elements.usernameTxt().type(username)
    }

    typePassword(password){
        this.elements.passwordTxt().type(password)
    }

    clickLoginBtn(){
        this.elements.loginBtn().click()
    }

    loginStandardUser(){
        this.typeUser(this.credentials.usernameStandard)
        this.typePassword(this.credentials.password)
        this.clickLoginBtn()
    }
}

module.exports = new LoginPage()