document.querySelector(".copy").addEventListener("click", function () {
  // Get the text inside the <h2> element
  const textToCopy = document.getElementById("copyText").innerText

  // Create a temporary input element to hold the text
  const tempInput = document.createElement("input")
  tempInput.value = textToCopy

  // Add it to the document
  document.body.appendChild(tempInput)

  // Select the text and copy it to the clipboard
  tempInput.select()
  document.execCommand("copy")

  // Remove the temporary input element from the document
  document.body.removeChild(tempInput)

  // Optional: Alert or give feedback that the text was copied
  alert("Text copied to clipboard: " + textToCopy)
})
