export const openFacebookProfile = () => {
    const facebookProfileUrl = 'https://www.facebook.com/share/Akd4JNZg4mohpx3E/?mibextid=LQQJ4d';
    window.open(facebookProfileUrl);
};

export const openInstagramProfile = () => {
    const instagramProfileUrl = 'https://www.instagram.com/micronica.2004';
    const instagramAppUrl = 'instagram://user?username=micronica.2004';

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = instagramAppUrl;

        setTimeout(() => {
            window.location.href = instagramProfileUrl;
        }, 500);
    } else {
        window.open(instagramProfileUrl, '_blank');
    }
};

export const openEmailClient = () => {
    const email = 'office@micronica.ro';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
};

export const openMapsLocation = () => {
    const placeName = encodeURIComponent('MICRONICA S.R.L., Hala 1, Str. Gării nr. 10, Sânnicolau Mare 305600');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${placeName}`;
    window.open(googleMapsUrl, '_blank');
};

export const openPhoneDialer = () => {
    const phoneNumber = '+1234567890';  // Replace with the actual phone number

    // Use the tel: scheme to open the phone dialer
    window.location.href = `tel:${phoneNumber}`;
};