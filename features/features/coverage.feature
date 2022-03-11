Feature: Coverage Feature

    Test that aim to test coverage screen scenarios

    @coverage001 @web @salesPortal
    Scenario Outline: As a user, I can select if I have a prior losses or not, the information text disappears
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        When I select an <option> option
        Then The information text is not visible

        Examples:
            | address     | option |
            | green path  | yes    |
            | yellow path | no     |

    @coverage020 @web @salesPortal 
    Scenario Outline: As a user, I can add a type of loss
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select an <option> option
        When I add a type of claim
            | element   |
            | water     |
            | hurricane |
            | fire      |
            | burglary  |
            | liability |
            | sinkhole  |
            | mold      |
            | all other |
            | other     |
        Then I see the type of loss added

        Examples:
            | address     | option |
            | green path  | yes    |
            #| yellow path | yes    |


    @coverage006 @web @salesPortal 
    Scenario Outline: As a user, if I <action> my cost to rebuild home, my premium <premium>
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I modify my coverage as follows
            | element                    | action   |
            | cost to rebuild home       | increase |
            | other structures           | increase |
            | temporary living expenses  | increase |
            | mold & fungi               | increase |
            | contents                   | increase |
            | personal liability         | decrease |
            | medical payments to others | decrease |
            | ordinance protection       | decrease |
            | water backup               | decrease |
        Then I see my premium quote <action> for the coverage page
            
        Examples:
            | address     | action   |
            | green path  | increase |
            #| yellow path | decrease |

    @coverage006 @web @salesPortal
    Scenario Outline: As a user, if I <action> the non-hurricane deductible, my premium <action>
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I modify my coverage as follows
            | element                  | action   |
            | non-hurricane deductible | increase |
        Then I see my premium quote <action> for the coverage page

        Examples:
            | address     | action   |
            | green path  | decrease |
            #| yellow path | decrease |

    Scenario Outline: As a user, if I increase the rebuilding cost, my premium increase
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I select Yes to increase the rebuilding cost
        Then I see my premium quote increase for the coverage page

        Examples:
            | address     |
            | green path  |
            #| yellow path |

    @coverage008 @web @salesPortal
    Scenario Outline: As a user, if I include the additional 25% toward home rebuilding cost, my premium <action> 
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I select <option> the additional 25% toward home rebuilding cost
        Then I see my premium quote <action> for the coverage page

        Examples:
            | address     | option  | action   |
            | green path  | on      | increase | 

    @coverage0008 @web @salesPortal
    Scenario Outline: As a user, if I include the additional 25% toward home rebuilding cost, I see a flag
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I include the additional 25% toward home rebuilding cost
        Then I see the following elements in the coverage screen
            | element                  |
            | coverage additional flag |

        Examples:
            | address     | action   |
            | green path  | increase |

    @coverage010 @web @salesPortal 
    Scenario Outline: As a user, if I <action> the limit of the other structures, my premium <action>
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I <action> the limit of the other structures
        Then I see my premium quote <action> for the coverage page

        Examples:
            | address     | action   |
            | green path  | increase |
            | yellow path | decrease |

    @coverage011 @web @salesPortal
    Scenario Outline: As a user, if I <action> the temporary living expenses value, my premium <action>
        Given I am on the home page
        And I enter a <address> address
        And I navigate to the coverage screen
        And I select the default settings for my quote
        When I <action> the temporary living expenses value
        Then I see my premium quote <action> for the coverage page

        Examples:
            | address     | action   |
            | green path  | increase |
            | yellow path | decrease |