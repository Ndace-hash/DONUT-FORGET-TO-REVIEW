const newReviewButton = async (event) => {
    //  event.preventDefault();
     console.log("This is a test. Do we make it here from the modal?");
   
     const post_title = document.querySelector('#post-name').value;
     const post_content = document.querySelector('#post-desc').value;
   
     if (post_title && post_content) {
       const response = await fetch(`/api/posts`, {
         method: 'POST',
         body: JSON.stringify({ post_title, post_content }),
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (response.ok) {
         document.location.replace('/dashboard');
       } else {
         alert('Failed to create post');
       }
     }
   };
   

document
.querySelector('#upload-btn')
.addEventListener('click', newReviewButton);
