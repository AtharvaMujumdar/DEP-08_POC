document.querySelector('#parent').addEventListener('click',(event) => {
      if(event.target.tagName === 'LI'){
        const gotourl = '/' + event.target.id;
        console.log(gotourl);
      }
});


/*
 in this event.target.tagname is used so that console.log is not triggered for any other element inside div
  event.target.id is used to get the id of the li.

*/