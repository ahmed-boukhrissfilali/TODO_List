const parta = [
  "Dans cette revue, l'auteur explore de manière approfondie les arguments présentés dans l'article intitulé impact des technologies émergentes sur le monde du travail. En mettant en lumière les forces et les faiblesses de la méthodologie de recherche, l'auteur offre une analyse critique de la pertinence des conclusions tirées. Les suggestions constructives pour /ventuelles recherches futures ajoutent une valeur significative à cette revue, en faisant delle une ressource précieuse pour les cher",
  "Cette revue synthétise efficacement les principales idées développées dans l'article Les effets de la méditation sur la santé mentale. En résumant les méthodes de recherche, les résultats clés et les implications pratiques, l'auteur offre une vue d'ensemble complète de l'article. Cette revue sert ainsi de guide rapide pour ceux qui souhaitent comprendre rapidement les conclusions de l'étude sans avoir à parcourir l'article complet. La clarté de la synthèse renforce la compréhension globale de la contribution de l'article au domaine de la santé mentale",
];

let cont = 0;

let value = document.querySelector(".par");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains("less")) {
      cont -= 1;
    }
    if (styles.contains("greater")) {
      cont += 1;
      if (cont > parta.length + 1) {
        value.textContent = parta[1];
      }
    }
    value.textContent = parta[cont];
    
  });
});
