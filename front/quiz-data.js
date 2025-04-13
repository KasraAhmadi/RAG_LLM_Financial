// Mock quiz data for Youth Financial Trivia
const quizData = {
    
        "borrowing": {
            "questions": [
                {
                    "question": "What should you consider before borrowing money?",
                    "a": "How much it will cost you in the long run.",
                    "b": "Whether you can afford the payments right now.",
                    "c": "What happens if you can\u2019t pay it back.",
                    "d": "All of the above.",
                    "correct": "d"
                },
                {
                    "question": "What does it mean to borrow money?",
                    "a": "Get money for free",
                    "b": "Pay money back with interest and fees",
                    "c": "Keep the money forever",
                    "d": "Use someone else's money",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of creating a budget?",
                    "a": "To make sure you have enough money for the things you need and want.",
                    "b": "To save money for a rainy day.",
                    "c": "To invest your money in stocks, bonds, and real estate.",
                    "d": "To put your money to work for you.",
                    "correct": "a"
                },
                {
                    "question": "What is the main difference between an installment loan and a revolving loan?",
                    "a": "An installment loan is repaid in equal payments, while a revolving loan is repaid in variable amounts.",
                    "c": "An installment loan has a fixed interest rate, while a revolving loan has a variable interest rate.",
                    "b": "An installment loan allows unlimited purchases, while a revolving loan has a preapproved dollar limit.",
                    "d": "An installment loan is typically repaid over a longer period than a revolving loan.",
                    "correct": "a"
                },
                {
                    "question": "What is the main disadvantage of renting to own an item?",
                    "a": "You will never own the item if you miss a payment.",
                    "b": "You will pay more than three times the cash price for the item.",
                    "c": "You will not receive any money back if you choose not to purchase the item.",
                    "d": "You will have to pay interest on the rental payments.",
                    "correct": "b"
                },
                {
                    "question": "What is the difference between layaway and a loan?",
                    "a": "Layaway is a loan, and you have to pay interest on it.",
                    "b": "Layaway is not a loan, and you don\u2019t have to pay interest on it.",
                    "c": "With layaway, you pay the full price upfront, and the store holds the merchandise until you pay in full.",
                    "d": "With layaway, you pay a percentage of the price upfront, and the store holds the merchandise until you pay the balance.",
                    "correct": "b"
                },
                {
                    "question": "What is the main financial concept being discussed in the passage?",
                    "a": "The importance of saving money.",
                    "b": "The different types of loans and their terms.",
                    "c": "The impact of credit on your financial future.",
                    "d": "The benefits of using a credit card.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of taking out a secured loan?",
                    "a": "You are less likely to overspend because you are using collateral.",
                    "b": "You will have more money in your pocket because you are not using collateral.",
                    "c": "You will have a higher credit score because you are using collateral.",
                    "d": "You will have more options for getting a loan because you are using collateral.",
                    "correct": "c"
                },
                {
                    "question": "What is the term for the money you borrow when you use a credit card?",
                    "a": "Principal",
                    "b": "Interest",
                    "c": "Fees",
                    "d": "Repayment",
                    "correct": "a"
                },
                {
                    "question": "What happens when you prepay part of your loan?",
                    "a": "You stop paying interest and finish paying off your loan earlier.",
                    "b": "You reduce interest costs but do not finish paying off your loan earlier.",
                    "c": "You do not save any money and do not finish paying off your loan earlier.",
                    "d": "You could end up owing money to the lender.",
                    "correct": "b"
                },
                {
                    "question": "What is the total cost of the three options that Binh found at the stores?",
                    "a": "$800 + $700 + $600 = $1,100",
                    "b": "$700 + $600 + $500 = $1,800",
                    "c": "$800 + $700 + $600 = $2,100",
                    "d": "$700 + $600 + $500 = $1,800",
                    "correct": "a"
                },
                {
                    "question": "What does TILA require lenders to provide to prospective borrowers before they sign for a loan?",
                    "a": "A detailed breakdown of the loan's interest rate and fees.",
                    "b": "A summary of the loan's terms and conditions.",
                    "c": "A comparison of loan offers from different lenders.",
                    "d": "A calculator to help you determine how much you can afford to borrow.",
                    "correct": "b"
                },
                {
                    "question": "What does the term \"TILA disclosure\" mean in the context of a loan?",
                    "a": "A type of loan that has a fixed interest rate.",
                    "b": "A type of loan that has a variable interest rate.",
                    "c": "A document that lenders must provide to borrowers before they sign a loan agreement.",
                    "d": "A type of loan that has a balloon payment at the end of the loan term.",
                    "correct": "c"
                },
                {
                    "question": "What does the APR reflect?",
                    "a": "The total amount you will pay for the loan.",
                    "b": "The amount of interest you will pay on the loan.",
                    "c": "The total cost of the loan, including interest and fees.",
                    "d": "The amount of money you will borrow.",
                    "correct": "c"
                },
                {
                    "question": "What is the **finance charge** expressed in dollars?",
                    "a": "$5,000",
                    "b": "10%",
                    "c": "$1,000",
                    "d": "$0",
                    "correct": "b"
                },
                {
                    "question": "What does the term \"balloon payment\" refer to in the context of an installment loan?",
                    "a": "A fixed amount paid at the end of the loan term.",
                    "b": "A larger-than-usual payment made at the beginning of the loan term.",
                    "c": "A payment that is lower than the usual amount in the years before the balloon payment comes due.",
                    "d": "A payment that is due at the end of the loan term, but can be paid off earlier without penalty.",
                    "correct": "c"
                },
                {
                    "question": "What is the best way to compare different loan options before borrowing money?",
                    "a": "Evaluate the interest rate of each loan option",
                    "b": "Compare the monthly payments required by each loan option",
                    "c": "Use the TILA disclosures to determine the APRs of each loan option",
                    "d": "Seek help from a housing counseling agency or credit counseling organization",
                    "correct": "c"
                },
                {
                    "question": "What should you consider before getting a loan?",
                    "a": "How much you can afford to pay back each month",
                    "b": "How much it costs to get the loan",
                    "c": "What happens if you can\u2019t pay it back",
                    "d": "All of the above",
                    "correct": "b"
                },
                {
                    "question": "What does the passage say lenders may use to determine whether to approve a loan application?",
                    "a": "A person's credit score",
                    "b": "The purpose of the loan",
                    "c": "A person's income",
                    "d": "All of the above",
                    "correct": "d"
                },
                {
                    "question": "What does the term \"evaluating\" mean in the context of getting a loan?",
                    "a": "To determine if you have enough money to repay the loan.",
                    "b": "To assess your ability to pay back the loan as agreed.",
                    "c": "To check if you have a good credit score.",
                    "d": "To decide if you are eligible for a loan.",
                    "correct": "b"
                },
                {
                    "question": "What does credit history help lenders evaluate?",
                    "a": "How you have used credit in the past.",
                    "b": "Whether you have filed for bankruptcy.",
                    "c": "How many credit accounts you have.",
                    "d": "Whether you have made late payments.",
                    "correct": "a"
                },
                {
                    "question": "What does the term \"capacity\" refer to in the context of borrowing money?",
                    "a": "Your current income",
                    "b": "Your future income",
                    "c": "Your ability to repay the loan",
                    "d": "The amount of money you can afford to borrow",
                    "correct": "d"
                },
                {
                    "question": "What is the definition of capital, according to the passage?",
                    "a": "The money in your checking and savings accounts.",
                    "b": "Your investments and other assets.",
                    "c": "Your net worth.",
                    "d": "Your credit score.",
                    "correct": "c"
                },
                {
                    "question": "What is collateral in a loan?",
                    "a": "An asset that secures a loan",
                    "b": "A condition that determines how you plan to use the loan money",
                    "c": "The amount of money you need to borrow",
                    "d": "The interest rate on the loan",
                    "correct": "a"
                },
                {
                    "question": "What factors will a lender consider when evaluating Shandra's credit history?",
                    "a": "The amount of debt Shandra has relative to her income.",
                    "c": "Shandra's credit score.",
                    "b": "The length of time Shandra has had credit.",
                    "d": "The number of late payments Shandra has made in the past.",
                    "correct": "c"
                },
                {
                    "question": "What does a lender typically consider when evaluating a borrower's creditworthiness?",
                    "a": "The borrower's income and expenses.",
                    "b": "The borrower's credit score and history.",
                    "c": "The borrower's savings and assets.",
                    "d": "The borrower's employment history and job stability.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why lenders consider the creditworthiness of all co-borrowers when evaluating a loan application?",
                    "a": "So that they can determine how much each co-borrower is responsible for paying.",
                    "b": "So that they can ensure that all co-borrowers have a good credit history.",
                    "c": "So that they can assess the overall financial risk of the loan.",
                    "d": "So that they can determine how much the loan will cost each co-borrower.",
                    "correct": "c"
                },
                {
                    "question": "What is the most important thing to consider before co-signing someone else's loan?",
                    "a": "How much money the borrower will need to repay",
                    "b": "Whether the borrower has a good credit history",
                    "c": "How long the loan will need to be repaid",
                    "d": "How much money you will need to borrow",
                    "correct": "b"
                },
                {
                    "question": "What does the term \"capacity\" in the context of credit refer to?",
                    "a": "The amount of money you can borrow from a lender.",
                    "b": "Your ability to repay a loan based on your income and expenses.",
                    "c": "The number of credit cards you have and how many you can manage.",
                    "d": "The age at which you can apply for a loan without parental consent.",
                    "correct": "b"
                },
                {
                    "question": "What is the most important thing to remember when using someone else to manage your money?",
                    "a": "Always trust the person helping you",
                    "b": "Always read the terms of a loan before committing",
                    "c": "Only use someone you know and trust",
                    "d": "Never use someone else to manage your money",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why a person may need to borrow money with assistance from someone else?",
                    "a": "To buy a house.",
                    "b": "To pay for college tuition.",
                    "c": "To manage everyday expenses.",
                    "d": "To invest in stocks.",
                    "correct": "c"
                },
                {
                    "question": "What is the best borrowing option for your needs?",
                    "a": "A line of credit.",
                    "b": "A personal loan.",
                    "c": "A credit card.",
                    "d": "A home equity loan.",
                    "correct": "b"
                },
                {
                    "question": "What should you do after you borrow money?",
                    "a": "Repay the loan as soon as possible.",
                    "b": "Always make payments on time.",
                    "c": "Keep good records and set up automatic payments.",
                    "d": "Set up reminders for when you need to make payments.",
                    "correct": "c"
                },
                {
                    "question": "What is the key financial concept being emphasized in the passage?",
                    "a": "The importance of understanding loan terms before committing to a loan.",
                    "b": "The difference between fixed and variable interest rates.",
                    "c": "The potential consequences of unexpected charges on a loan.",
                    "d": "The importance of being surprised by unexpected charges.",
                    "correct": "a"
                },
                {
                    "question": "What is the main benefit of committing to taking action now?",
                    "a": "It helps you remember what you learned.",
                    "b": "It gives you a sense of control over your financial future.",
                    "c": "It helps you stay motivated and on track.",
                    "d": "It helps you avoid procrastination.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of completing the post-training survey?",
                    "a": "To earn a prize for participating in the training.",
                    "b": "To provide feedback on the training to the instructor.",
                    "c": "To evaluate your understanding of the financial concepts covered in the training.",
                    "d": "To apply for a loan to start a business.",
                    "correct": "c"
                }
            ]
        },
        "buy_car": {
            "questions": [

                {
                    "question": "What is the most important factor to consider when buying a car?",
                    "a": "The purchase price",
                    "b": "The cost of insurance",
                    "c": "The cost of fuel",
                    "d": "Your driving record",
                    "correct": "a"
                },
                {
                    "question": "What are some ongoing costs of owning a car that are not included in the purchase price?",
                    "a": "Insurance",
                    "b": "Fuel",
                    "c": "Maintenance",
                    "d": "License and registration",
                    "correct": "c"
                },
                {
                    "question": "What is the main purpose of the \"Apply It: Taking Stock of Car Costs\" activity in the participant guide?",
                    "a": "To help you estimate one-time and ongoing car costs.",
                    "b": "To compare costs for up to three cars.",
                    "c": "To review the costs so you will be ready to use this tool when you need it.",
                    "d": "To help you find the best car for your budget.",
                    "correct": "a"
                },
                {
                    "question": "What is the purpose of the **seller** row in the table?",
                    "a": "To record the car's make and model.",
                    "b": "To record the car's year of production.",
                    "c": "To identify the seller of the car.",
                    "d": "To record the car's advertised price.",
                    "correct": "c"
                },
                {
                    "question": "What is the down payment?",
                    "a": "The amount of money you pay upfront when purchasing a car.",
                    "b": "The amount of money you owe on your car loan.",
                    "c": "The fees your state charges to register new vehicles, assign titles, and issue license plates.",
                    "d": "The amount of money you pay directly to the state government organization when you register your car.",
                    "correct": "a"
                },
                {
                    "question": "What is the purpose of car insurance?",
                    "a": "To cover the costs of car accidents.",
                    "b": "To pay for the property damage in a car accident.",
                    "c": "To cover medical expenses for people involved in a car accident, no matter who is at fault.",
                    "d": "To pay for the car loan payment.",
                    "correct": "c"
                },
                {
                    "question": "What is the main advantage of leasing a car compared to buying one?",
                    "a": "Leasing allows you to drive a new car for a lower monthly payment.",
                    "b": "Leasing gives you the option to return the car at the end of the lease term.",
                    "c": "Leasing is a good way to save money on maintenance and repairs.",
                    "d": "Leasing is a way to buy a car without having to make a large down payment.",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason why a lease agreement may charge additional fees if you exceed the mileage limit?",
                    "a": "The car depreciates more during the life of the lease.",
                    "b": "You are responsible for excess wear and damage and any missing equipment.",
                    "c": "The lease terms may not let you move the car out of state or out of the country.",
                    "d": "The deal you are considering may have different rules for moving the car.",
                    "correct": "a"
                },
                {
                    "question": "What is the total one-time cost of buying a car according to the scenario?",
                    "a": "The down payment only",
                    "b": "The down payment plus taxes and fees",
                    "c": "The down payment plus taxes, fees, and insurance",
                    "d": "The down payment plus taxes, fees, insurance, and maintenance",
                    "correct": "b"
                },
                {
                    "question": "What is the difference in total cost of ownership between the two cars?",
                    "a": "$300",
                    "b": "$1,350",
                    "c": "$2,350",
                    "d": "$3,350",
                    "correct": "c"
                },
                {
                    "question": "What is the most important thing to consider when buying a car using a loan?",
                    "a": "The total cost of the car.",
                    "b": "The monthly payment amount.",
                    "c": "The interest rate on the loan.",
                    "d": "The length of the loan.",
                    "correct": "c"
                },
                {
                    "question": "What is the key benefit of comparing multiple car loan offers?",
                    "a": "It helps you get a better deal on the car.",
                    "b": "It helps you qualify for a loan with a lower interest rate.",
                    "c": "It helps you avoid paying more in interest over the life of the loan.",
                    "d": "It helps you find a car that fits your budget.",
                    "correct": "c"
                },
                {
                    "question": "What is the down payment?",
                    "a": "The amount of money you pay upfront for the car.",
                    "b": "The amount of money you pay each month for the car loan.",
                    "c": "The total cost of the car, including the down payment and the loan.",
                    "d": "The interest rate on the car loan.",
                    "correct": "a"
                },
                {
                    "question": "What is the total cost you pay each year to borrow money for a car loan, including the car loan interest rate and additional fees?",
                    "a": "The total cost you pay each year to borrow money for a car loan.",
                    "b": "The car loan interest rate only.",
                    "c": "The additional fees only.",
                    "d": "The total cost you pay each year to borrow money for a car loan, including the car loan interest rate and additional fees.",
                    "correct": "d"
                },
                {
                    "question": "What can happen if you do not make your car loan payments on time and as agreed?",
                    "a": "Your credit score will increase.",
                    "b": "You will not have to pay any late fees.",
                    "c": "Your car will be repossessed.",
                    "d": "You will not have to worry about debt collectors.",
                    "correct": "c"
                },
                {
                    "question": "What is the main purpose of a credit report?",
                    "a": "To show how much money you have in your bank account.",
                    "b": "To show how well you have paid back what you owe in the past.",
                    "c": "To show how much you have to pay for a product or service.",
                    "d": "To show how many points you have earned on a rewards program.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why lenders charge higher interest rates on loans to people with negative information in their credit history?",
                    "a": "They want to make a profit from the loan.",
                    "b": "They want to help the borrower build a good credit history.",
                    "c": "They want to punish the borrower for past mistakes.",
                    "d": "They want to ensure the borrower can afford the loan payments.",
                    "correct": "d"
                },
                {
                    "question": "What is the main benefit of having a co-signer on a loan?",
                    "a": "The co-signer takes full responsibility to pay back the loan.",
                    "b": "The co-signer is not legally responsible for repaying the loan.",
                    "c": "The co-signer will be responsible for repaying the loan only if the borrower stops making payments.",
                    "d": "The co-signer will have a negative impact on their credit score.",
                    "correct": "a"
                },
                {
                    "question": "What is the best way to save money when buying a car?",
                    "a": "Buy from the seller offering the highest interest rate on a car loan.",
                    "b": "Compare multiple car loan offers from different lenders.",
                    "c": "Consider leasing a car instead of buying one.",
                    "d": "None of the above.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of writing down your financial goals?",
                    "a": "It helps you remember what you want to achieve.",
                    "b": "It motivates you to take action.",
                    "c": "It helps you track your progress.",
                    "d": "It gives you a sense of satisfaction.",
                    "correct": "b"
                },
                {
                    "question": "What is the main goal of Money Smart?",
                    "a": "To help people save money.",
                    "b": "To teach people how to invest in stocks and bonds.",
                    "c": "To help people manage their debt.",
                    "d": "To empower people to make informed financial decisions.",
                    "correct": "d"
                }
            ]
        },
        "credit": {
            "questions": [
                {
                    "question": "What is the main reason why your credit history can affect your access to these services?",
                    "a": "It shows your ability to manage debt.",
                    "b": "It shows your income level.",
                    "c": "It shows your creditworthiness.",
                    "d": "It shows your age.",
                    "correct": "c"
                },
                {
                    "question": "What does a credit report show about a person's financial history?",
                    "a": "The total amount of money a person has borrowed.",
                    "b": "A person's track record of paying debts.",
                    "c": "The number of accounts a person has.",
                    "d": "The current balance of a person's accounts.",
                    "correct": "b"
                },
                {
                    "question": "What is one exception to the general rule that people under 18 do not have credit reports?",
                    "a": "They have an authorized user on their credit card account.",
                    "b": "They took out a student loan before turning 18.",
                    "c": "Their information was used for identity theft or fraud.",
                    "d": "All of the above.",
                    "correct": "b"
                },
                {
                    "question": "What is included in a credit report?",
                    "a": "Personal information, such as name and address.",
                    "b": "Information about how you have handled credit in the past, including payment history, credit utilization, account history, and inquiries.",
                    "c": "Information about your job and income.",
                    "d": "All of the above.",
                    "correct": "b"
                },
                {
                    "question": "What is the purpose of checking your credit report?",
                    "a": "To see how much credit you can get.",
                    "b": "To find out how much debt you have.",
                    "c": "To check if there are any errors on your report.",
                    "d": "To see how well you are using your credit.",
                    "correct": "c"
                },
                {
                    "question": "What is the purpose of the consumer reporting companies, according to the passage?",
                    "a": "To provide credit reports to financial institutions.",
                    "b": "To provide specialized reports on a consumer's history to other companies.",
                    "c": "To collect and maintain credit information for individuals.",
                    "d": "To help individuals manage their credit and debt.",
                    "correct": "b"
                },
                {
                    "question": "What does a good credit score indicate about a person's financial behavior?",
                    "a": "A good credit score indicates a person is likely to make timely payments on their debts.",
                    "b": "A good credit score indicates a person is likely to spend more money than they have.",
                    "c": "A good credit score indicates a person is likely to make timely payments on their debts.",
                    "d": "A good credit score indicates a person is likely to have a high income.",
                    "correct": "c"
                },
                {
                    "question": "What is the purpose of an adverse action notice?",
                    "a": "To notify you of your right to dispute a credit report error.",
                    "b": "To inform you of your right to a free credit report after an adverse action.",
                    "c": "To explain why a company denied you credit, service, or employment.",
                    "d": "To provide you with information on how to improve your credit score.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of risk-based pricing in lending?",
                    "a": "To ensure that borrowers with low credit scores receive favorable loan terms.",
                    "b": "To help lenders determine the likelihood that a borrower will repay a loan as agreed.",
                    "c": "To provide borrowers with accurate information about their credit reports and scores.",
                    "d": "To help lenders decide whether or not to approve a loan application.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why someone without a credit history may have a harder time getting credit or a loan?",
                    "a": "Lack of financial stability",
                    "b": "Lack of credit reports and scores",
                    "c": "Lack of income",
                    "d": "Lack of a social security number",
                    "correct": "b"
                },
                {
                    "question": "What is the importance of checking your credit report regularly?",
                    "a": "To avoid identity theft",
                    "b": "To improve your credit score",
                    "c": "To access new job opportunities",
                    "d": "To get a loan from a bank",
                    "correct": "a"
                },
                {
                    "question": "What is a key factor that can affect your credit score?",
                    "a": "Paying bills on time",
                    "b": "Keeping credit card balances low",
                    "c": "Having a mix of different credit types",
                    "d": "Having a high income",
                    "correct": "b"
                },
                {
                    "question": "What is one important step you can take to maintain a good credit score?",
                    "a": "Paying your bills on time",
                    "b": "Keeping your credit card balances low",
                    "c": "Having a mix of different credit types",
                    "d": "Checking your credit report regularly",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of a credit score?",
                    "a": "To help lenders determine how likely you are to repay a loan.",
                    "b": "To help you qualify for a loan with a lower interest rate.",
                    "c": "To help you understand your credit history.",
                    "d": "To help you make informed financial decisions.",
                    "correct": "a"
                },
                {
                    "question": "What does a credit score measure?",
                    "a": "Your ability to pay back a loan",
                    "b": "Your income level",
                    "c": "The number of credit cards you have",
                    "d": "The number of years you've had credit",
                    "correct": "a"
                },
                {
                    "question": "What percentage of your FICO\u00ae score is determined by your payment history?",
                    "a": "20%",
                    "d": "55%",
                    "b": "35%",
                    "c": "45%",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why credit scores may not be the same as the ones used to make decisions about you?",
                    "a": "The credit score you order may not be accurate.",
                    "b": "The credit score you order may not be up to date.",
                    "c": "The credit score you order may not be the same as the one used by the lender.",
                    "d": "The credit score you order may not be reliable.",
                    "correct": "c"
                },
                {
                    "question": "What effect do you think Alex's actions had on his credit score?",
                    "a": "When Alex paid off his credit card balance in full each month, his credit score likely went up.",
                    "b": "When Alex made only the minimum payments on his credit card, his credit score likely went down.",
                    "c": "When Alex opened a new credit card account, his credit score likely remained the same.",
                    "d": "When Alex closed his oldest credit card account, his credit score likely went down.",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason why people with \u201cGood,\u201d \u201cVery Good,\u201d or \u201cExceptional\u201d credit scores have access to more financial products and services?",
                    "a": "They have more money to invest.",
                    "b": "They have better credit scores.",
                    "c": "They are more likely to be employed.",
                    "d": "They are more likely to be approved for loans.",
                    "correct": "b"
                },
                {
                    "question": "What can you do to improve your credit score?",
                    "a": "Pay your bills on time.",
                    "b": "Save money in a bank account.",
                    "c": "Apply for a credit card.",
                    "d": "Use cash instead of credit cards.",
                    "correct": "a"
                },
                {
                    "question": "What is a credit score, and why is it important?",
                    "a": "A credit score is a number that shows how well you manage your money.",
                    "b": "A credit score is a report card for how well you use credit.",
                    "c": "A credit score is a number that lenders use to decide if they will give you credit.",
                    "d": "A credit score is a number that shows how much money you have in your bank account.",
                    "correct": "b"
                },
                {
                    "question": "Why is it important to get and review your credit reports at least once every 12 months?",
                    "a": "To check if there are any errors on your report that could be hurting your credit score.",
                    "b": "To make sure that all of your accounts are accurately reported and up-to-date.",
                    "c": "To check if there are any fraudulent accounts on your report that could be hurting your credit score.",
                    "d": "To make sure that your credit score is accurate and reflects your financial habits.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of having a productive credit history, according to the passage?",
                    "a": "It can help you qualify for certain jobs.",
                    "b": "It can make your financial life easier by getting you loans and renting apartments.",
                    "c": "It can help you avoid paying large deposits for utilities.",
                    "d": "It can help you qualify for certain loans.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of getting and reviewing your credit reports regularly?",
                    "a": "To check if the information is accurate",
                    "b": "To avoid being charged a fee for third-party websites",
                    "c": "To catch errors or spot identity theft more quickly",
                    "d": "To get free credit scores",
                    "correct": "c"
                },
                {
                    "question": "Which of the following is a way to avoid falling for fake or phony websites that promise free credit reports?",
                    "a": "Only use websites that have the name \"free credit report\" in their address.",
                    "b": "Be cautious of websites that have misspellings in their addresses, like annualcreditreport.com.",
                    "c": "Sign up for free credit monitoring services to avoid scams.",
                    "d": "Provide your personal information to these websites to avoid any potential risks.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of getting your credit reports?",
                    "a": "You can fix any errors on your reports and improve your credit score.",
                    "b": "You can see how your credit reports are used to determine your credit score.",
                    "c": "You can check if there are any fraudulent activities on your reports.",
                    "d": "You can get free pizza if you order your credit reports.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why consumers are entitled to a free credit report from each nationwide credit reporting agency every year?",
                    "a": "To check their credit score.",
                    "b": "To see if they have been denied credit, service, an apartment, or employment.",
                    "c": "To get another free credit report directly from each nationwide credit reporting agency every year in several specific instances.",
                    "d": "To see if their personal information has been compromised due to fraud.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why it is important to review your credit reports?",
                    "a": "To check if your identity has been stolen.",
                    "b": "To make sure your credit score is high.",
                    "c": "To dispute any incorrect information.",
                    "d": "To avoid paying bills on time.",
                    "correct": "c"
                },
                {
                    "question": "What information is typically included in the **personal or identifying information section** of a credit report?",
                    "a": "Your full name and any nicknames you've used.",
                    "b": "Your current and former addresses and phone numbers.",
                    "c": "Your date of birth, social security number, and employment history.",
                    "d": "All of the above.",
                    "correct": "d"
                },
                {
                    "question": "What is the main purpose of a credit report?",
                    "a": "To show how much money you have borrowed and owe.",
                    "b": "To show your credit score and how lenders view you.",
                    "c": "To show your employment history and income.",
                    "d": "To show how many credit cards you have and how much you owe on them.",
                    "correct": "b"
                },
                {
                    "question": "What should you do if you find inaccurate or outdated information on your credit report?",
                    "a": "Ignore it and continue using the credit card.",
                    "b": "Contact the credit reporting agency to correct the mistake.",
                    "c": "Use the credit card even though the information is incorrect.",
                    "d": "Ignore the credit report altogether.",
                    "correct": "b"
                },
                {
                    "question": "What is NOT true about credit scores?",
                    "a": "Credit scores are a snapshot of your credit history at a point in time.",
                    "b": "Credit scores can change as new information is added to your credit reports and old or incorrect information is removed.",
                    "c": "You are guaranteed free credit scores like you are free credit reports.",
                    "d": "Several companies make and sell credit scores, including FICO\u00ae and VantageScore\u00ae.",
                    "correct": "c"
                },
                {
                    "question": "What should you do at least once every 12 months to ensure the accuracy of your credit reports?",
                    "a": "Check your credit score.",
                    "b": "Pay your bills on time.",
                    "c": "Dispute any errors on your report.",
                    "d": "All of the above.",
                    "correct": "d"
                },
                {
                    "question": "What is the best way to dispute errors on your credit report?",
                    "a": "Online",
                    "b": "By phone",
                    "c": "By mail",
                    "d": "In person",
                    "correct": "a"
                },
                {
                    "question": "What should you do if you find errors on your credit report?",
                    "a": "Ignore them and hope they go away.",
                    "b": "Dispute them immediately and follow up.",
                    "c": "Contact the credit reporting agency to report the errors.",
                    "d": "Pay to have them corrected.",
                    "correct": "b"
                },
                {
                    "question": "What is the best way to fix errors on your credit report?",
                    "a": "Contact the credit reporting agency directly.",
                    "c": "Wait for the errors to be corrected automatically.",
                    "b": "Contact the Federal Trade Commission (FTC) for help.",
                    "d": "Use a credit repair service.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why negative information on your credit report can only be reported for seven years?",
                    "a": "To give you time to pay off your debts.",
                    "b": "To help lenders make informed decisions about loan applications.",
                    "c": "To protect your credit score from being negatively affected.",
                    "d": "To comply with the Fair Credit Reporting Act.",
                    "correct": "d"
                },
                {
                    "question": "What is the main reason why credit reporting agencies can report negative credit information even if it's old?",
                    "a": "They can use it to evaluate job applicants' financial stability.",
                    "b": "They can use it to determine how much credit a person can get.",
                    "c": "They can use it to determine the cost of life insurance.",
                    "d": "They can use it to evaluate a person's ability to pay rent.",
                    "correct": "b"
                },
                {
                    "question": "What happens to the debt after seven years have passed since the date of first delinquency?",
                    "a": "It is forgiven and you no longer owe anything.",
                    "b": "It is sold to another company and you start paying a new interest rate.",
                    "c": "It is removed from your credit report after seven years.",
                    "d": "You will have to pay the full amount of the debt again.",
                    "correct": "b"
                },
                {
                    "question": "What is the longest amount of time that a delinquent account can be reported on a credit report?",
                    "a": "6 months",
                    "b": "1 year",
                    "c": "2 years",
                    "d": "3 years",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why you should keep a paper trail when disputing errors on your credit report?",
                    "a": "So you have evidence of when you sent the dispute to the credit reporting agency.",
                    "b": "So you can prove that the credit reporting agency received your dispute.",
                    "c": "So you can track the progress of your dispute.",
                    "d": "So you can avoid paying fees for disputing errors on your credit report.",
                    "correct": "b"
                },
                {
                    "question": "What is the purpose of including your signature in the letter you are writing to dispute credit report information?",
                    "a": "To prove that you are over 18 years old.",
                    "b": "To show that you are the person who is disputing the information.",
                    "c": "To prove that you have the right to request the information be corrected or removed.",
                    "d": "To show that you are a credit expert.",
                    "correct": "c"
                },
                {
                    "question": "What should you do before making a dispute to a financial institution?",
                    "a": "Make copies of the original documents to support your dispute.",
                    "b": "Notify the financial institution in writing of your dispute.",
                    "c": "Call the financial institution to dispute the charge over the phone.",
                    "d": "Go to the financial institution in person to dispute the charge.",
                    "correct": "a"
                },
                {
                    "question": "What should you do if you want to add a corrected item to your credit report after it has been changed or deleted?",
                    "a": "Ask the credit reporting agency to put it back in your file.",
                    "b": "Request that the credit reporting agency send notice of the correction to any individual or business that received your report in the past six months or anyone who received your report for employment purposes in the past two years.",
                    "c": "Ignore the correction and let the mistake stay on your report.",
                    "d": "File a new dispute for the same item.",
                    "correct": "b"
                },
                {
                    "question": "What should you do if you notice an error on your credit report?",
                    "a": "Ignore it and hope it corrects itself.",
                    "b": "Contact the credit reporting agency to dispute the error.",
                    "c": "Pay the error and hope it doesn\u2019t hurt your credit score.",
                    "d": "Use a magic spell to make the error disappear.",
                    "correct": "b"
                },
                {
                    "question": "What should you do if you find errors on your credit report?",
                    "a": "Ignore them and hope they fix themselves.",
                    "b": "Dispute them immediately and keep records.",
                    "c": "Pay to have them fixed and hope for the best.",
                    "d": "Do nothing and let the errors stay.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of having a good credit history?",
                    "a": "It can help you get loans at lower interest rates.",
                    "b": "It can help you qualify for better job opportunities.",
                    "c": "It can help you save money on purchases.",
                    "d": "It can help you avoid debt.",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of checking your credit report?",
                    "a": "To see if you have any outstanding debts that you are not aware of.",
                    "b": "To make sure your credit history is accurate and up-to-date.",
                    "c": "To determine if you are eligible for a loan or credit card.",
                    "d": "To see if you have a good credit score.",
                    "correct": "b"
                },
                {
                    "question": "What happens to your credit score when you make your loan payments on time?",
                    "a": "Your credit score increases.",
                    "b": "Your credit score stays the same.",
                    "c": "Your credit score decreases.",
                    "d": "You don't need to make loan payments.",
                    "correct": "c"
                },
                {
                    "question": "What should the person focus on first in order to build a strong credit history?",
                    "a": "Building credit.",
                    "b": "Building an alternative credit history.",
                    "c": "Repairing and improving credit.",
                    "d": "Maintaining credit.",
                    "correct": "a"
                },
                {
                    "question": "What does the term \"credit\" mean?",
                    "a": "A way to borrow money from a bank or other lender.",
                    "b": "A measure of how well you manage your money.",
                    "c": "A type of financial product that allows you to save money over time.",
                    "d": "A service that helps you make smart financial decisions.",
                    "correct": "a"
                },
                {
                    "question": "What can you do to start building a positive alternative credit history?",
                    "a": "Use your debit card responsibly to make purchases and pay bills on time.",
                    "b": "Use your bank\u2019s mobile banking app to make payments on time.",
                    "c": "Use your credit card to make purchases and pay bills on time.",
                    "d": "All of the above.",
                    "correct": "a"
                },
                {
                    "question": "What does a good credit score do for you?",
                    "a": "It helps you qualify for loans and credit cards.",
                    "b": "It saves you money on interest charges.",
                    "c": "It shows how likely you are to pay back a loan.",
                    "d": "It helps you qualify for lower interest rates on loans and credit cards.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of building a credit history?",
                    "a": "To buy things without saving money first",
                    "b": "To show lenders you can manage credit responsibly",
                    "c": "To avoid paying taxes on credit card purchases",
                    "d": "To get a loan without a job",
                    "correct": "b"
                },
                {
                    "question": "What is an alternative credit history?",
                    "a": "A record of how well you manage your money.",
                    "b": "A way to show that you can pay back money you borrow.",
                    "c": "A report that shows how you handle credit.",
                    "d": "A record of how well you save money.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of maintaining a good credit history?",
                    "a": "It helps you qualify for loans and credit cards.",
                    "b": "It allows you to negotiate better interest rates.",
                    "c": "It helps you build a positive credit score.",
                    "d": "It makes you eligible for more credit products.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why you should avoid closing accounts unless it makes financial sense to do so?",
                    "a": "To keep your credit score high.",
                    "b": "To avoid paying fees associated with closing accounts.",
                    "c": "To keep your accounts open and in good standing.",
                    "d": "To avoid hurting your credit score.",
                    "correct": "d"
                },
                {
                    "question": "What is the best way to get help with your credit history?",
                    "a": "Call 636-555-0178",
                    "b": "Visit a bank branch",
                    "c": "Use an online credit repair service",
                    "d": "Ask a friend or family member for help",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of contacting a nonprofit consumer credit counseling service, according to the passage?",
                    "a": "To get help with managing debt.",
                    "b": "To get help with creating a budget.",
                    "c": "To get help with finding affordable housing.",
                    "d": "To get help with investing in the stock market.",
                    "correct": "a"
                },
                {
                    "question": "What are some benefits of using a credit repair company?",
                    "a": "They can help you fix errors on your credit report for free.",
                    "b": "They can help you manage multiple debts by combining them into one loan.",
                    "c": "They can help you avoid paying debt collectors.",
                    "d": "They can help you build credit by making on-time payments.",
                    "correct": "d"
                },
                {
                    "question": "What is the main benefit of debt consolidation?",
                    "a": "It allows you to make one monthly payment instead of many.",
                    "b": "It reduces the amount of interest you pay over time.",
                    "c": "It helps you avoid late fees and penalties.",
                    "d": "It improves your credit score.",
                    "correct": "b"
                },
                {
                    "question": "What should you do before signing up for a credit repair company's services?",
                    "a": "Ignore the warning signs and sign up right away.",
                    "b": "Research the company and its reputation online.",
                    "c": "Ask friends and family for recommendations.",
                    "d": "Pay the company's fees without knowing their reputation.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of placing an initial fraud alert?",
                    "a": "To protect your credit score",
                    "b": "To protect your identity from being stolen",
                    "c": "To prove that you are the victim of identity theft",
                    "d": "To alert creditors and other businesses to verify your identity.",
                    "correct": "d"
                },
                {
                    "question": "What is the Fair Credit Reporting Act (FCRA)?",
                    "a": "A law that helps you fix errors on your credit report.",
                    "b": "A law that protects your credit score from being affected by errors on your credit report.",
                    "c": "A law that requires credit reporting agencies to provide accurate information on your credit report.",
                    "d": "A law that allows credit reporting agencies to keep errors on your credit report forever.",
                    "correct": "c"
                },
                {
                    "question": "What should you do if you find errors on your credit reports?",
                    "a": "Ignore them and hope they go away.",
                    "b": "Contact the credit reporting agency to dispute them.",
                    "c": "Make a plan to pay off the errors.",
                    "d": "Wait for your credit score to improve on its own.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of creating a budget?",
                    "a": "To save money for emergencies.",
                    "b": "To track your spending habits.",
                    "c": "To plan for long-term goals.",
                    "d": "To invest in stocks and bonds.",
                    "correct": "c"
                }
            ]
        },
        "financial_decision": {
            "questions": [
                {
                    "question": "What is the main benefit of setting SMART goals according to the passage?",
                    "a": "They provide a clear roadmap for achieving your dreams.",
                    "b": "They help you prioritize your goals based on their importance.",
                    "c": "They help you measure your progress towards achieving your goals.",
                    "d": "They help you stay motivated and focused on your goals.",
                    "correct": "b"
                },
                {
                    "question": "What does the passage say about how to use money to reach your goals?",
                    "a": "Use money to buy things you don't need.",
                    "b": "Set short-term goals to reach your desired results.",
                    "c": "Focus your efforts on saving for long-term goals.",
                    "d": "All of the above.",
                    "correct": "b"
                },
                {
                    "question": "What is the SMART goal characteristics that helps you to make sure that your goals are clear and achievable?",
                    "a": "Setting specific and measurable goals",
                    "c": "Setting achievable and measurable goals",
                    "d": "Setting specific and relevant goals",
                    "b": "Setting relevant and time-bound goals",
                    "correct": "a"
                },
                {
                    "question": "What is the most important aspect of setting a goal, according to the passage?",
                    "a": "Defining your goal",
                    "c": "Setting a specific time frame",
                    "b": "Measuring your progress",
                    "d": "Making sure your goal is achievable",
                    "correct": "a"
                },
                {
                    "question": "What does the term \u201cSMART\u201d stand for in the context of setting financial goals?",
                    "a": "Specific, Measurable, Achievable, Relevant, Time-bound.",
                    "b": "Specific, Measurable, Attainable, Realistic, Time-bound",
                    "c": "Specific, Measurable, Achievable, Relevant, Time-bound",
                    "d": "Specific, Measurable, Affordable, Realistic, Time-bound",
                    "correct": "a"
                },
                {
                    "question": "What is the main benefit of writing down your goals?",
                    "a": "It helps you remember your goals.",
                    "b": "It motivates you to work harder towards your goals.",
                    "c": "It gives you a sense of accomplishment when you achieve them.",
                    "d": "It helps you track your progress towards your goals.",
                    "correct": "d"
                },
                {
                    "question": "What does the letter \"S\" in SMART stand for?",
                    "a": "Specific",
                    "c": "Success",
                    "d": "Sports",
                    "b": "Smart",
                    "correct": "a"
                },
                {
                    "question": "What is the main benefit of understanding your values when setting financial goals?",
                    "a": "It helps you save more money.",
                    "b": "It helps you invest your money wisely.",
                    "c": "It helps you avoid debt.",
                    "d": "It helps you achieve your financial goals faster.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why it is important to consider your values when making financial decisions?",
                    "a": "So that you can save money and have more of it.",
                    "b": "So that you can invest your money and make more of it.",
                    "c": "So that you can donate your money to help others.",
                    "d": "So that you can buy things you want and enjoy life.",
                    "correct": "c"
                },
                {
                    "question": "What is the main purpose of the exercise \u201cApply It: My Values\u201d in the participant guide?",
                    "a": "To help you understand how your values impact your financial decisions.",
                    "b": "To help you prioritize your financial goals based on your values.",
                    "c": "To help you create a budget based on your values.",
                    "d": "To help you understand how your values align with your financial goals.",
                    "correct": "b"
                },
                {
                    "question": "What should you do when your values and priorities differ from those of your __________?",
                    "a": "Community",
                    "b": "Culture",
                    "c": "Family",
                    "d": "Friends",
                    "correct": "c"
                },
                {
                    "question": "Which financial goal is most important to Aaliyah and Jada?",
                    "a": "Saving for a car",
                    "b": "Saving for college",
                    "c": "Saving for a vacation",
                    "d": "Saving for retirement",
                    "correct": "b"
                },

                {
                    "question": "What is the most important step in prioritizing financial goals?",
                    "a": "Create a budget to track your spending.",
                    "b": "Set financial goals based on your values.",
                    "c": "Prioritize your goals based on their importance.",
                    "d": "Review your budget regularly to make adjustments.",
                    "correct": "b"
                },
                {
                    "question": "What is an external influence that can affect how much money people have to spend?",
                    "a": "Advertising",
                    "b": "Government policies",
                    "c": "Social norms",
                    "d": "Personal preferences",
                    "correct": "c"
                },
                {
                    "question": "What is the main idea of the section?",
                    "a": "External influences impact financial choices.",
                    "b": "Money can buy happiness.",
                    "c": "Financial goals are important for the future.",
                    "d": "It's okay to spend money on things you don't need.",
                    "correct": "a"
                },
                {
                    "question": "What external influence is most likely to shape your financial decisions based on what you see and hear from others?",
                    "a": "Friends and peers",
                    "b": "Celebrities and athletes",
                    "c": "Social media and social media influencers",
                    "d": "Advertisements",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason why unproductive external influences can make it harder to achieve your financial goals?",
                    "a": "They distract you from your goals.",
                    "b": "They make you feel guilty about spending money.",
                    "c": "They make you doubt your ability to make good financial decisions.",
                    "d": "They make you feel pressured to keep up with others financially.",
                    "correct": "c"
                },
                {
                    "question": "What is an external influence that might tell you to spend money without thinking about your financial goals?",
                    "a": "Friends and peers.",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason why influencers can get things for free or cheap?",
                    "a": "They work hard for their own money.",
                    "b": "They get things for free from brands.",
                    "c": "They save up for the things they want.",
                    "d": "They use their social media influence to get things for free.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why advertisers spend money on influencers to promote their products?",
                    "a": "To make people feel good about themselves by buying their products.",
                    "b": "To influence how people spend their money and make impulse purchases.",
                    "c": "To help people understand the benefits of their products and make informed purchasing decisions.",
                    "d": "To create a sense of urgency and pressure to buy their products now.",
                    "correct": "b"
                },
                {
                    "question": "What is an example of a tactic that advertisers use to influence people to spend money?",
                    "a": "Creating a false sense of urgency to convince people to buy something they don't need.",
                    "b": "Giving people little time to think about a purchase to make it easier to spend money.",
                    "c": "Offering a 30%-off coupon from a favorite store to encourage impulse buying.",
                    "d": "Posting tempting sales at the mall to get people to buy something they don't need.",
                    "correct": "a"
                },
                {
                    "question": "What should you do if you want to buy a new video game, but you need the money for a more important long-term goal?",
                    "a": "Buy the video game now and hope you can make up for it later.",
                    "b": "Save up for the video game and sacrifice it for now.",
                    "c": "Ask your parents to buy it for you.",
                    "d": "Use your allowance to buy it and then save up for the long-term goal.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why it is important to take action towards improving your financial literacy?",
                    "a": "So that you can avoid debt.",
                    "b": "So that you can save money.",
                    "c": "So that you can invest in stocks.",
                    "d": "So that you can budget better.",
                    "correct": "d"
                },
                {
                    "question": "What is the main purpose of the post-training survey in this passage?",
                    "a": "To help the trainer evaluate the effectiveness of the training.",
                    "b": "To encourage participants to take the next step in their financial education journey.",
                    "c": "To provide an opportunity for participants to win a prize.",
                    "d": "To collect data for future financial education programs.",
                    "correct": "b"
                }
            ]
        },
        "financial_institution": {
            "questions": [
                {
                    "question": "What is the main benefit of considering your needs before selecting financial products and services?",
                    "a": "To avoid overspending",
                    "b": "To ensure financial stability",
                    "c": "To compare costs and features",
                    "d": "To choose products based on convenience",
                    "correct": "b"
                },
                {
                    "question": "What is one way to earn interest on your money?",
                    "a": "By putting your money in a savings account",
                    "d": "By playing the lottery",
                    "b": "By buying stocks or bonds",
                    "c": "By starting a small business",
                    "correct": "a"
                },
                {
                    "question": "What is the main difference between banks and credit unions?",
                    "a": "Banks have more customers, while credit unions have more members.",
                    "b": "Banks have fewer restrictions on who can open accounts, while credit unions have more restrictive requirements.",
                    "c": "Banks typically charge fewer fees than credit unions.",
                    "d": "Credit unions are more likely to offer better interest rates than banks.",
                    "correct": "b"
                },
                {
                    "question": "What does FDIC insurance cover?",
                    "a": "All types of investments, even if they were purchased at an insured bank.",
                    "b": "Depositors\u2019 accounts at each insured bank, dollar-for-dollar, including principal and any accrued interest through the date of the insured bank\u2019s closing, up to the insurance limit (at least $250,000 per depositor).",
                    "c": "Items in a safe deposit box.",
                    "d": "None of the above.",
                    "correct": "b"
                },
                {
                    "question": "What does the NCUA insurance protect depositors from?",
                    "a": "Loss of their entire savings.",
                    "b": "Theft or fraud of their savings.",
                    "c": "Investment losses.",
                    "d": "The credit union going out of business.",
                    "correct": "d"
                },
                {
                    "question": "What is an advantage of using a financial institution's automated teller machines (ATMs)?",
                    "a": "You can use any ATM to access your account, regardless of where you bank.",
                    "b": "ATMs are more secure than using a retail location for banking needs.",
                    "c": "ATMs offer more services than retail locations, such as bill-paying and P2P payments.",
                    "d": "ATMs are only available at financial institutions that do not have retail locations.",
                    "correct": "a"
                },
                {
                    "question": "What are deposit products used for?",
                    "a": "To save money for the future",
                    "b": "To borrow money for immediate needs",
                    "c": "To invest in stocks or real estate",
                    "d": "To pay bills and make purchases",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of a savings account?",
                    "a": "To earn interest",
                    "d": "To pay bills",
                    "b": "To set money aside for the future",
                    "c": "To make frequent deposits and withdrawals",
                    "correct": "b"
                },
                {
                    "question": "What is the main advantage of using credit products?",
                    "a": "You don't have to pay interest on the amount you borrow.",
                    "b": "You can borrow more money than you actually need.",
                    "c": "You can pay off your debt more quickly than with other types of loans.",
                    "d": "You can build your credit score faster than with other types of loans.",
                    "correct": "c"
                },
                {
                    "question": "What are some of the ways that banks and credit unions can help you manage your money?",
                    "a": "By providing financial advice.",
                    "b": "By offering loans and credit cards.",
                    "c": "By providing bill-paying services.",
                    "d": "By selling insurance products.",
                    "correct": "c"
                },
                {
                    "question": "What should you consider before borrowing money from a check-cashing store?",
                    "a": "How much it costs to borrow the money.",
                    "b": "Whether the store will accept your video game as collateral.",
                    "c": "Whether you will have to pay interest on the loan.",
                    "d": "Whether the store will provide you with a copy of the loan agreement.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why Susannah may want to consider her financial management needs before selecting financial products and services?",
                    "a": "To ensure she has enough money for unexpected expenses.",
                    "b": "To build credit and improve her financial score.",
                    "c": "To save money for a specific goal or purpose.",
                    "d": "To pay bills and manage her debt more effectively.",
                    "correct": "c"
                },
                {
                    "question": "What does the term \u201cbudget\u201d mean in the context of personal finance?",
                    "a": "A plan for how you want to spend your money",
                    "b": "A list of all the things you need to buy",
                    "c": "A way to track your spending to make sure you stay within your means.",
                    "d": "A goal for how much money you want to save",
                    "correct": "c"
                },
                {
                    "question": "Which of the following is the most important factor to consider when choosing a financial institution?",
                    "a": "The institution's location",
                    "b": "The types of products and services offered",
                    "c": "The fees and charges associated with the account.",
                    "d": "The reputation of the institution",
                    "correct": "c"
                },
                {
                    "question": "Which question in the Savings Account section is the most important?",
                    "a": "How long does it take to open the account?",
                    "b": "What fees are associated with the account?",
                    "c": "Can I access my money at any time?",
                    "d": "What interest rate does the account offer?",
                    "correct": "c"
                },
                {
                    "question": "What is the most important step in making smart financial decisions, according to the passage?",
                    "a": "Define your financial goals",
                    "b": "Assess your current financial situation",
                    "c": "Compare financial products and services",
                    "d": "Track your progress and make adjustments",
                    "correct": "a"
                },
                {
                    "question": "What is the first step in opening a savings or checking account at a financial institution?",
                    "a": "Decide how much money you want to save or spend.",
                    "b": "Choose a bank or credit union to do your banking.",
                    "c": "Fill out an application and provide some personal information.",
                    "d": "All of the above.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of opening a savings or checking account?",
                    "a": "To save money and keep it safe.",
                    "b": "To borrow money from the bank.",
                    "c": "To invest in stocks or other investments.",
                    "d": "To buy things you want without needing to save money.",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of a custodial account?",
                    "a": "To save for college or other long-term financial goals",
                    "b": "To teach minors how to manage money independently",
                    "c": "To reduce taxes on savings",
                    "d": "To provide financial support for retirement",
                    "correct": "a"
                },
                {
                    "question": "What is the first step to opening a savings or checking account, according to the passage?",
                    "a": "Choose a financial institution.",
                    "b": "Gather necessary documents.",
                    "c": "Determine the type of account to open.",
                    "d": "Make a deposit.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why some people may find the thought of opening an account intimidating?",
                    "a": "They may not know what information they need to provide.",
                    "b": "They may not know how to fill out the application.",
                    "c": "They may be worried about sharing their personal information.",
                    "d": "They may not have the necessary documents to open the account.",
                    "correct": "c"
                },
                {
                    "question": "What information does a banking history report typically include?",
                    "a": "The number of accounts the consumer has had in the past.",
                    "b": "The consumer's payment history, including late payments or bounced checks.",
                    "c": "The consumer's income and employment history.",
                    "d": "The consumer's credit score.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of a banking history report?",
                    "a": "To show how you have handled your money in the past.",
                    "b": "To show your credit score.",
                    "c": "To show your bank account balances.",
                    "d": "To show your debt-to-income ratio.",
                    "correct": "a"
                },
                {
                    "question": "What should you do if you find incorrect information in your banking history report?",
                    "a": "Contact your bank directly to fix the issue.",
                    "b": "Ignore the error and hope it corrects itself.",
                    "c": "File a dispute with the consumer reporting company.",
                    "d": "Ask your friends and family for their opinion on the issue.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of having a bank account, according to the passage?",
                    "a": "It allows you to save money without worrying about it.",
                    "b": "It helps you to budget and track your spending.",
                    "c": "It provides a safe place to keep your money.",
                    "d": "It helps you to build credit.",
                    "correct": "c"
                },
                {
                    "question": "What is the best way to save money when planning a trip?",
                    "a": "Book everything at once to get discounts.",
                    "b": "Look for deals on flights and accommodations.",
                    "c": "Travel during the off-season or on less popular days of the week.",
                    "d": "Choose a more affordable destination or a shorter trip.",
                    "correct": "b"
                },
                {
                    "question": "What is a key step in opening a savings or checking account?",
                    "a": "Find a bank that offers youth savings accounts.",
                    "b": "Have a parent or guardian co-sign the account.",
                    "c": "Deposit money into the account to start saving.",
                    "d": "Choose a checking or savings account that best fits your needs.",
                    "correct": "c"
                },
                {
                    "question": "What should you do to avoid overdrawing your checking account?",
                    "a": "Always keep more than $100 in your account.",
                    "b": "Use an ATM card to get cash whenever you want.",
                    "c": "Check your account balance regularly to avoid overdrawing.",
                    "d": "Don't worry about overdrawing, it's not a big deal.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of keeping your savings account separate from your checking account?",
                    "a": "To avoid overdraft fees",
                    "b": "To earn more interest.",
                    "c": "To keep your savings separate from your spending money",
                    "d": "To have easier access to your savings",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of using a savings account?",
                    "a": "To earn interest on your money",
                    "b": "To pay bills or make purchases",
                    "c": "To keep your money safe",
                    "d": "To save money in a special way",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of a savings account?",
                    "a": "To earn interest on your money",
                    "b": "To save money for a specific goal",
                    "c": "To pay bills and make purchases",
                    "d": "To invest in stocks and bonds",
                    "correct": "a"
                },
                {
                    "question": "What should you do to keep track of your savings account?",
                    "a": "Read the rules of your account.",
                    "b": "Keep track of your deposits and withdrawals.",
                    "c": "Review your account statements.",
                    "d": "Set up email or text alerts.",
                    "correct": "a"
                },
                {
                    "question": "What is the main benefit of a checking account compared to a savings account?",
                    "a": "It allows you to make more transactions.",
                    "b": "It earns you more interest on your money.",
                    "c": "It provides you with overdraft protection.",
                    "d": "It gives you access to cash.",
                    "correct": "a"
                },
                {
                    "question": "What can happen if you don't have enough money in your checking account to cover a transaction?",
                    "a": "The bank will automatically transfer money from your savings account to cover the transaction.",
                    "b": "You will be charged a fee for overdrawing your account.",
                    "c": "The transaction will be declined and you won't be able to make the purchase.",
                    "d": "The bank will create a new account for you with extra money in it.",
                    "correct": "b"
                },
                {
                    "question": "What can Rodney do to avoid overdraft fees in the future?",
                    "a": "Keep a cushion of $50 in his checking account at all times.",
                    "b": "Set up automatic transfers from his savings account to his checking account.",
                    "c": "Opt out of the overdraft program.",
                    "d": "Monitor his account balance regularly to avoid overdrafts.",
                    "correct": "d"
                },
                {
                    "question": "What is the main benefit of using direct deposit with a checking account?",
                    "a": "It allows you to save time by not having to make deposits in person.",
                    "b": "It helps you to automatically transfer money to your savings account.",
                    "c": "It helps you to avoid late fees by automatically paying your bills on time.",
                    "d": "It allows you to transfer money from your checking account to another account at a later time.",
                    "correct": "b"
                },
                {
                    "question": "What is the benefit of using automatic bill payment?",
                    "a": "You don't have to worry about forgetting to pay bills.",
                    "b": "You can avoid late fees and penalties.",
                    "c": "You can set up payments for a specific date in the future.",
                    "d": "You can earn interest on your money while paying bills.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of a check?",
                    "a": "To transfer money from one account to another.",
                    "b": "To pay for goods or services.",
                    "c": "To access one's money in a checking account.",
                    "d": "To show the amount of money in a checking account.",
                    "correct": "c"
                },
                {
                    "question": "What is the purpose of the date on a check?",
                    "a": "To show the amount of money written on the check",
                    "b": "To identify the name of the person or business that wrote the check",
                    "c": "To indicate the bank where the check was drawn",
                    "d": "To show the account number of the check",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why you should regularly review your checking account statement?",
                    "a": "To make sure your account balance is accurate.",
                    "b": "To avoid overdraft fees.",
                    "c": "To keep track of your account activity.",
                    "d": "To make sure your account is not being hacked.",
                    "correct": "b"
                },
                {
                    "question": "What is the most important step in managing a checking account, according to the passage?",
                    "a": "Keep track of your deposits",
                    "b": "Keep track of your withdrawals",
                    "c": "Read the terms of your account",
                    "d": "All of the above",
                    "correct": "c"
                },
                {
                    "question": "What is the total amount of money that Asif spent on stationery last month?",
                    "a": "$25",
                    "b": "$50",
                    "c": "$75",
                    "d": "$100",
                    "correct": "c"
                },
                {
                    "question": "What should Asif do first to make sure he has enough money in his account to pay his bills?",
                    "a": "Check his account balance every day to make sure he has enough money.",
                    "b": "Set up automatic transfers from his savings account to his checking account.",
                    "c": "Withdraw money from an ATM to make sure he has enough cash on hand.",
                    "d": "Call his bank to ask if they offer overdraft protection.",
                    "correct": "b"
                },
                {
                    "question": "What should you do before using an ATM card for a transaction?",
                    "a": "Check your account balance before making a withdrawal.",
                    "b": "Ask the ATM if it has accessibility features for people with disabilities.",
                    "c": "Share your PIN with other people to avoid forgetting it.",
                    "d": "Contact your financial institution to learn about fees associated with using an ATM not affiliated with your financial institution.",
                    "correct": "a"
                },
                {
                    "question": "What happens when you choose a \"credit\" transaction with a debit card?",
                    "a": "The money is taken out of your checking or savings account.",
                    "b": "The money is added to your checking or savings account.",
                    "c": "The transaction is processed as a credit transaction.",
                    "d": "The transaction is processed as a debit transaction.",
                    "correct": "a"
                },
                {
                    "question": "What is an important thing to consider when using an app for person-to-person (P2P) payments?",
                    "a": "The type of app you use",
                    "b": "The amount of money you transfer",
                    "c": "The privacy of your personal information",
                    "d": "The deposit insurance that covers your funds.",
                    "correct": "d"
                },
                {
                    "question": "What is the main advantage of using a mobile wallet?",
                    "a": "It allows you to make purchases without using cash.",
                    "b": "It helps you keep track of your spending.",
                    "c": "It is a more secure way to make purchases.",
                    "d": "It allows you to use your debit card from anywhere in the world.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of understanding the terms of your bank account?",
                    "a": "You can avoid overdraft fees.",
                    "b": "You can earn interest on your money.",
                    "c": "You can track your spending more easily.",
                    "d": "You can save money by using a debit card instead of credit.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of using a prepaid card?",
                    "a": "It helps you keep track of your spending.",
                    "b": "It helps you avoid overdraft fees.",
                    "c": "It allows you to make purchases without having to carry cash.",
                    "d": "It helps you build credit.",
                    "correct": "c"
                },
                {
                    "question": "What is a key feature of prepaid cards that can help you control your spending?",
                    "a": "Prepaid cards have purchase fees.",
                    "b": "Prepaid cards have monthly maintenance fees.",
                    "c": "Prepaid cards have load limits.",
                    "d": "Prepaid cards can help you control your spending by letting you know when you are running low on funds.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of using a prepaid card?",
                    "a": "You don't have to carry cash.",
                    "b": "You can receive payment or benefits from your employer or the government.",
                    "c": "You can open an account at a financial institution.",
                    "d": "You can use money that is preloaded onto the card.",
                    "correct": "d"
                },
                {
                    "question": "What type of prepaid card can be used to withdraw cash from an ATM?",
                    "a": "Reloadable prepaid card",
                    "b": "Payroll card",
                    "c": "Electronic benefit transfer (EBT) card",
                    "d": "College or university identification card",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of prepaid cards compared to checking accounts?",
                    "a": "Prepaid cards have a lower monthly fee.",
                    "b": "Prepaid cards have higher interest rates.",
                    "c": "Prepaid cards offer more security than checking accounts.",
                    "d": "Prepaid cards are easier to use than checking accounts.",
                    "correct": "c"
                },
                {
                    "question": "Which of the following fees are commonly charged by reloadable prepaid cards?",
                    "a": "Card activation fee",
                    "b": "Monthly maintenance fee",
                    "c": "Purchase fee",
                    "d": "All of the above",
                    "correct": "d"
                },
                {
                    "question": "What should you do if you notice a charge on your card statement that you did not make?",
                    "a": "Ignore it and hope it goes away.",
                    "b": "Call the card issuer immediately to report the problem.",
                    "c": "Try to reverse the charge yourself.",
                    "d": "Wait until the end of the month to see if the charge is corrected.",
                    "correct": "b"
                },
                {
                    "question": "What is an important step to take when using a prepaid card?",
                    "a": "Review your account transaction history and dispute any charges you did not authorize.",
                    "b": "Understand your card\u2019s limits, such as the maximum amount that can be loaded onto the card, other limits related to reloading funds, and any limits to purchases or withdrawals.",
                    "c": "Know what fees are charged and how you may avoid them.",
                    "d": "Report a loss or theft immediately.",
                    "correct": "b"
                },
                {
                    "question": "What is an important feature to consider when choosing a prepaid card?",
                    "a": "The interest rate on the card",
                    "b": "The monthly maintenance fee",
                    "c": "The fees to load money onto the card",
                    "d": "The ATM withdrawal fees",
                    "correct": "c"
                },
                {
                    "question": "What should you consider before selecting a financial product or service?",
                    "a": "Your current income.",
                    "b": "Your financial goals.",
                    "c": "The interest rate offered by the provider.",
                    "d": "The fees associated with the product or service.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of writing down your intentions to take action?",
                    "a": "It helps you remember what you learned in the training.",
                    "b": "It motivates you to take action now.",
                    "c": "It helps you track your progress over time.",
                    "d": "It helps you share your intentions with others.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why it is important to complete the post-training survey?",
                    "a": "To show appreciation for the trainer's time.",
                    "b": "To provide feedback on the training program.",
                    "c": "To help the organization improve future training sessions.",
                    "d": "To demonstrate your interest in learning more about personal finance.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of FDIC insurance?",
                    "a": "To protect your money from bank failures",
                    "b": "To help you manage your checking account",
                    "c": "To ensure that all prepaid cards charge the same fees",
                    "d": "To provide a safe place to keep your money",
                    "correct": "a"
                }
            ]
        },
        "income": {
            "questions": [
                {
                    "question": "What is the main purpose of understanding your income?",
                    "a": "To save money.",
                    "b": "To invest in assets.",
                    "c": "To buy things you want.",
                    "d": "To pay bills.",
                    "correct": "d"
                },
                {
                    "question": "What type of income is the result of someone paying to borrow an item that you own?",
                    "a": "Earned income",
                    "b": "Income from assets or investments",
                    "c": "Public benefits or entitlements",
                    "d": "All of the above",
                    "correct": "b"
                },
                {
                    "question": "What is the difference between gross income and net income?",
                    "a": "Gross income is the total income you take home.",
                    "b": "Net income is the total income you earned from working.",
                    "c": "Gross income is the income you earned from working minus deductions.",
                    "d": "Net income is the income you take home minus deductions.",
                    "correct": "c"
                },
                {
                    "question": "What is withholding?",
                    "a": "When an employer pays taxes on behalf of an employee.",
                    "b": "When an employee pays taxes on their own income.",
                    "c": "When an employer does not pay taxes on behalf of an employee.",
                    "d": "When an employer considers an employee as self-employed.",
                    "correct": "a"
                },
                {
                    "question": "What is one way to manage money wisely?",
                    "a": "By saving money in a bank account.",
                    "b": "By investing in stocks or real estate.",
                    "c": "By spending money on things you don't need.",
                    "d": "By not saving any money at all.",
                    "correct": "a"
                },
                {
                    "question": "What is one way to receive income that can help you reach your financial goals?",
                    "a": "By working a part-time job",
                    "b": "By starting a small business",
                    "c": "By selling things you no longer need or use",
                    "d": "By asking family or friends for money",
                    "correct": "b"
                },
                {
                    "question": "What are some potential benefits of creating and selling an online course?",
                    "a": "It can be a flexible way to earn income without leaving your home.",
                    "b": "It can help you develop valuable skills and knowledge in your area of expertise.",
                    "c": "It can be a way to earn extra money without putting in a lot of effort.",
                    "d": "It can be a way to earn a lot of money quickly.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of a pay statement?",
                    "a": "To show an employee's total earnings for a pay period",
                    "b": "To provide an employee with their gross and net pay",
                    "c": "To inform an employee of the amount of taxes and deductions taken out",
                    "d": "To show an employee their take-home pay",
                    "correct": "d"
                },
                {
                    "question": "What are required deductions used for?",
                    "a": "To pay for necessities like food and shelter.",
                    "b": "To save money for the future.",
                    "c": "To pay taxes to the government.",
                    "d": "To buy things you want, like toys and treats.",
                    "correct": "c"
                },
                {
                    "question": "What is withholding, and why do employers do it?",
                    "a": "Withholding is when an employer takes money from your paycheck to pay for your taxes.",
                    "b": "Withholding is when an employer pays a portion of your salary to the government to cover taxes.",
                    "c": "Withholding is when an employer holds a portion of your paycheck to save it for you.",
                    "d": "Withholding is when an employer takes money from your paycheck to pay for your benefits.",
                    "correct": "b"
                },
                {
                    "question": "What should you do if you don\u2019t receive a paycheck or pay statement?",
                    "a": "Ask your employer for a pay statement.",
                    "b": "Look for a different job.",
                    "c": "Wait for your paycheck to arrive.",
                    "d": "Ask a friend or family member for help.",
                    "correct": "a"
                },
                {
                    "question": "What is the purpose of tracking your income?",
                    "a": "To plan how you will save, share, and spend it.",
                    "b": "To make sure you have enough money for bills and expenses.",
                    "c": "To keep track of how much money you have at any given time.",
                    "d": "To make sure you don't overspend and run out of money.",
                    "correct": "a"
                },
                {
                    "question": "What is the purpose of listing the amount of income received from each source in the \u201cApply It My Monthly Income Log\u201d?",
                    "a": "To plan for future months",
                    "b": "To calculate a monthly amount for income received on a schedule other than monthly",
                    "c": "To see if each source is regular, unpredictable, seasonal, or one-time",
                    "d": "To complete the log",
                    "correct": "a"
                },
                {
                    "question": "What is the most important thing to consider when deciding how to use your money?",
                    "a": "How much money you have.",
                    "b": "What you want to buy.",
                    "c": "What you need to save for.",
                    "d": "How much money you will have in the future.",
                    "correct": "c"
                },
                {
                    "question": "What is the difference between a need and a want?",
                    "a": "A need is something you have to pay for, while a want is something you don't have to pay for.",
                    "b": "A need is something you want to have, while a want is something you don't want to have.",
                    "c": "A need is something you have to have, while a want is something you can do without.",
                    "d": "A need is something you buy, while a want is something you don't buy.",
                    "correct": "c"
                },
                {
                    "question": "What is one way to categorize your expenses to understand where your money is going?",
                    "a": "By the month",
                    "b": "By the week",
                    "c": "By the day",
                    "d": "By the hour",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of tracking your spending?",
                    "a": "It helps you to avoid overspending.",
                    "b": "It helps you to make informed financial decisions.",
                    "c": "It helps you to reduce stress about expenses.",
                    "d": "It helps you to save money.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason to save money?",
                    "a": "To buy things you want or need right away",
                    "b": "To save for unexpected expenses",
                    "c": "To pay off debts",
                    "d": "To invest in stocks or other investments",
                    "correct": "b"
                },
                {
                    "question": "What does the phrase \"resource and asset limits\" refer to in the context of public benefits?",
                    "a": "The amount of money you can earn before losing eligibility for benefits.",
                    "b": "The value of property you own that can affect your eligibility for benefits.",
                    "c": "The maximum amount of benefits you can receive based on your income and family size.",
                    "d": "The amount of money you can save before your benefits are reduced or terminated.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason to track your expenses?",
                    "a": "To make sure you have enough money for unexpected costs.",
                    "b": "To see if your spending aligns with your values and goals.",
                    "c": "To save money for a specific goal.",
                    "d": "To avoid overspending and stay within your budget.",
                    "correct": "b"
                },
                {
                    "question": "What is the purpose of completing the \"Apply It: My Saving, Sharing, and Spending Diary\" tool?",
                    "a": "To track expenses for one full month to understand how you use money each day.",
                    "b": "To identify significant expenses that may not be paid every month, such as car insurance or more costly utility bills in winter.",
                    "c": "To make sure the ways you are using money align with your values and goals by looking at wants in particular.",
                    "d": "To find apps that may work for tracking expenses using a smart phone.",
                    "correct": "c"
                },
                {
                    "question": "What is the purpose of the \"Notes\" column in the \"Apply It: My Monthly Expense Log\"?",
                    "a": "To record the total amount spent on each category.",
                    "b": "To categorize expenses into saving, sharing, and spending.",
                    "c": "To record the frequency of each expense.",
                    "d": "To make changes to an item based on the information in the log.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of paying bills before their due dates?",
                    "a": "To avoid late fees and interest on unpaid balances.",
                    "d": "To keep your credit score high.",
                    "b": "To avoid negative credit report entries.",
                    "c": "To avoid loss of services and additional charges.",
                    "correct": "a"
                },
                {
                    "question": "Which of the following is an advantage of paying bills electronically?",
                    "a": "You can pay bills faster than in person.",
                    "b": "You can pay bills without a receipt.",
                    "c": "You can pay bills without leaving your home.",
                    "d": "You can pay bills using only cash.",
                    "correct": "c"
                },
                {
                    "question": "What is the first step in deciding how to save, share, and spend your income?",
                    "a": "Create a budget.",
                    "b": "Track your expenses.",
                    "c": "Set financial goals.",
                    "d": "All of the above.",
                    "correct": "b"
                },
                {
                    "question": "What is the most important reason why you should write down your financial goals?",
                    "a": "To remember them better",
                    "b": "To make them more achievable",
                    "c": "To share them with others",
                    "d": "To feel more motivated",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of creating a budget?",
                    "a": "To save money for short-term goals.",
                    "b": "To track your spending and make sure you have enough money for the things you need and want.",
                    "c": "To invest in stocks and make money quickly.",
                    "d": "To pay off debt as soon as possible.",
                    "correct": "b"
                }
            ]
        },
        "living_on_your_own": {
            "questions": [
                {
                    "question": "What are some things you should consider when choosing a place to live?",
                    "a": "The location and distance from your workplace.",
                    "b": "The cost of the housing and how it fits into your budget.",
                    "c": "The type of housing and whether it meets your needs and preferences.",
                    "d": "The proximity to public transportation and amenities.",
                    "correct": "c"
                },
                {
                    "question": "What is an example of a need in choosing a place to live?",
                    "a": "A certain number of bedrooms.",
                    "b": "A place that is walking distance from work or school.",
                    "c": "A safe neighborhood.",
                    "d": "A place that is within your budget.",
                    "correct": "d"
                },
                {
                    "question": "What is one thing that people may consider when looking for a place to live?",
                    "a": "The location of the place",
                    "b": "The cost of living in the area",
                    "c": "The safety of the neighborhood",
                    "d": "The availability of transportation",
                    "correct": "a"
                },
                {
                    "question": "What is one important factor that you should consider when deciding whether a place to live meets your needs?",
                    "a": "Location",
                    "b": "Size",
                    "c": "Cost",
                    "d": "Amenities",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of the \"Apply It\" section in the participant guide?",
                    "a": "To provide information about different types of housing options.",
                    "b": "To help participants decide which option is best for them.",
                    "c": "To review information covered in the training.",
                    "d": "To encourage participants to apply what they learned to their own lives.",
                    "correct": "d"
                },
                {
                    "question": "What is the main benefit of having a lease?",
                    "a": "It establishes the length of time you will have to live in the rental property.",
                    "b": "It outlines the responsibilities of both the renter and the landlord.",
                    "c": "It protects the renter from being evicted without proper notice.",
                    "d": "It specifies the amount of rent you will pay.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason a landlord may require a credit check when renting a property?",
                    "a": "To ensure the renter has enough money to pay rent on time.",
                    "b": "To determine if the renter has a good credit history.",
                    "c": "To check if the renter has any outstanding debts.",
                    "d": "To see if the renter has a job.",
                    "correct": "b"
                },
                {
                    "question": "What is the most important factor to consider when deciding where to live?",
                    "a": "The location of your workplace",
                    "b": "The size of the home",
                    "c": "The amenities included in the home",
                    "d": "The cost of living in the area",
                    "correct": "d"
                },
                {
                    "question": "What are some advantages of buying something instead of renting it?",
                    "a": "It can be more affordable in the short term.",
                    "b": "It provides more flexibility in terms of moving to a different location.",
                    "c": "It can be more expensive in the long run.",
                    "d": "It can lead to a better investment opportunity.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why someone might choose to rent a home instead of buying one?",
                    "a": "Renting is cheaper than buying.",
                    "b": "Renting gives you more flexibility.",
                    "c": "Renting allows you to avoid making a long-term commitment.",
                    "d": "Renting is a better investment than buying.",
                    "correct": "c"
                },
                {
                    "question": "What is an advantage of renting a home?",
                    "a": "Rent is usually lower than the monthly mortgage payment.",
                    "b": "Moving is easier when renting.",
                    "c": "You have the opportunity to live in different locations and neighborhoods without having to buy a new home.",
                    "d": "The responsibility of repairs is often the responsibility of the landlord.",
                    "correct": "c"
                },
                {
                    "question": "What is one potential disadvantage of renting that is mentioned in the passage?",
                    "a": "Rent can increase unexpectedly.",
                    "b": "You may not be able to choose your landlord.",
                    "c": "You may not be able to move to a new place.",
                    "d": "Your lease may not allow you to have a pet.",
                    "correct": "d"
                },
                {
                    "question": "What is the main reason why owning a home can build wealth?",
                    "a": "Because it increases in value over time.",
                    "b": "Because you can borrow against it for many purposes.",
                    "c": "Because you can build equity as you pay down the loan.",
                    "d": "Because it provides a steady source of income.",
                    "correct": "c"
                },
                {
                    "question": "What are some of the potential disadvantages of buying a home?",
                    "a": "You may have to pay for unexpected repairs and maintenance.",
                    "b": "You may have to deal with complicated paperwork and legal processes.",
                    "c": "You may have to stay in the same location for a long time.",
                    "d": "You may have to invest a lot of money upfront.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of buying a home, according to the passage?",
                    "a": "It is a good investment.",
                    "b": "It is cheaper than renting in the long run.",
                    "c": "It provides a sense of security and permanence.",
                    "d": "It is a way to show off your personal style.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why lenders use credit reports and credit scores when deciding whether to lend you money?",
                    "a": "To determine your ability to repay the loan.",
                    "b": "To check if you have any outstanding debts.",
                    "c": "To determine your creditworthiness.",
                    "d": "To see if you have enough money in your bank account.",
                    "correct": "c"
                },
                {
                    "question": "What does a good credit history help you achieve in terms of housing options?",
                    "a": "Access to a wider range of housing options.",
                    "b": "Lower interest rates on mortgages.",
                    "c": "Ability to qualify for a mortgage with a smaller down payment.",
                    "d": "Increased chances of getting approved for a rental apartment.",
                    "correct": "c"
                },
                {
                    "question": "What does a credit history record?",
                    "a": "Paying back what you owe.",
                    "b": "Your credit reports.",
                    "c": "Your credit scores.",
                    "d": "Positive and negative information.",
                    "correct": "a"
                },
                {
                    "question": "Which of the following is a reason why landlords check credit reports?",
                    "a": "To determine if an applicant has enough money to pay rent.",
                    "b": "To predict if an applicant will damage the rental property.",
                    "c": "To determine if an applicant has a good credit history.",
                    "d": "To decide if an applicant will be a good roommate.",
                    "correct": "c"
                },
                {
                    "question": "What is the main reason why lenders charge higher interest rates on loans to some people?",
                    "a": "Because they have more money to invest.",
                    "b": "Because they have a lower credit score.",
                    "c": "Because they live in a different country.",
                    "d": "Because they have a higher income.",
                    "correct": "b"
                },
                {
                    "question": "What should you do if you find an error on your credit report?",
                    "a": "Ignore it and hope it gets fixed eventually.",
                    "b": "Contact the credit reporting agency and ask them to fix it.",
                    "c": "Use a different website to get your credit report.",
                    "d": "Check your credit report less frequently.",
                    "correct": "b"
                },
                {
                    "question": "What are some reasons why a landlord might use a credit report and score to evaluate a rental application?",
                    "a": "To predict whether the tenant will pay rent on time.",
                    "b": "To determine if the tenant will cause any damage to the property.",
                    "c": "To decide if the tenant will be a good fit for the neighborhood.",
                    "d": "To see if the tenant has a history of paying bills on time.",
                    "correct": "a"
                },
                {
                    "question": "What is the total cost of renting an apartment for 6 months, including the security deposit, according to Ty\u2019s calculations?",
                    "a": "$500",
                    "b": "$1000",
                    "c": "$1500.",
                    "d": "$2000",
                    "correct": "c"
                },
                {
                    "question": "What is one way to build good credit?",
                    "a": "By making timely payments on your credit card bills.",
                    "b": "By keeping your credit card balances low compared to your credit limits.",
                    "c": "By applying for a lot of credit cards to increase your available credit.",
                    "d": "By not using credit at all and only paying cash for everything.",
                    "correct": "b"
                },
                {
                    "question": "What is one of the monthly costs of renting, according to the passage?",
                    "a": "Rent",
                    "d": "Insurance",
                    "b": "Utilities",
                    "c": "Security deposit",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason why it is important to estimate other ongoing costs when renting a home?",
                    "a": "So you can budget for unexpected expenses.",
                    "b": "To avoid paying too much rent each month.",
                    "c": "To ensure you can afford all of the expenses of renting.",
                    "d": "To save money on rent by only paying for the rent itself.",
                    "correct": "c"
                },
                {
                    "question": "What is the purpose of using the \"Monthly Cost Estimator for Renting\" tool?",
                    "a": "To estimate the total cost of renting for a specific month",
                    "b": "To compare the cost of renting in different areas",
                    "c": "To calculate the average monthly cost of renting in your area",
                    "d": "To find the cheapest renting option in your area",
                    "correct": "c"
                },
                {
                    "question": "What is one way to estimate utility costs when renting an apartment?",
                    "a": "Ask the landlord for historical utility cost data.",
                    "b": "Visit utility company websites to find average utility costs for your area.",
                    "c": "Estimate utility costs based on past experience.",
                    "d": "Contact the utility companies for specific cost information.",
                    "correct": "b"
                },
                {
                    "question": "What is one thing you should do before paying move-in costs?",
                    "a": "Calculate how much you can afford to pay.",
                    "b": "Ask the landlord if they will help you pay the costs.",
                    "c": "Look up the average cost of move-in costs in your area.",
                    "d": "Ignore the move-in costs and hope you can get them back later.",
                    "correct": "a"
                },
                {
                    "question": "What is a security deposit, and how is it handled by the landlord?",
                    "a": "A security deposit is the first month\u2019s rent, and the landlord must return it to you within 30 days of moving out.",
                    "b": "A security deposit is an amount equal to one or two months\u2019 rent, and the landlord must return it to you within 30 days of moving out, minus any damages or unpaid rent.",
                    "c": "A security deposit is a fee charged by the landlord to cover damages or unpaid rent, and the landlord must return it to you within 30 days of moving out.",
                    "d": "A security deposit is not required by law, and the landlord may keep it regardless of whether you caused any damages or owe unpaid rent.",
                    "correct": "b"
                },
                {
                    "question": "What is one way to find out if you are eligible for low-income assistance programs offered by utility companies?",
                    "a": "Contact the utility company directly.",
                    "b": "Provide proof of income to the utility company.",
                    "c": "Search online for low-income assistance programs.",
                    "d": "Contact a local non-profit organization for help.",
                    "correct": "b"
                },
                {
                    "question": "What is an important factor to consider when planning a move?",
                    "a": "How much you will save by moving yourself.",
                    "b": "How many boxes you will need to buy.",
                    "c": "How far your move will be.",
                    "d": "How you will transport your belongings to your new home.",
                    "correct": "d"
                },
                {
                    "question": "What is the best way to estimate the cost of moving into a new home?",
                    "a": "Use a moving company to pack and transport your belongings.",
                    "b": "Rent a truck and do the moving yourself.",
                    "c": "Hire friends to help you move, and pay them for their time and effort.",
                    "d": "Use an online estimator to calculate the cost of moving based on the distance and weight of your belongings.",
                    "correct": "d"
                },
                {
                    "question": "What is one ongoing cost of renting that you must consider when deciding whether to rent or buy a home?",
                    "a": "Rent",
                    "b": "Utilities",
                    "c": "Insurance",
                    "d": "Furniture and appliances",
                    "correct": "b"
                },
                {
                    "question": "What does renter's insurance protect renters from?",
                    "a": "Renter's insurance protects renters from natural disasters only.",
                    "b": "Renter's insurance protects renters from liability for injury to someone else or damage to someone else's property.",
                    "c": "Renter's insurance protects renters from theft only.",
                    "d": "Renter's insurance protects renters from all types of damage or loss.",
                    "correct": "b"
                },
                {
                    "question": "What does renter's insurance primarily protect you from?",
                    "a": "Losses to your property due to theft, fire, or other unexpected events.",
                    "b": "Medical bills if someone who does not live in your home is injured there.",
                    "c": "Damage to your property caused by natural disasters.",
                    "d": "Legal fees if you are sued for someone's injury in your home.",
                    "correct": "a"
                },
                {
                    "question": "What is renter's insurance and why do you need it?",
                    "a": "A type of insurance that protects you from unexpected events like fires or theft.",
                    "b": "A type of insurance that protects you from injuries caused by someone who does not live in your rental unit.",
                    "c": "A type of insurance that protects you from paying for expenses resulting from someone else's injury.",
                    "d": "A type of insurance that protects you from natural disasters.",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of renter's insurance?",
                    "a": "To protect the physical building where you live.",
                    "b": "To protect your personal possessions from loss or damage.",
                    "c": "To cover the actual costs of the items lost or damaged or the replacement costs of these items.",
                    "d": "To protect you from being responsible if someone who does not live in your rental unit is injured there.",
                    "correct": "b"
                },
                {
                    "question": "What is a deductible in renter's insurance?",
                    "a": "The amount you pay to the landlord before they will pay any claims.",
                    "b": "The amount you pay to the insurance company before they will pay any claims.",
                    "c": "The amount you pay to the insurance company every year or every six months.",
                    "d": "The amount you pay to the insurance company after they have paid any claims.",
                    "correct": "b"
                },
                {
                    "question": "What should you do to protect your valuables from loss or damage?",
                    "a": "Keep receipts and other documentation of your purchases.",
                    "b": "Take videos or photos of your home and valuables.",
                    "c": "Create a property inventory to help you file an insurance claim.",
                    "d": "All of the above.",
                    "correct": "d"
                },
                {
                    "question": "What should you do after you have finished making your property inventory?",
                    "a": "Take a picture of each item to keep in a safe place.",
                    "b": "Keep the inventory list in a secure location, like a safe or a locked cabinet.",
                    "c": "Share the inventory list with your landlord or roommate.",
                    "d": "Donate the items to a charity.",
                    "correct": "b"
                },
                {
                    "question": "What does Renter\u2019s insurance help you financially recover from?",
                    "a": "Natural disasters only",
                    "b": "Accidental damage only",
                    "c": "Theft and damage caused by others",
                    "d": "All of the above",
                    "correct": "d"
                },
                {
                    "question": "What is the purpose of writing down your intentions, according to the passage?",
                    "a": "To help you remember what you learned today.",
                    "b": "To make you more likely to take action.",
                    "c": "To help you stay on track and make sure you are taking action.",
                    "d": "To impress your friends with how much you learned today.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of creating a budget?",
                    "a": "To save money for unexpected expenses",
                    "b": "To track your spending habits",
                    "c": "To make sure you have enough money for the things you need and want.",
                    "d": "To invest in stocks or other financial assets",
                    "correct": "c"
                }
            ]
        },
        "saving_plan": {
            "questions": [
                {
                    "question": "What is the main reason why it's important to set aside some money every time you get income?",
                    "a": "To save money for unexpected expenses",
                    "b": "To invest in stocks and bonds",
                    "c": "To buy things you want right away",
                    "d": "To save money for retirement.",
                    "correct": "d"
                },
                {
                    "question": "What is the main benefit of saving money?",
                    "a": "It helps you reach long-term financial goals.",
                    "b": "It helps you pay your bills on time.",
                    "c": "It helps you buy things you want immediately.",
                    "d": "It helps you save money for unexpected expenses.",
                    "correct": "a"
                },
                {
                    "question": "What does it mean to save money?",
                    "a": "Saving money is the same as spending less money.",
                    "b": "Saving money means buying things for less money.",
                    "c": "Saving money means setting aside some of your money today for the future.",
                    "d": "Saving money means building your savings fund.",
                    "correct": "c"
                },
                {
                    "question": "What is the most important thing Tamara should do when trying to save money?",
                    "a": "Start by saving small amounts of money.",
                    "b": "Try to pay down debt before saving.",
                    "c": "Only save money if she has extra.",
                    "d": "Save as much money as possible as quickly as possible.",
                    "correct": "a"
                },
                {
                    "question": "What is the main purpose of the \"Apply It\" section in the participant guide?",
                    "a": "To provide tips for finding money to save.",
                    "b": "To encourage youths to save money by sharing ideas.",
                    "c": "To educate youths on financial concepts and skills.",
                    "d": "To encourage youths to invest in stocks and bonds.",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason to save money?",
                    "a": "To have money for emergencies.",
                    "b": "To build wealth over time.",
                    "c": "To achieve financial goals.",
                    "d": "To donate to charity.",
                    "correct": "c"
                },
                {
                    "question": "What is the main benefit of saving money regularly?",
                    "a": "It helps you buy things you want right away.",
                    "b": "It gives you more time for your money to grow.",
                    "c": "It helps you avoid debt.",
                    "d": "It helps you save for big purchases.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why it's important to save money?",
                    "a": "To prepare for unexpected expenses.",
                    "b": "To receive public benefits.",
                    "c": "To achieve long-term savings goals.",
                    "d": "To invest in stocks and bonds.",
                    "correct": "c"
                },
                {
                    "question": "What is the best way to save money for unexpected expenses?",
                    "a": "Put all your money in a savings account.",
                    "b": "Keep some money in a savings account and the rest in a piggy bank.",
                    "c": "Keep all your money in a piggy bank and only use it for unexpected expenses.",
                    "d": "Use a credit card for unexpected expenses and pay it off as soon as possible.",
                    "correct": "b"
                },
                {
                    "question": "What should you do if you need money for an unexpected expense?",
                    "a": "Save for it ahead of time.",
                    "b": "Borrow from a friend.",
                    "c": "Use a credit card.",
                    "d": "Take out a loan from a bank.",
                    "correct": "a"
                },
                {
                    "question": "What is the purpose of brainstorming unexpected events in your life?",
                    "a": "To identify ways to handle unexpected events with $1,000 or less.",
                    "b": "To understand how to budget for unexpected events.",
                    "c": "To practice financial planning and decision-making skills.",
                    "d": "To learn about the importance of financial preparedness.",
                    "correct": "d"
                },
                {
                    "question": "What is the main reason to have an emergency savings fund?",
                    "a": "To avoid debt when unexpected expenses arise",
                    "b": "To save money on interest by using debt to cover unexpected expenses",
                    "c": "To have a safety net for unexpected expenses",
                    "d": "To avoid having to work hard to build up the fund",
                    "correct": "a"
                },
                {
                    "question": "What is the main reason why it is important to have some money set aside for unexpected expenses?",
                    "a": "So you can buy things you don\u2019t really need.",
                    "b": "So you can save money on unexpected expenses.",
                    "c": "So you can pay for unexpected expenses without using credit.",
                    "d": "So you can have fun and enjoy life without worrying about money.",
                    "correct": "b"
                },
                {
                    "question": "What is the main reason why you need to save money for your goals?",
                    "a": "To have enough money to buy things you want.",
                    "b": "To pay for unexpected expenses.",
                    "c": "To make your money grow through interest.",
                    "d": "To have a safety net for emergencies.",
                    "correct": "d"
                },
                {
                    "question": "What is means testing, and why is it important to understand this concept when applying for public benefit programs?",
                    "a": "Means testing is a way to determine how much money a person needs to live on.",
                    "c": "Means testing is a way to determine how much money a person can save without losing their public benefits.",
                    "b": "Means testing is a way to determine if a person is eligible for public benefits based on their income and other resources.",
                    "d": "Means testing is a way to determine if a person is eligible for public benefits based on their age and health.",
                    "correct": "b"
                },
                {
                    "question": "What is the first step in creating a plan to save money for a goal?",
                    "a": "Decide how much money you want to save each month.",
                    "b": "Set a goal for yourself and make a plan to reach it.",
                    "c": "Think about how much money you need to save to reach your goal.",
                    "d": "Start saving money in a special account.",
                    "correct": "b"
                },
                {
                    "question": "What is the main advantage of a savings account?",
                    "a": "It is easy to access your money.",
                    "b": "It usually earns more interest than a checking account.",
                    "c": "It has restrictions on withdrawals.",
                    "d": "It is a good option for those who want to earn more interest.",
                    "correct": "b"
                },
                {
                    "question": "What are some advantages of savings accounts?",
                    "a": "They provide a safe place to store money.",
                    "b": "They offer a higher interest rate than checking accounts.",
                    "c": "They are easier to access than savings accounts.",
                    "d": "They are a good option for long-term savings.",
                    "correct": "b"
                },
                {
                    "question": "What is the main advantage of saving money in a savings account?",
                    "a": "It is more convenient than other options.",
                    "b": "It is safer and more secure than other options.",
                    "c": "It has higher interest rates than other options.",
                    "d": "It is the best option for all savers.",
                    "correct": "c"
                },
                {
                    "question": "What is one advantage of keeping your savings in a savings account at a financial institution?",
                    "a": "It is easy to access your money when you need it.",
                    "b": "You can earn interest on your savings.",
                    "c": "You can use your savings to buy things you want right away.",
                    "d": "It is a safe place to keep your money.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of saving with a federally insured financial institution?",
                    "a": "You will keep your insured deposits in the unlikely event the institution should fail.",
                    "c": "Deposits in insured depository institutions are insured up to $250,000.",
                    "b": "You can visit the FDIC and the NCUA websites to learn more about federal deposit insurance.",
                    "d": "The Federal Deposit Insurance Corporation (FDIC) and the National Credit Union Administration (NCUA) insure federally insured banks and credit unions.",
                    "correct": "a"
                },
                {
                    "question": "What is the main benefit of automatically transferring money from your checking account to a savings or investment account?",
                    "a": "It ensures that you save consistently without forgetting.",
                    "b": "It helps you avoid overdraft fees from your financial institution.",
                    "c": "It automatically invests your money in stocks or other investments.",
                    "d": "It allows you to earn interest on your savings.",
                    "correct": "b"
                },
                {
                    "question": "What is the main benefit of using a savings app, according to the passage?",
                    "a": "It helps you save more money.",
                    "b": "It helps you monitor your spending.",
                    "c": "It helps you track your savings.",
                    "d": "It helps you save money more effectively.",
                    "correct": "b"
                },
                {
                    "question": "What is the main purpose of FDIC and NCUA insurance?",
                    "a": "To protect savings accounts from failure of the bank or credit union.",
                    "b": "To protect investment accounts from failure of the bank or credit union.",
                    "c": "To help you choose the best savings app for your needs.",
                    "d": "To educate you on the risks involved with savings accounts.",
                    "correct": "a"
                },
                {
                    "question": "What is the main benefit of money market deposit accounts?",
                    "a": "They generally offer a higher rate of interest than savings accounts.",
                    "b": "You generally have to keep a higher minimum balance than with a savings account.",
                    "c": "You may be limited to the number of deposits and withdrawals you can make in a month.",
                    "d": "They are not insured by the federal government.",
                    "correct": "a"
                },
                {
                    "question": "What is an advantage of a savings account?",
                    "a": "It earns interest.",
                    "b": "It's easy to access your money.",
                    "c": "It's a safe place to save money.",
                    "d": "It's a type of investment.",
                    "correct": "a"
                },
                {
                    "question": "What is an important step you can take to protect your savings from fraud or scams?",
                    "a": "Only save money in a bank account that you can easily access.",
                    "b": "Never share your personal information with anyone.",
                    "c": "Always research any financial opportunity before investing.",
                    "d": "Keep your savings in cash at home so you can access it quickly.",
                    "correct": "b"
                },
                {
                    "question": "What should you do to protect yourself from fraud and scams when saving money?",
                    "a": "Only save money in a bank account.",
                    "b": "Always use a credit card when making purchases.",
                    "c": "Never share personal information with anyone.",
                    "d": "Keep all your money in a safe at home.",
                    "correct": "c"
                },
                {
                    "question": "What should you do if you receive an unexpected call or email from someone claiming to be from the government?",
                    "a": "Ignore the call or email and report it to the authorities.",
                    "b": "Pay the money they ask for to avoid any trouble.",
                    "c": "Ask them questions to verify their identity and legitimacy.",
                    "d": "Wire them money or send a prepaid card to help them with their \"urgent matter\".",
                    "correct": "c"
                },
                {
                    "question": "What should you do if you receive an email that appears to be from a financial institution but asks for your personal information?",
                    "a": "Click on any links or download attachments.",
                    "b": "Ignore the email and delete it.",
                    "c": "Contact the financial institution directly using a phone number from the email.",
                    "d": "Share your personal information with the sender.",
                    "correct": "b"
                },
                {
                    "question": "What is the best way to avoid falling victim to scams?",
                    "a": "Be careful when giving out personal information.",
                    "b": "Only use trusted sources for financial transactions.",
                    "c": "Be suspicious of unsolicited offers.",
                    "d": "All of the above.",
                    "correct": "d"
                },
                {
                    "question": "What is the most important thing to do when saving money, according to the passage?",
                    "a": "Always save as much as possible.",
                    "b": "Try to save money without looking out for possible fraud or scams.",
                    "c": "Ask for help when saving money.",
                    "d": "Don't save money at all.",
                    "correct": "c"
                },
                {
                    "question": "What is the purpose of writing down specific actions you will take in the next week?",
                    "a": "To track your progress.",
                    "b": "To share with a friend or family member.",
                    "c": "To feel more motivated.",
                    "d": "To avoid taking action.",
                    "correct": "b"
                },
                {
                    "question": "What is a credit score?",
                    "a": "A number that shows how much money you have in your bank account.",
                    "b": "A number that shows how likely you are to pay back a loan.",
                    "c": "A number that shows how much you owe on your credit cards.",
                    "d": "A number that shows how much money you can borrow.",
                    "correct": "b"
                }
            ]
        }
    
};

// Leaderboard data structure
let leaderboard = [];

// Function to check if ID already exists in leaderboard
function idExists(id) {
    return leaderboard.some(entry => entry.id === id);
} 