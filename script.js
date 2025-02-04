const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is my biggest blessing. I love you forever!!!";
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGo4Zm5nZHZmcHBvNDEzbXB1MHUzeXplMWp2emNjMHdsYXM3a2U5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xOvhMKk3EyS1LKQtkK/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";

    yesBtn.remove();
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});