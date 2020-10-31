import Poster from './poster.js';

const images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];

const titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];

const quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

class App {

  constructor() {
    this.images = images;
    this.titles = titles;
    this.quotes = quotes;
    this.savedPosters = [];
    this.currentPoster = '';

    this.$posterImg = document.querySelector('.poster-img');
    this.$posterTilte = document.querySelector('.poster-title');
    this.$posterQuote = document.querySelector('.poster-quote');
    this.$posterForm = document.querySelector('.poster-form');
    this.$mainPoster = document.querySelector('.main-poster');
    this.$savePoster = document.querySelector('.saved-posters');

    this.generateRandomPoster();
    this.showPoster();
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", event => {
      this.showRandomPoster(event);
      this.createOwnPoster(event);
      this.addOwnPoster(event);
      this.showMainPoster(event);
      this.showSavedPoster(event);
    });
  }

  showRandomPoster(event) {
    const {target} = event;
    if (target.classList.contains('show-random')) {
      this.generateRandomPoster();
      this.showPoster();
    }
  }

  generateRandomPoster() {
    let imageUrl = this.images[getRandomIndex(images)];
    let title = this.titles[getRandomIndex(titles)];
    let quote = this.quotes[getRandomIndex(quotes)];
    this.currentPoster = new Poster(imageUrl, title, quote);
  }

  showPoster() {
    this.$posterImg.setAttribute('src', this.currentPoster.imageURL);
    this.$posterTilte.innerText = this.currentPoster.title;
    this.$posterQuote.innerText = this.currentPoster.quote;
  }

  createOwnPoster(event) {
    const {target} = event;
    if (target.classList.contains('show-form')) {
      this.$posterForm.classList.remove('hidden');
      this.$mainPoster.classList.add('hidden');
      this.$savePoster.classList.add('hidden');
    }
  }

  showMainPoster(event) {
    const {target} = event;
    if (target.classList.contains('show-main') || target.classList.contains('back-to-main')) {
      this.$posterForm.classList.add('hidden');
      this.$mainPoster.classList.remove('hidden');
      this.$savePoster.classList.add('hidden');
    }
  }

  showSavedPoster(event) {
    const {target} = event;
    if (target.classList.contains('show-saved')) {
      this.$posterForm.classList.add('hidden');
      this.$mainPoster.classList.add('hidden');
      this.$savePoster.classList.remove('hidden');
    }
  }

  addOwnPoster(event) {
    const {target} = event;
    if (target.classList.contains('make-poster')) {
      event.preventDefault();
      let form = document.forms.createPoster;
      let imageUrl = form.elements.posterImageUrl.value;
      let title = form.elements.posterTitle.value;
      let quote = form.elements.posterQuote.value;
      if (imageUrl && title && quote) {
        this.titles.push(title);
        this.images.push(imageUrl);
        this.quotes.push(quote);
        this.currentPoster = new Poster(imageUrl, title, quote);
        this.showPoster();
        this.$posterForm.classList.add('hidden');
        this.$mainPoster.classList.remove('hidden');
      }
    }
  }
}

new App();