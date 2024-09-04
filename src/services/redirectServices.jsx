export const openFacebookProfile = () => {
    const facebookProfileUrl = 'https://www.facebook.com/share/Akd4JNZg4mohpx3E/?mibextid=LQQJ4d'; // Replace with your actual Facebook profile URL

    // Detect if the user is on a mobile device
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.open(facebookProfileUrl, '_blank');

    // if (isMobile) {
    //     // Attempt to open the Facebook app using a deep link
    //     window.location.href = 'fb://profile/Akd4JNZg4mohpx3E/?mibextid=LQQJ4d'; // Replace 'yourprofile' with your actual profile ID or username
    //
    //     // Fallback to the web URL after a short delay
    //     setTimeout(() => {
    //         window.open(facebookProfileUrl, '_blank');
    //     }, 500);
    // } else {
    //     // For desktop, open in a new tab
    //     window.open(facebookProfileUrl, '_blank');
    // }
};

export const openInstagramProfile = () => {
    const instagramProfileUrl = 'https://www.instagram.com/micronica.2004'; // Replace with your actual Instagram profile URL

    // Detect if the user is on a mobile device
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.open(instagramProfileUrl, '_blank');

    // if (isMobile) {
    //     // Attempt to open the Instagram app using a deep link
    //     window.location.href = 'instagram://user?username=micronica.2004'; // Replace 'yourprofile' with your actual Instagram username
    //
    //     // Fallback to the web URL after a short delay
    //     setTimeout(() => {
    //         window.open(instagramProfileUrl, '_blank');
    //     }, 500);
    // } else {
    //     // For desktop, open in a new tab
    //     window.open(instagramProfileUrl, '_blank');
    // }
};

export const openEmailClient = () => {
    const email = 'office@micronica.ro';

    const mailtoLink = `mailto:${email}`;

    window.open(mailtoLink, '_blank');
};