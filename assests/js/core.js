
// Manage Menu Activities
function toggleAccountMenu() {
    if (document.getElementById("account-menu").classList.contains("open-account-menu")) {
        document.getElementById("account-menu").classList.remove("open-account-menu");
    } else {
        document.getElementById("account-menu").classList.add("open-account-menu");
    }
}

// Manage Banner Activities
const bannerImageList = [
    "./assests/img/body tattoo image.jpg", // currentBannerIndex : 0
    "./assests/img/background.jpg", // currentBannerIndex : 1
    "./assests/img/img_slider-03.jpg", // currentBannerIndex : 2
];
var currentBannerIndex = 0;
var banner = document.getElementById("banner");

// function changeBannerToTheLeft() {
//     if (currentBannerIndex === 0) {
//         currentBannerIndex = bannerImageList.length - 1; // OR 2
//     } else {
//         currentBannerIndex--;
//     }

//     banner.src = bannerImageList[currentBannerIndex];
// }

// function changeBannerToTheRight() {
//     if (currentBannerIndex === bannerImageList.length - 1) {
//         currentBannerIndex = 0;
//     } else {
//         currentBannerIndex++;
//     }

//     document.getElementById("banner").src = bannerImageList[currentBannerIndex];
// }

function changeBanner(side){
    if (side == "LEFT") {
        if (currentBannerIndex === 0) {
            currentBannerIndex = bannerImageList.length - 1; // OR 2
        } else {
            currentBannerIndex--;
        }
    }
    else if(side == "RIGHT"){
        if (currentBannerIndex === bannerImageList.length - 1) {
            currentBannerIndex = 0;
        } else {
            currentBannerIndex++;
        }
    }
    banner.src = bannerImageList[currentBannerIndex];
}