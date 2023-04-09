// let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Autho field is blank an dreplace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Chec Quote length to determine styling
  if (quote.text.length >100) {
    quoteText.classList.add('long-quote')
  }
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://zenquotes.io/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error here
  }
}


// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`; 
}

// On load
// getQuotes();
newQuote();























// const quoteContainer = document.getElementById('quote-container');
// const quoteText = document.getElementById('quote');
// const authorText = document.getElementById('author');
// const twitterBtn = document.getElementById('twitter');
// const newQuoteBtn = document.getElementById('new-quote');
// const spinner = document.getElementById('loader');

// function showLoadingSpinner() {
//   spinner.hidden = false;
//   quoteContainer.hidden = true;
// }

// function removeLoadingSpinner() {
//   if (!spinner.hidden) {
//     quoteContainer.hidden = false;
//     spinner.hidden = true;
//   }
// }

// // Get Quote From API
// async function getQuote() {
//   showLoadingSpinner();
//   const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
//   const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     const data = await response.json();
//     // If Author is blank, add 'Unknown'
//       if (data.quoteAuthor === '') {
//         authorText.innerText = 'Unknown';
//       } else {
//         authorText.innerText = data.quoteAuthor;
//       }
//       // Reduce font size for long quotes
//       if (data.quoteText.length > 120) {
//         quoteText.classList.add('long-quote');
//       } else {        
//         quoteText.classList.remove('long-quote');
//       }
//       quoteText.innerText = data.quoteText;
//       // Stop Loader, Show Quote
//       removeLoadingSpinner();
//   } catch (error) {
//     getQuote();
//   }
// }

// // Tweet Quote
// function tweetQuote() {
//   const quote = quoteText.innerText;
//   const author = authorText.innerText;
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
//   // '_blank' will allow the twitter to open in a new tab
//   window.open(twitterUrl, '_blank');
// }

// // Event Listeners
// newQuoteBtn.addEventListener('click', getQuote);
// twitterBtn.addEventListener('click', tweetQuote);

// // On Load
// getQuotes();





// //############################################################################
// // Showing New Quote locally from quote.js which comes on this project folder
// // You can see the quotes from console.log

// // function newQuote() {
// //     // Pick a random quote from apiQuotes array
// //     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// //     console.log(quote);
// // }

// // newQuote();