import "./style.css";

async function getData() {
    try {
        const response = await fetch(
            "https://safe-neon-squid.glitch.me/laptops"
        );
        const dummyData = await response.json();
        return dummyData;
    } catch (error) {
        alert("There was an error fetching posts. Please try again later.");
        return [];
    }
}

async function displayData() {
    const posts = await getData();
    console.log(posts);
    const container = document.querySelector("main");
    posts.forEach((item) => {
        container.innerHTML += `
      <div class=" bg-slate-300 border-gray-400 border-solid border">
      <img src="${item.image}" alt="laptop image"/>
      <div class="itemContainer duration-700 hover:bg-red-800">
        <h3>Name: ${item.title}</h3>
        <p>About: ${item.description}</p>
        <p>Specs: ${item.specs}</p>
        <p>Price: ${item.price}</p>
        <p>Stock: ${item.stock}</p>
        </div>
      </div>
      `;
    });
}

displayData();
