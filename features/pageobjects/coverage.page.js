import Page from './page'
import { literals } from '../../utils/literals';
import { enums } from '../../utils/enums';
import world, { hasPriorLosses, isCoverageModalOpened } from '../../world';
import { quoteToDollarInt } from '../../utils/helpers';

const {
    pagesIds,
    coverageType,
    coverageOption,
    claimType
} = enums;

const {
    urls,
    creditScoreLimitsVal
} = literals;

class CoveragePage extends Page {

    constructor() {
        super(pagesIds.salesCoverages, urls.coveragePageUrl);
    }

    // Prior losses section
    get priorLossesNo()                 { return $('#commonNoCoveragesCheckbox-container')}
    get priorLossesYes()                { return $('#commonYesCoveragesCheckbox-container')}
    get addDetailsBtn()                 { return $('#addDetailsClaimsButton')}
    get dateOfClaim()                   { return $('input#claimDate')}
    get claimSaveBtn()                  { return $('#clearClaimsButton')}
    get claimCancelBtn()                { return $('#cancelClaimsButton')}
    get priorLossesMessageInformation() { return $('#prior-losses-error-container')}
    get claimDateError()                { return $('#claimDate-error')}

    // Claim type
    get claimTypeDropdown()             { return $('#claimType')}
    get claimsTypesOpt()                { return $('li[data-value]')}
    get claimsTypeWater()               { return $('li[data-value=WATER]')}
    get claimsTypeHurricane()           { return $('li[data-value=HURRICANE]')}
    get claimsTypeFire()                { return $('li[data-value=FIRE]')}
    get claimsTypeBurglary()            { return $('li[data-value=BURGLARY_ROBBERY_THEFT]')}
    get claimsTypeLiability()           { return $('li[data-value=LIABILITY]')}
    get claimsTypeSinkhole()            { return $('li[data-value=SINKHOLE]')}
    get claimsTypeMold()                { return $('li[data-value=MOLD]')}
    get claimsTypeAllOther()            { return $('li[data-value=ALL_OTHER_PHYSICAL]')}
    get claimsTypeOther()               { return $('li[data-value=OTHER]')}

    // Choose your plan 
    get monthlyQuoteSwitcher()  { return $('#isMonthlySwitch')}

    // Quote options 
    get recommendedQuote()      { return $('#recommended')}
    get reviewRecommendedBtn()  { return $('#recommended .coverageCardButton')}

    get basicQuote()            { return $('#basic')}
    get reviewBasicBtn()        { return $('#basic .coverageCardButton')}

    get luxuryQuote()           { return $('#luxury')}
    get reviewLuxuryBtn()       { return $('#luxury .coverageCardButton')}


    // Modal 
    get continueToInfoBtn()     { return $('#continueEndorsementsModalButton')};
    get quoteModalValue()       { return $('[role="dialog"] h3 span:first-child') }

    // Dwelling Score
    get dwellingScore()              { return $('#dwelling span[role="slider"]')}
    get otherStructuresScore()       { return $('#otherStructures span[role="slider"]')}
    get lossOfUseScore()             { return $('#lossOfUse span[role="slider"]')}
    get moldFungiScore()             { return $('#limit span[role="slider"]')}
    get nHurracaneDeductibleScore()  { return $('#aopDeductible span[role="slider"]')}
    get contentsScore()              { return $('#personalProperty span[role="slider"]')}
    get personalLiabilityScore()     { return $('#personal span[role="slider"]')}
    get medicalScore()               { return $('#medical span[role="slider"]')}
    get ordinanceProtectionScore()   { return $('#dwellingPercentage span[role="slider"]')}
    get waterBackUpScore()           { return $('#coverage span[role="slider"]')}

    // Additionals Dwelling
    get increaseRebuildingCostYes() { return $('#dwellingAdditionalToggle-onLabel')}
    get increaseRebuildingCostNo()  { return $('#dwellingAdditionalToggle-offLabel')}
    

    
    getPageUrl() {
        return this.url;
    }

    async isPriorLossesVisible(reverse = false){
        return await this.priorLossesMessageInformation.waitForDisplayed({reverse});
    }

    async selectPriorLosses(option){
        let optionSelected; 
        option === 'no' ? optionSelected = this.priorLossesNo : optionSelected = this.priorLossesYes;
        await optionSelected.waitForClick();
    }

    async addTypeClaim(element){
        await this.addDetailsBtn.waitForClick();
        await this.claimTypeDropdown.waitForClick();
        await this.selectTypeClaim(element);      
    }

    async addClaimDate({date} = {}){
        await this.dateOfClaim.clickAndSetVal(date);
    }

    async saveTheClaim(){
        await this.claimSaveBtn.waitForClick();
    }

    async selectTypeClaim(element){
        let selected;
        switch(element){
            case claimType.typeWater:
                selected = await this.claimsTypeWater;
                break;
            case claimType.typeHurricane:
                selected = await this.claimsTypeHurricane;
                break;
            case claimType.typeFire:
                selected = await this.claimsTypeFire;
                break;
            case claimType.typeBurglary:
                selected = await this.claimsTypeBurglary;
                break;
            case claimType.typeLiability:
                selected = await this.claimsTypeLiability;
                break;
            case claimType.typeSinkhole:
                selected = await this.claimsTypeSinkhole;
                break;
            case claimType.typeMold:
                selected = await this.claimsTypeMold;
                break;
            case claimType.typeAllOther:
                selected = await this.claimsTypeAllOther;
                break;
            case claimType.typeOther:
                selected = await this.claimsTypeOther;
                break;
            default:
                throw new Error (`${element} is not a valid type of claim`);
        }
        await selected.waitForClick();
    }

    async selectCoverageOption(option = coverageType.recommended) {
        let selected; 
        switch(option.toLowerCase()) {
            case coverageType.basic:
                selected = await this.reviewBasicBtn;
                break;
            case coverageType.recommended:
                selected = await this.reviewRecommendedBtn;
                break;
            case coverageType.luxury:
                selected = await this.reviewLuxuryBtn;
                break;
            default:
                throw new Error(`${option} is not a valid coverage type to choose`);
        }
        await selected.waitForClick();
    }

    async selectDefaultCoverageOptions() {
        await this.selectPriorLosses();
        await this.selectCoverageOption();
    }

    async getQuote() {
        return await super.getQuote();
    }

    async getModalQuote() {
        return quoteToDollarInt(await this.quoteModalValue.getVal());
    }

    async waitForQuoteToChange() {
        await super.waitForQuoteToChange();
    }

    async elementSwitcher(element){
        let selected;
        switch (element){
            case coverageOption.costRebuild:
                selected = await this.dwellingScore;
                break;
            case coverageOption.otherStructures:
                selected = await this.otherStructuresScore;
                break;
            case coverageOption.lossOfUse:
                selected = await this.lossOfUseScore;
                break;
            case coverageOption.moldFungi:
                selected = await this.moldFungiScore;
                break;
            case coverageOption.nHurracaneDeductible:
                selected = await this.nHurracaneDeductibleScore;
                break;
            case coverageOption.contents:
                selected = await this.contentsScore;
                break;
            case coverageOption.personalLiability:
                selected = await this.personalLiabilityScore;
                break;
            case coverageOption.medicalPayment:
                selected = await this.medicalScore;
                break;
            case coverageOption.ordinanceProtection:
                selected = await this.ordinanceProtectionScore;
                break;
            case coverageOption.waterBackUp:
                selected = await this.waterBackUpScore;
                break;
            default:
                throw new Error (`${element} is not a valid dwelling`);
        }
        return selected;
    }

    async selectCoverage(element, action){
        let x;
        let selected = await this.elementSwitcher(element);
        world.quoteValue = quoteToDollarInt(await super.getQuote());
        await selected.scrollIntoView(true); 
        action === 'increase' ? x = 400 : x = -230; 
        await selected.waitForDropped({ x: x, y: 0 });
    }

    async selectAdditionalDwelling(option = 'on') {
         if (option === 'on') {
            let extraDwellingOn = await $('#additionalDwellingCoverage-onLabel');
            await extraDwellingOn.scrollIntoView(true);
            await browser.execute((element) => {
                element.click();
            }, extraDwellingOn);
        }
        await this.quoteModalValue.waitForValueToChange();
    }

    async includeAdditional25(){
        let additional25Include = await $('#additionalDwellingCoverage-onLabel');
        world.quoteValue = quoteToDollarInt(await super.getQuote());
        await additional25Include.scrollIntoView(true);
        await additional25Include.waitForClick();
    }

    async goToNextPage(priorLosses = hasPriorLosses) { //to-do add condition for prior losses 
        if(!isCoverageModalOpened) {
            await this.selectPriorLosses(priorLosses);
            await this.selectCoverageOption();
        }
        await this.continueToInfoBtn.waitForClick();
    }    

}

export default new CoveragePage();