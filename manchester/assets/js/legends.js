const legendList = document.querySelector(".legend-list");

let legends = [
  {
    fullname: "Sir Alex Ferguson",
    name: "ferguson",
    birth: "31/12/1941",
    img: "./assets/img/ferguson.jpg",
    general: "la nguoi gioi nhat",
    national: "scotland",
    general: 'Sir Alexander Chapman Ferguson CBE former football manager and player, widely known for managing Manchester United from 1986 to 2013. He is considered by many to be one of the greatest managers of all time and he has won more trophies than any other manager in the history of football. As a player, he is best known for his stint with Rangers.',
    appearance: 1000,
    goal: 1000,
    title: {
      premierLeague: 13,
      FaCup: 5,
      FootballCup: 4,
      FaCharity: 10,
      ChampionLeague: 2,
      EuropeanCup: 1,
      EuropeanSuper: 1,
      Intercontinent: 1,
      FifaClub: 1,

    }
  },

  {
    fullname: "King Eric Catona",
    name: "catona",
    birth: "31/12/1941",
    img: "./assets/img/catona.jpg",
    general: "“Le Roi”.“Le Dieu”. Or good old – but never, ever, plain old – Eric. Whatever you want to call Monsieur Cantona, the Frenchman’s four-and-a-half seasons at Old Trafford are the stuff of legend.",
    national: "france",
    appearance: 182,
    goal: 82,
    title: {
      premierLeague: 4,
      FaCup: 2,
      FaCharity: 4,
    }
  },

  {
    fullname: "Ryan Giggs",
    name: "giggs",
    birth: "29/11/1973",
    img: "./assets/img/giggs.jpg",
    national: "wales",
    general: 'Ryan Giggs closed one chapter of his football career - the epic, decades-spanning story of him as a player - on the same day he started a new one, as Manchester United’s new assistant manager.',
    appearance: 963,
    goal: 168,
    title: {
      premierLeague: 13,
      FaCup: 4,
      FootballCup: 4,
      FaCharity: 9,
      ChampionLeague: 2,
      EuropeanCup: 1,
      EuropeanSuper: 1,
      Intercontinent: 1,
      FifaClub: 1,

    }
  },

  {
    fullname: "Bobby Charlton",
    name: "charlton",
    birth: "11/10/1937",
    img: "./assets/img/charlton.jpg",
    national: "england",
    general: 'Nobody embodies the values of Manchester United better than Sir Bobby Charlton. Having survived the trauma of the Munich Air Disaster when aged just 20, he played as if every game was for his fallen colleagues, recovering from his injuries to reach the pinnacle for both club and country. In a 17-year playing career with the Reds, he played 758 games and scored 249 goals - both of which were longstanding records until, respectively, Ryan Giggs in 2008 and Wayne Rooney in 2017 surpassed his feats.',
    appearance: 758,
    goal: 249,
    title: {
      premierLeague: 13,
      FaCup: 4,
      FootballCup: 4,
      FaCharity: 9,
      ChampionLeague: 2,
      EuropeanCup: 1,
      EuropeanSuper: 1,
      Intercontinent: 1,
      FifaClub: 1,

    }
  },

  {
    fullname: "Paul Sholes",
    name: "scholes",
    birth: "24/10/1985",
    img: "./assets/img/scholes.jpg",
    national: "england",
    general: `You must have a rare and special football talent to impress the great Sir Bobby Charlton.
    
        The United legend summed up Paul Scholes perfectly: "He’s always so in control and pinpoint accurate with his passing – a beautiful player to watch."`,
    appearance: 718,
    goal: 155,
    title: {
      premierLeague: 11,
      FaCup: 3,
      FootballCup: 2,
      FaCharity: 5,
      ChampionLeague: 2,
      Intercontinent: 1,
      FifaClub: 1,

    }
  },

  {
    fullname: "Wayne Rooney",
    name: "rooney",
    birth: "16/11/1974",
    img: "./assets/img/rooney.jpg",
    national: "england",
    general: `Wayne Rooney is Manchester United's all-time leading scorer and the only player to have scored 250 goals for the Reds.`,
    appearance: 559,
    goal: 253,
    title: {
      premierLeague: 5,
      FaCup: 1,
      FootballCup: 3,
      FaCharity: 4,
      ChampionLeague: 1,
      Intercontinent: 1,
      FifaClub: 1,
      EuropaLeague: 1,

    }
  },

  {
    fullname: "Ole Gunnar Solskjaer",
    name: "ole",
    birth: "26/02/1973",
    img: "./assets/img/ole.jpg",
    national: "norway",
    general: `Ole Gunnar Solskjaer reluctantly called time on his United playing career on 28 August 2007 – 11 years and three days after it began with a goalscoring debut.`,
    appearance: 366,
    goal: 126,
    title: {
      premierLeague: 5,
      FaCup: 1,
      FootballCup: 3,
      FaCharity: 4,
      ChampionLeague: 1,
      Intercontinent: 1,
      FifaClub: 1,


    }
  },

  {
    fullname: "Cristiano Ronaldo",
    name: "ronaldo",
    birth: "26/02/1973",
    national: "portugal",
    img: "./assets/img/ronaldo1.jpg",
    general: `Cristiano Ronaldo exhausted all superlatives during his six years with United, while he matured from an inexperienced, young winger in 2003 into officially the best footballer on the planet in 2009.`,
    appearance: 292,
    goal: 118,
    title: {
      premierLeague: 3,
      FaCup: 1,
      FootballCup: 2,
      FaCharity: 1,
      ChampionLeague: 1,
      FifaClub: 1,


    }
  },

  {
    fullname: "Ruud van Nistelrooy",
    name: "ruud",
    birth: "01/07/1976",
    img: "./assets/img/ruud.jpg",
    national: "netherland",
    general: `Arguably one of world football’s biggest names, David Beckham is a global phenomenon but a part of him will be forever Red.
        
        `,
    appearance: 394,
    goal: 85,
    title: {
      premierLeague: 1,
      FaCup: 1,
      FootballCup: 2,
      FaCharity: 1,



    }
  },

  {
    fullname: "David Beckham",
    name: "beckham",
    birth: "02/05/1975",
    img: "./assets/img/beckham.jpg",
    national: "england",
    general: 'Sir Alexander Chapman Ferguson CBE former football manager and player, widely known for managing Manchester United from 1986 to 2013. He is considered by many to be one of the greatest managers of all time and he has won more trophies than any other manager in the history of football. As a player, he is best known for his stint with Rangers.',
    appearance: 1200,
    goal: 1000,
    title: {
      premierLeague: 6,
      FaCup: 2,
      FaCharity: 2,
      ChampionLeague: 1,
      Intercontinent: 1,


    }
  },

  {
    fullname: "GARY NEVILLE",
    name: "NEVILLE",
    birth: "18/02/1975",
    img: "./assets/img/neville.jpg",
    national: "england",
    general: 'Gary Neville called time on an illustrious playing career on 2 February 2011, almost 20 years after making his debut for United.',
    appearance: 602,
    goal: 7,
    title: {
      premierLeague: 9,
      FaCup: 3,
      FaCharity: 3,
      ChampionLeague: 2,
      Intercontinent: 1,
      FifaClub: 1,
    }
  },

  {
    fullname: "Roy Keane",
    name: "Keane",
    birth: "10/08/1971",
    img: "./assets/img/Roy-Keane.jpg",
    national: "Republic of Ireland",
    general: 'Sir Alex Ferguson labelled him the best he ever worked with, aspiring footballers and Reds everywhere worshipped the ground he walked on: Roy Keane epitomised the unwavering spirit and desire to succeed that Manchester United stands for.',
    appearance: 480,
    goal: 51,
    title: {
      premierLeague: 7,
      FaCup: 4,
      FaCharity: 3,
      ChampionLeague: 1,
      Intercontinent: 1,
      FifaClub: 1,
    }
  },
];

const html = legends.map(legend => {
  return ` <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500"  class="col l-2 m-4 c-6 mb-16 mb-8">
  <div class="legend__card">
     <div style="background-image: url(${legend.img});" class="legend__card-img"></div>
      <div class="legend__infor">
          <p class="legend__name">${legend.fullname}</p>
      </div>
  </div>
</div>`
});


legendList.innerHTML = html.join('');
