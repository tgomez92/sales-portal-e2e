// Define all ENUMS here and import them wherever needed 

const pathTypes = {
    redPath: 'red path',
    yellowPath: 'yellow path',
    greenPath: 'green path'
}

const salesSections = {
    rewardPage: 'reward',
    coveragePage : 'coverage',
    infoPage: 'info',
    kickout: 'kickout',
    homePage: 'home',
    aboutUsPage: 'about us',
    getStartedPage: 'get started',
    contactUsPage: 'contact us',
    ourInsurancePage: 'our insurance',
    myAccountPage: 'my account'
}

const pagesIds = {
    salesHomeId: 'SalesHome',
    salesReward: 'SalesReward',
    salesKikout: 'SalesKikout',
    salesAboutUs: 'SalesAboutUs',
    salesOurInsurance: 'SalesAboutUs',
    salesContactUs: 'SalesContactUs',
    salesMyAccount: 'SalesMyAccount',
    salesCoverages: 'SalesCoverage',
    salesInfo: 'SalesInfo',
    salesCheckout: 'SalesCheckout',
    salesSuccess: 'SalesSuccess',
    salesBill2Pay: 'SalesBill2Pay'
}

const ratedRewards = {
    burglarAalarm: 'burglar alarm',
    fireProtection: 'fire protection',
    tanklessWaterHeater: 'tankless water heater',
    waterDetectionShutoff: 'water detection & shutoff',
    accreditedBuilder: 'accredited builder',
    overAgeSixty: 'age 60 and over',
    securedCommunity: 'secured community',
    surgeProtection: 'surge protection',
    nonSmoker: 'non-smoker',
    openingProtection: 'hurricane windows',
    military: 'military'
}

const nonRatedRewards = {
    videoDoorBell: 'video door bell',
    highAcSeerRating: 'high ac seer rating',
    fireExtinguisher: 'fire extinguisher',
    smartLock: 'smart lock',
    solarPanel: 'solar panel',
    pestControl: 'pest control',
    homeWarranty: 'home warranty',
    wholeHouse: 'whole house',
    hoaMember: 'hoa',
    safeDriver: 'safe driver',
    purchasedLifeInsurance: 'purchased life insurance',
    petOwner: 'pet owner',
    idTheftProtection: 'id theft protection',
    organDonor: 'organ donor',
    smartThermostat: 'smart thermostat',
    bloodDonor: 'blood donor',
    gymMember: 'gym member',
    smartDevices: 'smart devices',
    rewardModal: 'reward limit modal'
}

const claimType = {
    typeWater: 'water',
    typeHurricane: 'hurricane',
    typeFire: 'fire',
    typeBurglary: 'burglary',
    typeLiability: 'liability',
    typeSinkhole: 'sinkhole',
    typeMold: 'mold',
    typeAllOther: 'all other',
    typeOther: 'other'
}

const coverageOption = {
    costRebuild: 'cost to rebuild home',
    otherStructures: 'other structures',
    lossOfUse: 'temporary living expenses',
    moldFungi: 'mold & fungi',
    nHurracaneDeductible: 'non-hurricane deductible',
    contents: 'contents',
    personalLiability: 'personal liability',
    medicalPayment: 'medical payments to others',
    ordinanceProtection: 'ordinance protection',
    waterBackUp: 'water backup'
}

const infoPageElements = {
    infoFormError: 'form error',
}

const rewardsLimits = {
    nonRatedLimit : 100,
    nonRatedIndex: 11
}

const creditScoreLimits = {
    lowest: 'lowest',
    highest: 'highest'
}

const coverageType = {
    basic: 'basic',
    recommended: 'recommended',
    luxury: 'luxury'
}

const paymentType = {
    mortgagee: 'mortgagee',
    fullPay: 'full-pay',
    elevenPay: 'eleven-pay'
}

const successElements = {
    nextStepsButton: 'next steps button',
    activateAccountButton: 'activate account button'
}

const entities = {
    policy : 'policy',
    application: 'application'
}

export const enums = {
    pathTypes,
    salesSections,
    pagesIds,
    ratedRewards,
    nonRatedRewards,
    creditScoreLimits,
    rewardsLimits,
    coverageType,
    infoPageElements,
    paymentType,
    successElements,
    coverageOption,
    entities,
    claimType
}