// Fetch and render projects section
const projects = document.querySelector("#projects .contents");
const renderProjects = async () => {
  try {
    const data = await fetch("data/projects.json");
    const response = await data.json();
    let item = "";
    for (let i = 0; i < response.length; i++) {
      item += `
          <div class="product">
           <img src=${response[i].thumbnail_url} alt=${response[i].name} />
           <div class="text">
            <h3>${response[i].name}</h3>
            <a target="blank" href=${response[i].hoster_url} >View code on ${response[i].hoster}</a>
            <a target="blank" href=${response[i].demo_url} >Demo</a>
           </div>
          </div>`;
    }
    projects.innerHTML = item;
  } catch (error) {
    console.log("projects error ===>>>", error);
  }
};
const publications = document.querySelector("#Publications .contents");
const renderPublications = async () => {
  try {
    const data1 = await fetch("data/articles.json");
    const response1 = await data1.json();
    let item1 = "";
    for (let i = 0; i < response1.length; i++) {
      item1 += `
          <div class="product">
           <img src=${response1[i].thumbnail_url} />
           <div class="text">
            <h3>${response1[i].name}</h3>
            <a target="blank" href=${response1[i].read_url} >Read It ${response1[i].hoster}</a>
            
           </div>
          </div>`;
    }
    publications.innerHTML = item1;
  } catch (error) {
    console.log("Publications error ===>>>", error);
  }
};

window.addEventListener("load", () => {
  renderPublications();
  renderProjects();
});

