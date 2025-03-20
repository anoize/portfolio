import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kananun",
    lastName: "Naunta",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "My major is Electronic Computer Technology",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🏫',
            text: "King Mongkut's University of Technology North Bangkok"
        },
        {
            emoji: '🌎',
            text: 'Live in THAILAND'
        },
        
        {
            emoji: "📧",
            text: "Kananun1234@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "My name is Kananun Nuanta. Everybody call me Air.My birthday is on May 16th.My grade is 2.45. I very love German shepherd",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'php'],
            exposedTo: [

            ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "โครงการ IT Career Camp – Tokio Marine Life Insurance กับบริษัท โตเกียวมารีนประกันชีวิต (ประเทศไทย) จำกัด (มหาชน)",
            
            image: mock1
        },
        {
            title: "Portfolio",
            
            image: mock2
        },
        {
            title: "resume",
            
            image: mock3
        }
        
    ]
}