const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const postIdInput = document.querySelector('input[name="post-id"]');
    const bodyInput = document.querySelector('textarea[name="comment-body"]');
  
    const postId = postIdInput.value;
    const body = bodyInput.value;
  
    if (body) {
      try {
        await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({ postId, body }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        document.location.reload();
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };
  
  document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);