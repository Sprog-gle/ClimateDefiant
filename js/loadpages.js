randomGreetingVal = Math.floor((Math.random() * 20) + 1);
if (randomGreetingVal === 1) {
    randomGreeting = "loading page...";
}
else if (randomGreetingVal === 2) {
    randomGreeting = "Watching the news...";
}
else if (randomGreetingVal === 3) {
    randomGreeting = "Googling for weather...";
}
else if (randomGreetingVal === 4) {
    randomGreeting = "Chasing the sun...";
}
else if (randomGreetingVal === 5) {
    randomGreeting = "Finding the remote...";
}
else if (randomGreetingVal === 6) {
    randomGreeting = "Downloading the internet...";
}
else if (randomGreetingVal === 7) {
    randomGreeting = "Locating the anchorman...";
}
else if (randomGreetingVal === 8) {
    randomGreeting = "Changing the channel...";
}
else if (randomGreetingVal === 9) {
    randomGreeting = "Looking outside...";
}
else if (randomGreetingVal === 10) {
    randomGreeting = "Pushing the changes...";
}
else if (randomGreetingVal === 11) {
    randomGreeting = "Watching cat videos...";
}
else if (randomGreetingVal === 12) {
    randomGreeting = "Saving the files...";
}
else if (randomGreetingVal === 13) {
    randomGreeting = "Watching youtube...";
}
else if (randomGreetingVal === 14) {
    randomGreeting = "Defeating the boss...";
}
else if (randomGreetingVal === 15) {
    randomGreeting = "Solving global issues...";
}
else if (randomGreetingVal === 16) {
    randomGreeting = "Saving Jon Snow...";
}
else if (randomGreetingVal === 17) {
    randomGreeting = "Waking up...";
}
else if (randomGreetingVal === 18) {
    randomGreeting = "Hello, How are you today?";
}
else if (randomGreetingVal === 19) {
    randomGreeting = "Status Code: Feeling Fantastic!";
}
else if (randomGreetingVal === 20) {
    randomGreeting = "Scanning the matrix...";
}
$("#loadingText").html(randomGreeting);
window.onload = function () {
    $(".se-pre-con-load").fadeOut("slow");
};
