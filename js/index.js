const loadHub = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayInformation(data.data); 
}

const displayInformation = data =>{
    //console.log(data)
   const dataCard = document.getElementById('data-card');
   //const cdata = data.slice(0, 6);
   data.tools.forEach(data =>{
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col') 
    cardDiv.innerHTML = `
    <div class="card p-4">
    <img src=${data.image} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.features}</p>
            <p class="card-text">${data.published_in}</p>
            <a href="#" id="detail-card" class="btn btn-primary" onclick="fetchNewDetails('${data.id}')"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Detail</a>
        </div>
    </div>    
    `;
    dataCard.appendChild(cardDiv);
 
   });
};

const fetchNewDetails = id =>{
    let url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
      fetch(url).then(res=>res.json()).then(data=>showNewDetails(data.data))
};

const showNewDetails = data =>{


  
    const modalDetail = document.getElementById("modal-body");
    modalDetail.innerHTML =
    `
    <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.description}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-md-4">
      <img src="${data.image_link[0]}" class="img-fluid rounded-start" alt="...">
      <h5>Hi, how are you doing today?</h5>
      <p>I'm doing well, thank you for asking. How can I assist you today?</p>
    </div>             
  </div>  
    
    
    `;


}




loadHub();