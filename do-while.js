function coffeeReceipt() {
    let total = 4.50
    let answer = "";

    do {
        answer = prompt(`Total: $${total}\nWould you like a receipt? yes or no:`)
        answer = answer ? answer.toLowerCase() : ""

        if (answer !== "yes" && answer !== "no") {
            alert(`❌ Please answer yes or no`)
        }
    } while (answer !== "yes" && answer !== "no");

    if (answer === "yes") {
        let another = ""

        do {
            alert(`🧾 Printing receipt...`)
            another = prompt(`Would you like another copy? yes or no`)
            another = another ? another.toLowerCase() : ""

            if (another !== "yes" && another !== "no") {
                alert(`❌ Please answer yes or no`)
            } else {
                alert(`🧾 Printing another receipt...`)
            }
        } while (another !== "yes" && another !== "no")
    }
    alert(`👋🏻 Thank you for your business!`)
}

function gasStation() {
    let payment
    let cardType

    do {
        payment = prompt(`Pay inside or outsitde?`)
        payment = payment ? payment.toLowerCase() : ""

        if (payment !== "inside" && payment !== "outside") {
            alert("❌ Please choose inside or outside")
        }
    } while (payment !== "inside" && payment !== "outside")
    
    if (payment === "outside") {
        do {
            cardType = prompt(`Credit or debit card?`)
            cardType = cardType ? cardType.toLowerCase() : ""

            if (cardType !== "credit" && cardType !== "debit") {
                alert(`❌ Please choose credit or debit`)
            }
        } while (cardType !== "credit" && cardType !== "debit")
        alert(`✅ Please insert your ${cardType} card at the pump`)
    } else {
        alert(`✅ Please go inside to pay`)
    }
}

function restaurantFeedback() {
    let rating;
    let manager;

    do {
        rating = prompt(`How was everything? Is it great, okay, or bad?`)
        rating = rating ? rating.toLowerCase() : ""

        if (rating !== "great" && rating !== "okay" && rating !== "bad") {
            alert(`❌ Please rate: great, okay, or bad`)    
        }  
    } while (rating !== "great" && rating !== "okay" && rating !== "bad")

    if (rating === "great") {
        alert(`😊 We're so happy to hear that! Thank you!`)
    } else if (rating === "okay") {
        alert(`😐 Thanks for letting us know. We will do better next time!`)
    } else if (rating === "bad") {
        do {
            manager = prompt(`Would you like to speak to a manager?`)
            manager = manager ? manager.toLowerCase() : ""

            if (manager !== "yes" && manager !== "no") {
                alert(`❌ Please choose yes or no`)
            }
        } while (manager !== "yes" && manager !== "no")
        
        if (manager === "yes") {
            alert(`👔 Manager is on the way!`)
        } else {
             alert("😔 We're sorry. We hope you give us another chance.");
        }
    }
}

function rateExperience() {
    let rating = 0;
    let feedback;

    do {
        rating = Number(prompt(`Rate your experience from 1 to 5:`))

        if (isNaN(rating) || rating < 1 || rating > 5) {
            alert(`❌ Please enter a number from 1 to 5`)
        }
    } while (isNaN(rating) || rating < 1 || rating > 5)
    
    if (rating <= 2) {
        let wantFeedback
        do {
            wantFeedback = prompt(`Would you like to leave a feedback?`)
            wantFeedback = wantFeedback ? wantFeedback.toLowerCase() : ''

            if (wantFeedback !== "yes" && wantFeedback !== "no") {
                alert(`❌ Please enter yes or no`)
            }
        } while (wantFeedback !== "yes" && wantFeedback !== "no")
        
        if (wantFeedback === "yes") {
            feedback = prompt("📝 Please type your feedback:")
            alert("✅ Thank you for your feedback! We'll improve")
        } else {
            alert(`✅ Thank you for your rating`)
        }
    } else {
        alert("🎉 Thank you for the amazing rating!")
    }
}  

function airportBags(){
    let hasBags = ""
    let bagCount = 0
    const BAG_FEE = 100;

    do {
        hasBags = prompt(`Any bags to check? yes or no:`)
        hasBags = hasBags ? hasBags.toLowerCase() : ""

        if (hasBags !== "yes" && hasBags !== "no") {
            alert(`Please enter yes or no`)
        }
    } while (hasBags !== "yes" && hasBags !== "no")
    
    if (hasBags === "yes") {
        do {
            bagCount = Number(prompt(`How many bags? (1-3):`))
            
            if (isNaN(bagCount) || bagCount < 1 || bagCount > 3) {
                alert(`❌ We only accept 1 to 3 bags`)
            }
        } while (isNaN(bagCount) || bagCount < 1 || bagCount > 3)
        
        let totalFee = bagCount * BAG_FEE
        alert(`✅ ${bagCount} bags checked. Bag fee: ₱${totalFee}`)
    } else {
        alert(`✅ No bags to check. Proceed to gate`)
    }
}

function pharmacyPickup() {
    let pickingUp;
    let dob;
    let questions

    do {
        pickingUp = prompt(`Pick up a prescription? yes or no`)
        pickingUp = pickingUp ? pickingUp.toLowerCase() : ""

        if (pickingUp !== "yes" && pickingUp !== "no") {
            alert(`❌ Please enter yes or no`)
        }
    } while (pickingUp !== "yes" && pickingUp !== "no")
    
    if (pickingUp === "yes") {
        do {
            dob = (prompt("Date of birth (MMDD):"))
            
            if (isNaN(dob) || dob.length !== 4) {
                alert(`❌ Please enter 4 digits!`)
            }
        } while (isNaN(dob) || dob.length !== 4)
        
        alert(`✅ Prescription found!`)

        do {
            questions = prompt(`Any questions for the pharmacist?`)
            questions = questions ? questions.toLowerCase() : ""

            if (questions !== "yes" && questions !== "no") {
                alert(`❌ Please enter yes or no`)
            }
        } while (questions !== "yes" && questions !== "no")

        if (questions === "yes") {
            prompt(`💬 Type your question:`)
            alert(`✅ Pharmacist will be right with you`)
        } else {
            alert(`✅ Thank you! Come again!`)
        }
    } else {
        alert(`👋🏻 Okay, have a nice day!`)
    }
}