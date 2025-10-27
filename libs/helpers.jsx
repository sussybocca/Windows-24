export function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function playSound(path) {
  const audio = new Audio(path);
  audio.play();
}
