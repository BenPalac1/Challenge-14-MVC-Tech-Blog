const updateFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.replace('/dashboard');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  const deleteClickHandler = async function() {
    const postId = document.querySelector('input[name="post-id"]').value;
  
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
      });
  
      document.location.replace('/dashboard');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  document.querySelector('#update-post-form').addEventListener('submit', updateFormHandlerFormHandler);
  document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);