import "./style.css";

async function getData() {
    try {
        const response = await fetch(
            "https://safe-neon-squid.glitch.me/laptops"
        );
        const dummyData = await response.json();
        console.log(dummyData);
        return dummyData;
    } catch (error) {
        alert("There was an error fetching posts. Please try again later.");
        return [];
    }
}

getData();

function displayData() {
    const container = document.querySelector("main");

    container.innerHTML += `
  <div>
    <h3>${dummyData.title}</h3>
    <p>${dummyData.description}</p>
    <p>${dummyData.price}</p>
    <p>${dummyData.stock}</p>
  </div>
  `;
}

displayData();
