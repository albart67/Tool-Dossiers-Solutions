

document.getElementById('selection1').addEventListener('change', function() {
    // Masquer toutes les pages
    document.querySelectorAll('.page1').forEach(function(div) {
        div.style.display = 'none';
    });

    // Récupérer la valeur sélectionnée
    const selectedValue = this.value;

    // Afficher le div correspondant à la sélection
    if (selectedValue) {
        document.getElementById(`page1-${selectedValue}`).style.display = 'block';
    }
});



// Fonction pour basculer l'affichage des groupes de pages
function togglePages(groupId) {
    const pageGroup = document.getElementById(groupId);
    const button = document.querySelector(`button[onclick="togglePages('${groupId}')"]`);

    // Toggle the 'active' class on the selected group and button
    if (pageGroup.classList.contains('active')) {
        pageGroup.classList.remove('active');
        button.classList.remove('active');
    } else {
        pageGroup.classList.add('active');
        button.classList.add('active');
    }
}

// Fonction pour afficher le nombre de pages "Solutions" sélectionnées
function displaySolutions() {
    const solutionCount = document.getElementById("solutions-count").value;

    // Cacher toutes les pages de solutions
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`solution-${i}`).classList.remove('active');
    }

    // Afficher les pages de solutions en fonction du nombre sélectionné
    for (let i = 1; i <= solutionCount; i++) {
        document.getElementById(`solution-${i}`).classList.add('active');
    }
}


function displayImage(selectorId, displayId) {
    const selector = document.getElementById(selectorId);
    const displayDiv = document.getElementById(displayId);
    const selectedValue = selector.value;

    if (selectedValue) {
        // Si une image est sélectionnée, créer un élément <img>
        displayDiv.innerHTML = `<img src="${selectedValue}" alt="Image sélectionnée">`;
    } else {
        // Si aucune image n'est sélectionnée
        displayDiv.innerHTML = "<p>Aucune image sélectionnée pour l'instant.</p>";
    }
}

function displayImage2(selectorId, displayId) {
    const selector = document.getElementById(selectorId);
    const displayDiv = document.getElementById(displayId);
    const selectedValue = selector.value;

    if (selectedValue) {
        // Si une image est sélectionnée, créer un élément <img>
        displayDiv.innerHTML = `<img src="${selectedValue}" alt="Image sélectionnée">`;
    } else {
        // Si aucune image n'est sélectionnée
        displayDiv.innerHTML = "<p>Aucune image sélectionnée pour l'instant.</p>";
    }
}


//  Flatpickr JS pour gestion de la date à vérifier
   
        // Initialiser Flatpickr sur l'élément d'entrée
        flatpickr("#date-selection", {
            dateFormat: "Y-m-d", // Format de date
        });
 
        // Fonction pour afficher ou masquer une page
        function togglePage(pageId) {
            const page = document.getElementById(pageId);
            const button = page.querySelector('.toggle-button');
            if (page.classList.contains('hidden')) {
                page.classList.remove('hidden');
                button.textContent = 'Cacher cette page';
            } else {
                page.classList.add('hidden');
                button.textContent = 'Afficher cette page';
            }
        }

        function afficherInfoCommercial() {
            const menu = document.getElementById('menu-commerciaux');
            const infoDiv = document.getElementById('info-commercial');

            // Récupérer la valeur sélectionnée
            const commercial = menu.value;

            // Stocker les informations des commerciaux
            const commerciaux = {
                "john": { "nom": "John Doe", "telephone": "06 12 34 56 78", "email": "john.doe@example.com" },
                "jane": { "nom": "Jane Smith", "telephone": "06 98 76 54 32", "email": "jane.smith@example.com" },
                "paul": { "nom": "Paul Dupont", "telephone": "06 22 33 44 55", "email": "paul.dupont@example.com" },
                "anne": { "nom": "Anne Durand", "telephone": "06 44 55 66 77", "email": "anne.durand@example.com" }
            };

            // Si un commercial est sélectionné, afficher son numéro de téléphone et son email
            if (commercial && commerciaux[commercial]) {
                const telephone = commerciaux[commercial].telephone;
                const email = commerciaux[commercial].email;

                // Affichage des informations avec espace entre les lignes

                // infoDiv.innerHTML = `
                //     <p class="info-ligne"><span class="label">Téléphone:</span> ${telephone}</p>
                //     <p class="info-ligne"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                // `;
                infoDiv.innerHTML = `
                    <p class="info-ligne"><span class="label">Téléphone:</span> <span>${telephone}</span></p>
                    <p class="info-ligne"><span class="label">Email:</span> <span> <a href="mailto:${email}">${email}</a></span></p>
                `;
                
                // infoDiv.innerHTML = `
                //     <div class="info-ligne"><span class="label">Téléphone:</span> ${telephone}</div>
                //     <div class="info-ligne"><span class="label">Email:</span> ${email}</div>
                // `;
            } else {
                // Sinon, effacer les informations affichées
                infoDiv.innerHTML = "";
            }
        }


