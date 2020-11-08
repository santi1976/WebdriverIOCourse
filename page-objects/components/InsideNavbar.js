import Base from '../Base'


class InsideNavbar extends Base {
    get accountActivityTab(){
        return $('#account_activity_tab')
    }

    get filtersLink(){
        return $('#tabs > ul > li:nth-child(2) > a')
    }

    get descriptionField (){
        return $('#aa_description')
    }

    get exchangeLink(){
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    get billTab(){
        return $('#pay_bills_tab')
    }


    clickAccountActivityTab(){
        this.accountActivityTab.waitForExist()
        this.accountActivityTab.click()
    }

    clickFiltersLink(){
        this.filtersLink.waitForExist()
        this.filtersLink.click()

    }

    clickPayBillsTab(){
        this.billTab.waitForExist()
        this.billTab.click()
    }

    purchaseForeignMoney(){
        this.exchangeLink.waitForExist()
        this.exchangeLink.click()
    }

}

export default new InsideNavbar 