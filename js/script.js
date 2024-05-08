/**
 * Get a reference to the password input element
 */
const passwordBox = document.getElementById('Password');

/**
 * The desired length of the password
 */
const length = 12;

/**
 * A string containing all characters we want to use in the password
 */
const allchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*()_+=|{}[]<>/-=";

/**
 * Get a reference to the generate password button
 */
const button = document.getElementById("btn");

/**
 * Add an event listener to the button that generates a new password
 * when it is clicked
 */
button.addEventListener("click", () => {
  let password = "";

  /**
   * Create a single string of length `length` containing random characters from `allchars`
   */
  const randomString = Array(length)
    .fill(allchars)
    .map(x => x[Math.floor(Math.random() * x.length)])
    .join('');

  /**
   * Set the value of the password input to the generated password
   */
  passwordBox.value = randomString;
});

/**
 * Get a reference to the copy password image
 */
const im = document.querySelector(".img");

/**
 * Add an event listener to the copy password image that copies the
 * password to the clipboard when it is clicked
 */
im.addEventListener('click', () => {
  /**
   * Select the password input
   */
  passwordBox.select();

  /**
   * Copy the password to the clipboard
   */
  document.execCommand('copy');
});

