 const { hash } = window.location; //access window.location in the browser console and you will find (hash) as one of it's poperties
 const message = atob(hash.replace('#', ''));

 if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('#hide');

  document.querySelector('h1').innerHTML = message;
 }

 
 document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);//btoa is a javascript inbuilt function that enables us convert plain text into some secret characters

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;//generates the current url of the application
  linkInput.select();//automatically selects the coded url so you can just hit ctrl + c to copy the url
 });