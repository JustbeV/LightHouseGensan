document.addEventListener("DOMContentLoaded", () => {
  // === Render Sermons ===
  const sermonsContainer = document.querySelector("#sermons .cards");
  if(sermonsContainer){
    data.sermons.forEach(sermon => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${sermon.image}" alt="Sermon">
        <div class="card-content">
          <h3>${sermon.title}</h3>
          <p>${sermon.description}</p>
          <a href="${sermon.file}" target="_blank" class="btn">Download</a>
        </div>
      `;
      sermonsContainer.appendChild(card);
    });
  }

  // === Render Events ===
  const eventsContainer = document.querySelector("#events .cards");
  if(eventsContainer){
    data.events.forEach(event => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${event.image}" alt="Event">
        <div class="card-content">
          <h3>${event.title}</h3>
          <p>${event.date}</p>
        </div>
      `;
      eventsContainer.appendChild(card);
    });
  }

  // === Form Validation ===
  const form = document.querySelector("form");
  if(form){
    form.addEventListener("submit", (e) => {
      let name = form.querySelector("input[name='name']").value.trim();
      let email = form.querySelector("input[name='email']").value.trim();
      let message = form.querySelector("textarea[name='message']").value.trim();
      if(!name || !email || !message){
        alert("Please fill out all fields!");
        e.preventDefault();
      }
    });
  }
});
