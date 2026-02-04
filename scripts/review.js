const reviewCount = document.querySelector(".reviews");

let numRevs = Number(localStorage.getItem("numRevs-ls")) || 0;

if (numRevs !== 0) {
    reviewCount.textContent = `You have left ${JSON.stringify(numRevs)} reviews!`;
} 
else {
    reviewCount.textContent = `This was your first review!`;
}

numRevs++;
localStorage.setItem("numRevs-ls", numRevs);