
document.addEventListener('DOMContentLoaded', function () {
    // Change the title to your desired new title
    var newTitle = "JAIN DHARAM SHREE BHAGWAN MAHAVEER";

    // Get all title elements in the document
    var titleElements = document.getElementsByTagName('SHREE BHAGWAN MAHAVEER');

    // Loop through all title elements and update their text content
    for (var i = 0; i < titleElements.length; i++) {
        titleElements[i].textContent = newTitle;
    }
});


  document.addEventListener("DOMContentLoaded", function() {
    // Get all paragraphs with the class "highlight-words"
    var paragraphs = document.querySelectorAll('.highlight-words');
  
    // Loop through each paragraph
    paragraphs.forEach(function(paragraph) {
      // Replace specific words with highlighted span
      paragraph.innerHTML = paragraph.innerHTML.replace(/\b(highlighted|important)\b/g, function(match) {
        // Wrap matched words in a span with custom styles
        return '<span class="highlight" style="color: red; font-weight: bold;">' + match + '</span>';
      });
    });
  });

  // Get a reference to the Firestore database
const db = firebase.firestore();

// Add data to a collection

db.collection("users").add({
    name: "John Doe",
    age: 25,
    email: "john@example.com"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

function copyText() {
  const textToCopy = document.querySelector('.text-white');
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Text copied to clipboard!');
}