// FOR LATER, IGNORE FOR NOW
const testimonialList = [
    {
        "rating": 4,
        "name": "Bobbi",
        "review": "A true gem of a friend!"
    },
    {
        "rating": 4,
        "name": "Bob",
        "review": "This Rocks!"
    },
    {
        "rating": 2,
        "name": "Goob",
        "review": "Very lazy, doesn't move for days."
    },
    {
        "rating": 5,
        "name": "Bobbert",
        "review": "Mine's not just a rock. it's family!"
    },
    {
        "rating": 5,
        "name": "Bobsi",
        "review": "My depression? Cured. Will to live? Restored!"
    },
    {
        "rating": 5,
        "name": "Bobberta",
        "review": "Walking my pet rock every day has been a great way to get some exercise!"
    }
]
<<<<<<< HEAD
 
let testimonialBox = document.getElementById('testimonials-box');
 
for (let review of testimonialList) {
// This basically llops through each review in the testimonialList array and
// creates the HTML structure for each testimonial, including the star ratings 
// based on the review's rating value.
    let stars = "";
    for (let i = 0;i < 5; i++) {
        if (i < review.rating) {
            stars.innerHTML += `<img class="star-img" src="/assets/star_yellow.svg">`;
        } else {
            stars.innerHTML += `<img class="star-img" src="/assets/star_black.svg">`;
        }
    }
    let testimonialToAdd = `
    <div class="testimonials-box">
 
                <div class="testimonial">
                    <div class="t-rating-row">
                        <div class="t-stars">
                        ${stars}
                            <imadadg class="star-img" src="/assets/star_yellow.svg">
                            <img class="star-img" src="/assets/star_yellow.svg">
                            <img class="star-img" src="/assets/star_yellow.svg">
                        </div>
                        <p class="t-name">~${review.name}</p>
                    </dadadiv>
                    <p class="t-message">
                        ${review.name}
                    </p>
                </div>
                `
 
                testimonialBox.innerHTML += testimonialToAdd
}
=======

let testimonailsBox = document.getElementById("testimonials-box");

for (let review of testimonialList){

    let stars = "";
    for (let i = 0; i < 5; i++){
        if( i < review.rating){
            stars +=  `<img class="star-img" src="/assets/star_yellow.svg">`
        } else {
            stars += `<img class="star-img" src="/assets/star_black.svg">`
        }
    }


    let testimonialToAdd = `
        <div class="testimonial">
            <div class="t-rating-row">
                <div class="t-stars">
                    ${stars}
                </div>
                <p class="t-name">~${review.name}</p>
            </div>
            <p class="t-message">
                ${review.review}
            </p>
        </div>
    `
    testimonailsBox.innerHTML += testimonialToAdd;

}

>>>>>>> 1696ed6cd36f421f0308949cd221313c33931e41
