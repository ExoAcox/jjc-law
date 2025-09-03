export function scrollToContact() {
    const element = document.getElementById("contact-us");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}