import Base from '../Base'

class PaymentPage extends Base {

    get payee(){
        return $('#sp_payee')
    } 

    get account(){
        return $('#sp_account')
    }

    get inputAmount(){
        return $('#sp_amount')
    }
      
    get inputDate(){
        return $('#sp_date')
    }
           
    get inputDescription(){
        return $('#sp_description')
    }

    get messageAlert(){
        return $('#alert_content')  
    }

    get paymentButton(){
        return $('#pay_saved_payees')
    }

    clickPayment(){
        this.paymentButton.click()
    }

    fillForm(amount, date, description){
        this.inputAmount.setValue(amount)
        this.inputDate.setValue(date)
        this.inputDescription.setValue(description)
    }

}

export default new PaymentPage

    


