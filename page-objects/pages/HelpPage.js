import Base from '../Base'


class HelpPage extends Base {

    get title(){
        return $('.span8 > h3')
    }

    get transferFunds(){
        return $('*=transfer funds')
    }

    get payBills(){
        return $('*=I pay bills')
    }


    clickOnTransferFunds(){
        this.transferFunds.waitForExist()
        this.transferFunds.click()
    }

    clickOnPayBills(){
        this.payBills.waitForExist()
        this.payBills.click()
    }

}

export default new HelpPage()