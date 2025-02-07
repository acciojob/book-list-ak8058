//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function () {
  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let isbn = document.getElementById("isbn").value.trim();
  if (!title || !author || !isbn) {
    alert("Please fill in all fields");
    return;
  }
  let booklist = document.getElementById("book-list");
  let row = document.createElement("tr");
  row.innerHTML = `
  <td>${title}</td>
  <td>${author}</td>
  <td>${isbn}</td>
  <td><button class="delete">Clear</button></td>`;

  booklist.appendChild(row);

  // clear input field
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";

  //   Add event Listner for delete button

  row.querySelector(".delete").addEventListener("click", function () {
    row.remove();
  });
});
