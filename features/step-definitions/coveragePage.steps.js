import { When, Then } from '@wdio/cucumber-framework';
import CoveragePage from '../pageobjects/coverage.page';
import {literals} from '../../utils/literals';

const {
  dateClaim
} = literals;

When(/^I navigate to the info screen$/, async () => {
    await CoveragePage.goToNextPage();
})

When(/^I select an (.+) option$/, async (option) => {
  await CoveragePage.selectPriorLosses(option);
});

When(/^I add a type of claim$/, async (table) => {
  let element = table.hashes();
  await Promise.all(element.map(async (coverage) => {
    await CoveragePage.addTypeClaim(coverage.element);
  }));
  await CoveragePage.addClaimDate(dateClaim.newClaim);
  await CoveragePage.saveTheClaim();
});

When(/^I modify my coverage as follows$/, async (table) => {
  let coverages = table.hashes();
  await Promise.all(coverages.map( async (coverage) => { 
    await CoveragePage.selectCoverage(coverage.element, coverage.action)
  }));  
});

When(/^I select the default settings for my quote$/, async () => {
    await CoveragePage.selectDefaultCoverageOptions();
});

When(/^I select (.+) the additional 25% toward home rebuilding cost$/, async (option) => {
  await CoveragePage.selectAdditionalDwelling(option);
});

When(/^I select Yes to increase the rebuilding cost$/, async () => {
    await CoveragePage.increaseRebuildingCost();
  });

When(/^I (.+) the limit of the other structures$/, async (action) => {
    await CoveragePage.moveOtherStructure(action);
  });

When(/^I (.+) the temporary living expenses value$/, async (action) => {
    await CoveragePage.moveLossOfUse(action);
  });

Then(/^The information text is not visible$/, async () => {
    expect(await CoveragePage.isPriorLossesVisible(true)).toEqual(true);
  });