const reviews = [
    {
      id: 1,
      name: "-Katyayini",
    
      img:
        "12.png",
      text:
      "Good work!Keep going.Waiting for my one.God bless you my boy!",
     
    },
    {
      id: 2,
      name: "-Seshagiri Rao",
     
      img:
        "12.png",
      text:
        "I'm stunned!It's just amazing,Looking for more like these.God bless!",
        
    },
    {
      id: 3,
      name: "-Sravani",
      
      img:
        "12.png",
       text:
        "I'm proud of you my brother! Such a wonderful Artist you are.Looking for more." ,
    },
    
     
  ];
  // select items
  const img = document.getElementById("person-img");
  const info = document.getElementById("info");
  const author = document.getElementById("name");
 
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
   info.textContent = item.text;
   author.textContent = item.name;
   
   
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
   info.textContent = item.text;
   author.textContent = item.name;
  
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
