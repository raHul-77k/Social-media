document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const imageUrl = document.getElementById('imageUrl').value;
    const description = document.getElementById('description').value;
  
    const postContainer = document.createElement('div');
    postContainer.className = 'post';
  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Post Image';
    img.width = 300; // Set a fixed width or manage via CSS
  
    const desc = document.createElement('p');
    desc.textContent = description;
  
    const commentSection = document.createElement('div');
    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Add a comment';
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.onclick = function() {
      const comment = document.createElement('p');
      comment.textContent = commentInput.value;
      commentSection.appendChild(comment);
      commentInput.value = ''; // Reset comment input
    };
  
    postContainer.appendChild(img);
    postContainer.appendChild(desc);
    postContainer.appendChild(commentInput);
    postContainer.appendChild(commentButton);
    postContainer.appendChild(commentSection);
  
    document.getElementById('postsContainer').appendChild(postContainer);
  
    // Clear form fields
    document.getElementById('imageUrl').value = '';
    document.getElementById('description').value = '';
  });
  