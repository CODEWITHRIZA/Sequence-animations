const customAnimation = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const animationSettings = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const selectAlice = (id) => document.querySelector(`#${id}`);

const alice1 = selectAlice("alice1");
const alice2 = selectAlice("alice2");
const alice3 = selectAlice("alice3");

const applyAnimation = (element, animation, settings) => element.animate(animation, settings).finished;

applyAnimation(alice1, customAnimation, animationSettings)
  .then(() => applyAnimation(alice2, customAnimation, animationSettings))
  .then(() => applyAnimation(alice3, customAnimation, animationSettings))
  .catch(error => console.error(`Error animating Alices: ${error}`));
