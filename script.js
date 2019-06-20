let eventType = prompt("What type of event are you going to?");
let tempFahr = prompt("Enter the temperature outside");

let result = undefined;
let suggestion1 = undefined;
let suggestion2 = undefined;

if (eventType === "casual") {
    suggestion1 = "something comfy"; 
}
if (eventType === "semi-formal") {
    suggestion1 = "a polo";
}
if (eventType === "formal") {
    suggestion1 = "a suit"
}

if (tempFahr < "54") {
    suggestion2 = "a coat";
}

if (tempFahr >= "54" && tempFahr <= 70){
    suggestion2 = "a jacket"

}
if (tempFahr > "70") {
    suggestion2 = "no jacket"
}

result= "Since you're attending a " + eventType + " and the weather is " + tempFahr + " you should wear " + suggestion1 + " and " + suggestion2;
console.log(result)