/*
http://jaketrent.com/post/i18n-strings-requirejs/
http://requirejs.org/docs/download.html#i18n
http://marizmelo.com/2013/01/28/requirei18n.html

 */
define({

    "root" : {
        // example module dictionary, pay attention that every key should start with the module name and then the key name
        "SignUpForFree": "Sign up for free",
        "EmailAddress": "Email address",
        "LetGetStarted": "Let's get started",

        "notAvailable": "N/A",

        "CreateYourAccount": "Create your account",
        "Name": "Name",
        "ChoosePassword": "Password (min. 8 characters)",
        "ConfirmPassword": "Confirm password",
        "Website": "Website URL",
        "Country": "Country",
        "TypeLettersFieldBelow": "Security question",
        "ReadAndAgreed": "By registering you agree to the",
        "TermsAndConditions": "terms and conditions",
        "LicenseAgreement": "license agreement",
        "CreateAccount": "Create account",

        "WelcomeToLiveEngage": "Welcome! Start engaging with your customers and drive results.",
        "SignUpBullet1BeforeBold": "It's ",
        "SignUpBullet1Bold": "100% risk-free",
        "SignUpBullet1AfterBold": " and no credit card is required!",
        "SignUpBullet2": "Get full access to a 15-day free trial",
        "SignUpBullet3": "Getting started is easy",
        "ThankYouForSigningUp": "Thank you for signing up!",
        "SentConfirmationEmail": "We sent a confirmation email to:",
        "ClickConfirmationButtonEmailStarted": "Click the confirmation button in the email to get started.",
        "PleaseCheckYourEmailSpam": "If you didn&rsquo;t receive the email, please check your email&rsquo;s spam folder or add registration@liveperson.com to your address book.",

        "SomethingWentWrong": "Sorry, something went wrong.",
        "ErrorCode": "(Error Code: {0})",
        "TryAgainLink": "try again",
        "Please": "Please",
        "EnterYourFullName": "Enter your full name",
        "EnterYourWebsiteAddressURL": "Enter your website address URL",
        "EnterYourPassword": "Enter your password",
        "ConfirmYourPassword": "Confirm your password",

        "YourSiteNotTagged": "Your website is not tagged yet.",

        "TaggingYourWebsiteEasy": "Tagging your website is easy:",
        "SelectAndCopyLpTag": "Select and copy the LiveEngage Tag below.",
        "PasteSourceCode": "Paste it into the source code, directly below the",
        "TagAllYourWebPages": "tag of all your web pages.",
        "DeployingLpTagEnables": "Deploying the LiveEngage Tag enables you to:",
        "PublishCampaignsAndEngagements": "Publish campaigns and engagements",
        "TrackRelevantDataYourWebsite": "Track relevant data on your website",
        "EngageYourCustomers": "Intelligently engage your customers in real time",
        "button.done": "Done",

        //PlanSelection
        "planSelection.title": "Choose a plan",
        "planSelection.description": "Display as many chat invitations and banners as you like - just pay for the visitors that engage with you.",
        "planSelection.engagementsUseTextStart": "You had",
        "planSelection.engagementsUseTextEnd": "engagements so far",
        "planSelection.engagementsUseDescriptionText": "Engagement = Any interaction with your visitors (as chat or banner click) ",
        "planSelection.engagementsLabel": "Engagements",
        "planSelection.perMonthLabel": "/mo",
        "planSelection.discountLabel": "discount",
        "planSelection.discountText": "for the first period!",
        "planSelection.listPriceLabel": "List price",
        "planSelection.moreOptionsLabel": "More Options",
        "planSelection.moreOptionsDescription": "Talk with our agents about finding the right plan",
        "planSelection.additionalLabel": "for each additional engagement",
        "planSelection.chatNowBtn": "Chat now",
        "planSelection.upgrade.success": "Your account has been successfully upgraded.",
        "plan.billing.period": "Billing period",
        "plan.period.annual": "Annually",
        "plan.period.month": "Month",
        "plan.period.quarter": "Quarterly",
        "plan.period.three.years": "Three Years",
        "plan.recommended": "Recommended",
        "plan.error.chatWithUs": "Operation failed, please chat with us",

        //Buy now
        "BuyNow.stepIndicator.step0": "CHOOSE A PLAN",
        "BuyNow.stepIndicator.step1": "CREATE YOUR ACCOUNT",
        "BuyNow.stepIndicator.step2": "BILLING DETAILS",
        "BuyNow.stepIndicator.step3": "CONFIRM PURCHASE",
        "BuyNowInfo.next.button": "Next",
        "BuyNowInfo.confirm": "Confirm purchase",
        "BuyNowInfo.purchase.button": "Confirm",
        "BuyNowInfo.confirmation.title": "Billing details",
        "BuyNowInfo.confirmation.footnote": "Secured form",

        "BuyNowInfo.checkout.creditCardType": "Card type",
        "BuyNowInfo.checkout.creditCardNumber": "Card number",
        "BuyNowInfo.checkout.creditCardExpirationDate": "Expiration date",
        "BuyNowInfo.checkout.cardSecurityCode": "CVV",
        "BuyNowInfo.checkout.creditCardHolderName": "Cardholder name",
        "BuyNowInfo.checkout.creditCardCountry": "Country",
        "BuyNowInfo.checkout.creditCardAddress1": "Address",
        "BuyNowInfo.checkout.creditCardCity": "City",
        "BuyNowInfo.checkout.creditCardState": "State",
        "BuyNowInfo.checkout.creditCardPostalCode": "Postal code",
        "BuyNowInfo.checkout.phone": "Contact phone number",
        "BuyNowInfo.checkout.email": "Email address",
        "BuyNowInfo.checkout.zuora.general.error": "Operation failed, please try again.",

        "Confirmation.account.details": "Account details",
        "Confirmation.package.details": "Package details",
        "Confirmation.annual.payment": "Annual payment",
        "Confirmation.monthly.payment": "Monthly payment",
        "Confirmation.three.years.payment": "Three Years payment",
        "Confirmation.quarterly.payment": "Quarterly payment",
        "Confirmation.additional.engagement": "will be charged for each additional engagement, on a monthly basis",
        "Confirmation.total.annual.payment": "Total annual payment",
        "Confirmation.total.payment": "Total",
        "Confirmation.first.month.payment": "First month payment",
        "Confirmation.you.saved": "You saved",
        "Confirmation.discount": "discount",
        "Confirmation.first.month": "for the first month",
        "Confirmation.first.year": "for the first year",
        "Confirmation.credits.per.month": "credits per month",
        "Confirmation.credits.per.year": "credits per year",
        "Confirmation.first.period": "for the first period",
        "Confirmation.legal.text": "<p> You'll see 2 initial credit card charges from LIVEPERSON INC:</p>" +
            "<p> 1.A pro-rated charge for this current month (however, you still get the benefit of a full month of credits!)</p>" +
            "<p> 2. Second charge for the Total amount, based on the package you selected. For example, if annual, you'll see the full annual amount charged now, similar with monthly and quarterly. Upon the anniversary date of your account sign-up you will be charged (unless you cancel per our terms) a renewal rate and it will not include a discount.</p>" +
            "<p> Finally, any credits used over the monthly plan amount will be charged at the end of each month.</p>",
        "Confirmation.legal.title": "You are almost on your way!  We want to ensure you don't have any billing surprises:",



        //Errors
        "PleaseEnterValidEmail": "Enter a valid email.",
        "EnterValidPassword": "Password should be at least 8 characters.",
        "PleaseEnterPassword": "Enter a password.",
        "FieldMandatory": "Field is mandatory.",
        "FieldNotValid": "Field is not valid.",
        "InvalidFiled": "{0}: Field is invalid.",
        "MandatoryField": "{0}: Field is mandatory.",
        "InvalidCreditCardNumber": "Check the credit card details to make sure they were entered correctly.",
        "VerificationFailed": "{0} verification failed.",
        "PasswordsNotMatch": "Passwords do not match.",
        "PleaseEnterValidWebsite": "Enter a valid website.",
        "error.enter.valid.name": "Enter a valid name.",
        "error.enter.valid.first.name": "Enter a valid first name.",
        "error.enter.valid.last.name": "Enter a valid last name.",

        // Pages

        // Fields
        "Fields.label.first.name": "First name",
        "Fields.placeholder.first.name": "Enter first name",
        "Fields.label.last.name": "Last name",
        "Fields.placeholder.last.name": "Enter last name",
        "Fields.placeholder.also.used.user.name": "Also used as your user name",

        // Fields Errors
        "Fields.error.enter.first.name": "Enter first name",
        "Fields.error.enter.last.name": "Enter last name",

        // Actions (Buttons & links)
        "Actions.next": "Next",
        "Actions.purchase": "Purchase",
        "Actions.edit": "edit"
    }

});