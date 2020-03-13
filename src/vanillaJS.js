document.addEventListener('DOMContentLoaded', function() {
  // your code here!
  const newCommentForm = document.getElementById("comment-form");
  const filterSearch = document.getElementById("filter-form");
  const commentList = document.getElementById("comments-list");
  const filterText = document.getElementById('filter-comments-input');


  newCommentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newComment = document.createElement('li')
    newComment.textContent = event.target.comment.value + '  '
    commentList.appendChild(newComment)
    document.getElementById("add-comments-input").value = '';

    addDeleteButton(newComment);
  });

  function addDeleteButton(listItem){
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
      listItem.parentElement.removeChild(listItem);
    })
  }

  filterText.addEventListener("keyup", function(){
    enactFilter(filterText.value)
  })

  function enactFilter(filterValue){
    for (let i=0; i<commentList.children.length; i++){
      if (!(commentList.children[i].innerText.includes(filterText.value))){
        commentList.children[i].style = "display:none";
      }
      else if (commentList.children[i].innerText.includes(filterText.value)){
        commentList.children[i].style = "display:block";
      }
    }
  }

})


