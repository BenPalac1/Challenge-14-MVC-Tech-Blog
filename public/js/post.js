const postFormHandler = async (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('input[name="post-title"]');
    const bodyInput = document.querySelector('textarea[name="post-body"]');

    const title = titleInput.value;
    const body = bodyInput.value;

    const postData = {
        title,
        body,
    };

    try {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        document.location.replace('/dashboard');
    } catch (error) {
        console.error('Error:', error.message);
        // Handle error appropriately (e.g., show a message to the user)
    }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
