import Base from '../Base'

class Exchange extends Base {

    get currency (){
        return $('#pc_currency')
    }

    get payInDollars(){
        return $('#pc_inDollars_true')
    }

    get toPurchase(){
        return $('#purchase_cash')
    }

    get currencyValue(){
        return $('#pc_amount')
    }

    get alertMessage(){
        return $('#alert_content')
    }
    
    currencyIsVisible(){
        this.currency.waitForExist()
    }

    setCurrency(value){
        this.currency.selectByAttribute(value)
    }

    currencyAmount(num){
        this.currencyValue.setValue(num)
    }

    selectPayInDollars(){
        this.payInDollars.click()
    }

    clickToPurchase(){
        this.toPurchase.click()
    }

}

export default new Exchange