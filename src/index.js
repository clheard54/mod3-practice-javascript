document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById("comment-form")
  const commentContainer = document.getElementById("comments-list")
  const commentInput = document.getElementById("add-comments-input")
  let allComments = []

  commentForm.addEventListener("submit", function(event) {
		event.preventDefault()
    allComments.push(`<li id="${commentInput.value}" class="comment"> ${commentInput.value} <button data-id="${commentInput.value}" class="delete-comment" >x</button> </li>`)
  	commentContainer.innerHTML = allComments.join("")
    }) // end post comments

  commentContainer.addEventListener("click", function(event) {
  	if (event.target.className === "delete-comment") {
  		let commentId = event.target.dataset.id
  		let deleteComment = document.getElementById(commentId)
      let deleteIndex = allComments.indexOf(deleteComment)

      allComments.splice(deleteIndex, 1)
  		deleteComment.remove()
  	}
  }) // end delete comments

  // filter-by field
  const filterField = document.getElementById("filter-comments-input")

    filterField.addEventListener("input", function(event) {
  	 	let filterBy = event.target.value
  	 	let filteredComments = []
  	 	
      if (!filterBy) {
        commentContainer.innerHTML = allComments.join("")
      } else {
        allComments.forEach((comment) => {
          if (comment.includes(filterBy)) {
            filteredComments.push(comment)
          }
        })
        commentContainer.innerHTML = filteredComments.join("")
      }
    }) // return filtered comments as filteredComments
})
