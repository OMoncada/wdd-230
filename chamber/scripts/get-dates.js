const copyrightYear = {
    year: "numeric"
};

document.querySelector('footer #year').textContent = new Date().toLocaleDateString("en-US", copyrightYear);


let lastModificationDate = document.lastModified;

document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModificationDate}`;

