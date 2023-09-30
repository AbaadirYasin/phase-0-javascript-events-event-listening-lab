function addingEventListener() {
    const button = document.getElementById('button');
  
    function handleClick() {
      alert('Button was clicked!');
    }
  
    button.addEventListener('click', handleClick);
  }
  
  document.addEventListener('DOMContentLoaded', addingEventListener);
  