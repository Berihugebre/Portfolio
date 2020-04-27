import profilePiPicture from './images/profilepic.jpeg'
import resume from './documents/CV-Berihu.pdf'
const personData = {
    about:{
            name:`Berihu Gebremedhin`,
            phone: `+32465327617`,
            email:`berihu05.20@gmail.com`,
            address:`8770 Ingelmunster (Belgium)`,
            profession:[`Mathematician`,`Web Developer`],
            profilePiPicture,
            resume
        },

    socialMedias:[
        {
            url:`https://www.linkedin.com/in/berihu-gebre/`,
            icon:`fab fa-linkedin-in`
        },
        {
            url:`https://github.com/berihugebre`,
            icon:`fab fa-github`
        },
        {
            url:`https://twitter.com/Berihu74658089`,
            icon:`fab fa-twitter`
        }
    ],

    background:[
        {
            school:`HackYourFutureBelgium`,
            url:`https://hackyourfuture.be/`,
            experience:`I am a quality-oriented recent  Web developer graduate from`
        },
        {
            school:`HackYourFutureBelgium Bootcamp`,
            url:`https://bootcamp.hackyourfuture.be/`,
            experience:`I participated 1 month bootcamp in Ghent with`
        },
        {
            school:`Merhatibeb Academy`,
            url:`http://merhatibebacademy.com/`,
            experience:`I worked as an ICT teacher and system administrator for 2 years in`
        },
        {
            school:`Adigrat University`,
            url:`http://www.adu.edu.et/`,
            experience:`I graduated in 2015 holding BSC degree in mathematics with CGPA 3.98/4.00 from`
        },

    ],

    currentStatus:[`Full Stack Web Development Internship In Belgium`, `Freelance Web Development`],

    skills:{
            frontend:[`HTML5`,`CSS3`,`JavaScript`,`React`,`Bootstrap`, `Wordpress`, `Elementor` ],
            backend:[`Node`, `Express`,`GraphQL`,`Socket.io`],
            database:[`MongoDB`,`MYSQL`],
            versionControl:[`Git`,`Github` ],
            cloud:[`Heroku`, `Netlify`,`Firebase`,`siteground`]
        },
    
    projects:[
        {
            Title:"Merhatibeb Academy",
            technologies:['wordpress', `Elementor`,`siteground`],
            about:`a school website`,
            image:`https://`,
            url:`http://merhatibebacademy.com/`
        },
        {
            Title:" VRConection",
            technologies:['React', `Bootstrap`,`Nodejs`,`Mongodb`,`Express`, `Firebase`,`google Cloud Platform`],
            about:`A web app that connects refugee and volunteers`,
            image:`https://`,
            url:`https://vrconnection-9c6e5.web.app/`
        },
        {
            Title:"Chat-Me",
            technologies:['React', `CSS3`,`Socket.io`,`Nodejs`, `Netlify`,`Heroku`],
            about:`A real time chat app`,
            image:`https://`,
            url:`https://be-chat.netlify.app/`
        },
        {
            Title:" Portfolio",
            technologies:['React', `Bootstrap`,`Netlify`],
            about:`personal portfolio about me `,
            image:`https://`,
            url:`https://be-chat.netlify.app/`
        },
        {
            Title:" Locate Bivouac Zone",
            technologies:['React',`Open Street Map`, `Leaflet`,`Express`,`Mongodb`,`Heroku`],
            about:`a web app that helps nature lovers to find a bivouac zone in Belgium`,
            image:`https://`,
            url:`https://be-chat.netlify.app/`
        }
  ]
};

export default personData;