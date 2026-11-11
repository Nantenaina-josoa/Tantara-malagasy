(() => {
  "use strict";
  const translations = {
    Accueil: ["Fandraisana", "Home", "Accueil"],
    Programme: ["Fandaharana", "Schedule", "Programme"],
    "À propos": ["Momba anay", "About", "À propos"],
    FAQ: ["Fanontaniana", "FAQ", "FAQ"],
    Contact: ["Fifandraisana", "Contact", "Contact"],
    Favoris: ["Ankafizina", "Favorites", "Favoris"],
    "Voir les horaires": ["Jereo ny ora", "View schedule", "Voir les horaires"],
    "RADIO PROGRAMME": [
      "FANDAHARANA RADIO",
      "RADIO SCHEDULE",
      "PROGRAMME RADIO",
    ],
    "Explorer le programme": [
      "Hijery ny fandaharana",
      "Explore schedule",
      "Explorer le programme",
    ],
    Découvrir: ["Fantaro bebe kokoa", "Learn more", "Découvrir"],
    "7 jours sur 7": ["Isan’andro", "7 days a week", "7 jours sur 7"],
    "Stations FM": ["Onjam-peo FM", "FM stations", "Stations FM"],
    "À l’écoute de vos histoires": [
      "Mihaino ny tantaranao",
      "Listening to your stories",
      "À l’écoute de vos histoires",
    ],
    "Programme hebdomadaire": [
      "Fandaharana isan-kerinandro",
      "Weekly schedule",
      "Programme hebdomadaire",
    ],
    "7 jours": ["7 andro", "7 days", "7 jours"],
    "de programmation": [
      "isan-kerinandro",
      "of programming",
      "de programmation",
    ],
    "stations répertoriées": [
      "onjam-peo voatanisa",
      "listed stations",
      "stations répertoriées",
    ],
    "créneaux de diffusion": [
      "fotoana fandefasana",
      "broadcast slots",
      "créneaux de diffusion",
    ],
    "heure locale GMT+3": [
      "ora eto an-toerana GMT+3",
      "local time GMT+3",
      "heure locale GMT+3",
    ],
    "Consultez les horaires par jour": [
      "Jereo ny ora isaky ny andro",
      "Browse schedules by day",
      "Consultez les horaires par jour",
    ],
    "Retrouvez toutes les stations et leurs fréquences dans notre programme interactif.":
      [
        "Jereo ny onjam-peo rehetra sy ny fahita matetika ao amin’ny fandaharana.",
        "Find every station and frequency in our interactive schedule.",
        "Retrouvez toutes les stations et leurs fréquences dans notre programme interactif.",
      ],
    "Voir le programme": [
      "Jereo ny fandaharana",
      "View schedule",
      "Voir le programme",
    ],
    Navigation: ["Fitetezana", "Navigation", "Navigation"],
    Informations: ["Fampahalalana", "Information", "Informations"],
    "À savoir": ["Tsara ho fantatra", "Good to know", "À savoir"],
    "Horaires FM": ["Ora FM", "FM times", "Horaires FM"],
    "Conçu pour Madagascar": [
      "Natao ho an’i Madagasikara",
      "Made for Madagascar",
      "Conçu pour Madagascar",
    ],
    "Ne manquez plus aucune diffusion.": [
      "Aza adino ny fandefasana.",
      "Never miss a broadcast.",
      "Ne manquez plus aucune diffusion.",
    ],
    "Les horaires de diffusion": [
      "Ora fandefasana",
      "Broadcast schedule",
      "Les horaires de diffusion",
    ],
    "Le programme complet": [
      "Fandaharana feno",
      "Full schedule",
      "Le programme complet",
    ],
    "Une histoire à écouter, un rendez-vous à partager.": [
      "Tantara hohenoina, fotoana hifampizarana.",
      "Stories to hear, moments to share.",
      "Une histoire à écouter, un rendez-vous à partager.",
    ],
    "Besoin d’une information ?": [
      "Mila fanazavana?",
      "Need information?",
      "Besoin d’une information ?",
    ],
    "Besoin d'une information ?": [
      "Mila fanazavana?",
      "Need information?",
      "Besoin d'une information ?",
    ],
    "Comment trouver une diffusion ?": [
      "Ahoana no ahitana fandefasana?",
      "How do I find a broadcast?",
      "Comment trouver une diffusion ?",
    ],
    "Peut-on écouter la radio directement ici ?": [
      "Afaka mihaino radio eto ve?",
      "Can I listen to radio here?",
      "Peut-on écouter la radio directement ici ?",
    ],
    "Les horaires sont-ils actualisés en temps réel ?": [
      "Havaozina mivantana ve ny ora?",
      "Are times updated live?",
      "Les horaires sont-ils actualisés en temps réel ?",
    ],
    "Quel fuseau horaire est utilisé ?": [
      "Inona ny faritry ny ora ampiasaina?",
      "Which time zone is used?",
      "Quel fuseau horaire est utilisé ?",
    ],
    "Une question ou une suggestion ?": [
      "Manana fanontaniana na soso-kevitra?",
      "Have a question or suggestion?",
      "Une question ou une suggestion ?",
    ],
    "Mes favoris.": ["Ireo ankafiziko.", "My favorites.", "Mes favoris."],
    "Aucun favori pour le moment": [
      "Tsy mbola misy ankafizina",
      "No favorites yet",
      "Aucun favori pour le moment",
    ],
    "Informations copiées.": [
      "Voakopia ny fampahalalana.",
      "Information copied.",
      "Informations copiées.",
    ],
    "Fandaharam-potoana amin’ny onjam-peo": [
      "Fandaharam-potoana amin’ny onjam-peo",
      "Radio broadcast schedule",
      "Programme de diffusion radio",
    ],
    "Fandaharam-potoana amin'ny onjam-peo": [
      "Fandaharam-potoana amin’ny onjam-peo",
      "Radio broadcast schedule",
      "Programme de diffusion radio",
    ],
    "Ny tantara tianao, amin’ny onjam-peo akaiky anao.": [
      "Ny tantara tianao, amin’ny onjam-peo akaiky anao.",
      "Your favorite stories on a radio near you.",
      "Vos histoires préférées sur les ondes près de chez vous.",
    ],
    "Ny tantara tianao, amin'ny onjam-peo akaiky anao.": [
      "Ny tantara tianao, amin’ny onjam-peo akaiky anao.",
      "Your favorite stories on a radio near you.",
      "Vos histoires préférées sur les ondes près de chez vous.",
    ],
  };
  const special = {
    "Ny tantara tianao,": [
      "Ny tantara tianao,",
      "Your favorite stories,",
      "Vos histoires préférées,",
    ],
    "amin’ny onjam-peo": ["amin’ny onjam-peo", "on the radio", "sur les ondes"],
    "amin'ny onjam-peo": ["amin'ny onjam-peo", "on the radio", "sur les ondes"],
    "akaiky anao.": ["akaiky anao.", "near you.", "près de vous."],
    "Retrouvez facilement les horaires et fréquences FM de": [
      "Jereo mora foana ny ora sy ny fahita matetika FM an’ny",
      "Easily find FM broadcast times and frequencies for",
      "Retrouvez facilement les horaires et fréquences FM de",
    ],
  };

  const extraTranslations = {
    "NY FANDAHARANAO ISAN-KERINANDRO": [
      "FANDAHARANA ISAN-KERINANDRO",
      "YOUR WEEKLY SCHEDULE",
      "VOTRE PROGRAMME HEBDOMADAIRE",
    ],
    ", partout à Madagascar. Un programme clair, jour après jour.": [
      ", manerana an’i Madagasikara. Fandaharana mazava isan’andro.",
      ", across Madagascar. A clear schedule, day by day.",
      ", partout à Madagascar. Un programme clair, jour après jour.",
    ],
    "Horaires historiques fournis à titre indicatif. Vérifiez les diffusions auprès des stations concernées.":
      [
        "Ora taloha natao ho fampahafantarana ihany. Hamarino amin’ny onjam-peo ny fandefasana.",
        "Historical schedules for reference only. Confirm broadcasts with the radio stations.",
        "Horaires historiques fournis à titre indicatif. Vérifiez les diffusions auprès des stations concernées.",
      ],
    "Tantara Indray Mihaino. Tous droits réservés.": [
      "Tantara Indray Mihaino. Zo rehetra voatokana.",
      "Tantara Indray Mihaino. All rights reserved.",
      "Tantara Indray Mihaino. Tous droits réservés.",
    ],
    "Ne manquez plus": ["Aza adino intsony", "Never miss", "Ne manquez plus"],
    "aucune diffusion.": [
      "ny fandefasana.",
      "a broadcast.",
      "aucune diffusion.",
    ],
    "Sélectionnez un jour et retrouvez les stations, heures et fréquences FM en quelques secondes.":
      [
        "Misafidiana andro hahitana ny onjam-peo, ora ary fatran’ny FM.",
        "Choose a day to find stations, times and FM frequencies in seconds.",
        "Sélectionnez un jour et retrouvez les stations, heures et fréquences FM en quelques secondes.",
      ],
    "PROGRAMME HEBDOMADAIRE": [
      "FANDAHARANA ISAN-KERINANDRO",
      "WEEKLY SCHEDULE",
      "PROGRAMME HEBDOMADAIRE",
    ],
    "PROCHAINE DIFFUSION": [
      "FANDEFASANA MANARAKA",
      "NEXT BROADCAST",
      "PROCHAINE DIFFUSION",
    ],
    "Recherche en cours…": ["Mitady…", "Searching…", "Recherche en cours…"],
    "CHOISIR UN JOUR": ["FIDIO NY ANDRO", "CHOOSE A DAY", "CHOISIR UN JOUR"],
    "Tous les programmes": [
      "Fandaharana rehetra",
      "All broadcasts",
      "Tous les programmes",
    ],
    "Aujourd'hui uniquement": [
      "Androany ihany",
      "Today only",
      "Aujourd'hui uniquement",
    ],
    "À venir": ["Ho avy", "Upcoming", "À venir"],
    "Déjà passés": ["Efa lasa", "Past", "Déjà passés"],
    "Aucun résultat": ["Tsy misy valiny", "No results", "Aucun résultat"],
    "Essayez une autre recherche ou un autre filtre.": [
      "Andramo ny teny fikarohana na sivana hafa.",
      "Try another search or filter.",
      "Essayez une autre recherche ou un autre filtre.",
    ],
    "VUE D’ENSEMBLE": ["TOPIMASO", "OVERVIEW", "VUE D’ENSEMBLE"],
    "VUE D'ENSEMBLE": ["TOPIMASO", "OVERVIEW", "VUE D'ENSEMBLE"],
    "Affichage du jour sélectionné ci-dessus. Cliquez sur un autre jour pour consulter ses horaires.":
      [
        "Ny fandaharana amin’ny andro voafidy ihany no aseho. Misafidiana andro hafa raha ilaina.",
        "Showing only the selected day. Choose another day to view its schedule.",
        "Affichage du jour sélectionné ci-dessus. Cliquez sur un autre jour pour consulter ses horaires.",
      ],
    "Station radio": ["Onjam-peo", "Radio station", "Station radio"],
    "Retrouvez rapidement vos diffusions préférées. Vos favoris sont enregistrés dans ce navigateur.":
      [
        "Jereo haingana ireo fandefasana ankafizinao. Voatahiry ato amin’ity navigateur ity izy ireo.",
        "Quickly find your favorite broadcasts. Favorites are saved in this browser.",
        "Retrouvez rapidement vos diffusions préférées. Vos favoris sont enregistrés dans ce navigateur.",
      ],
    "Ajouter des favoris": [
      "Hanampy ankafizina",
      "Add favorites",
      "Ajouter des favoris",
    ],
    "Ouvrez le programme et cliquez sur le cœur d'une diffusion pour l'enregistrer ici.":
      [
        "Sokafy ny fandaharana ary tsindrio ny fo mba hitahirizana azy eto.",
        "Open the schedule and click a broadcast’s heart to save it here.",
        "Ouvrez le programme et cliquez sur le cœur d'une diffusion pour l'enregistrer ici.",
      ],
    "Tantara ho an'ny rehetra": [
      "Tantara ho an’ny rehetra",
      "Stories for everyone",
      "Des histoires pour tous",
    ],
    "Une histoire à écouter,": [
      "Tantara hohenoina,",
      "A story to listen to,",
      "Une histoire à écouter,",
    ],
    "un rendez-vous à partager.": [
      "fotoana hifampizarana.",
      "a moment to share.",
      "un rendez-vous à partager.",
    ],
    "est présenté ici à travers son calendrier de diffusion sur les stations radio FM de Madagascar.":
      [
        "aseho eto miaraka amin’ny fandaharam-potoana amin’ireo onjam-peo FM eto Madagasikara.",
        "is presented here through its FM radio broadcast schedule in Madagascar.",
        "est présenté ici à travers son calendrier de diffusion sur les stations radio FM de Madagascar.",
      ],
    "Ce site facilite la consultation des horaires et des fréquences disponibles dans les programmes transmis. Il s'agit d'un guide d'information, et non d'un service de radio en direct.":
      [
        "Manamora ny fijerena ny ora sy ny fatran’ny onjam-peo ity tranonkala ity. Torolalana izy fa tsy radio mivantana.",
        "This website helps you find broadcast times and frequencies. It is an information guide, not a live radio service.",
        "Ce site facilite la consultation des horaires et des fréquences disponibles dans les programmes transmis. Il s'agit d'un guide d'information, et non d'un service de radio en direct.",
      ],
    "Horaires regroupés par jour": [
      "Ora voalamina isan’andro",
      "Schedules grouped by day",
      "Horaires regroupés par jour",
    ],
    "Fréquences FM faciles à retrouver": [
      "Mora hita ny fatran’ny FM",
      "Easy-to-find FM frequencies",
      "Fréquences FM faciles à retrouver",
    ],
    "Consultation adaptée aux mobiles": [
      "Mety amin’ny finday",
      "Mobile-friendly browsing",
      "Consultation adaptée aux mobiles",
    ],
    "Consulter les diffusions": [
      "Hijery ny fandefasana",
      "View broadcasts",
      "Consulter les diffusions",
    ],
    "QUESTIONS FRÉQUENTES": [
      "FANONTANIANA MATETIKA",
      "FREQUENTLY ASKED QUESTIONS",
      "QUESTIONS FRÉQUENTES",
    ],
    "information ?": ["fanazavana?", "information?", "information ?"],
    "Quelques réponses pour utiliser le programme plus facilement.": [
      "Valin’ny fanontaniana hanamorana ny fampiasana ny fandaharana.",
      "Answers to help you use the schedule.",
      "Quelques réponses pour utiliser le programme plus facilement.",
    ],
    "Choisissez un jour dans l'onglet Programme, puis recherchez une station ou une fréquence FM.":
      [
        "Misafidiana andro ao amin’ny Fandaharana, dia tadiavo ny onjam-peo na fatran’ny FM.",
        "Choose a day on the Schedule page, then search for a station or FM frequency.",
        "Choisissez un jour dans l'onglet Programme, puis recherchez une station ou une fréquence FM.",
      ],
    "Non. Ce site présente les horaires et les fréquences FM. Il ne diffuse pas de flux audio en direct.":
      [
        "Tsia. Ora sy fatran’ny FM ihany no aseho eto, fa tsy misy fampitana mivantana.",
        "No. This site lists broadcast times and FM frequencies; it does not stream live audio.",
        "Non. Ce site présente les horaires et les fréquences FM. Il ne diffuse pas de flux audio en direct.",
      ],
    "Les données proviennent des deux programmes fournis, datés de 2021 et 2023. Elles ne sont pas vérifiées en temps réel et peuvent avoir changé.":
      [
        "Avy amin’ny fandaharana tamin’ny 2021 sy 2023 ny angona. Tsy voamarina mivantana izy ireo ary mety efa niova.",
        "The data comes from schedules dated 2021 and 2023. It is not verified live and may have changed.",
        "Les données proviennent des deux programmes fournis, datés de 2021 et 2023. Elles ne sont pas vérifiées en temps réel et peuvent avoir changé.",
      ],
    "Les heures sont affichées selon le fuseau horaire de Madagascar : Indian/Antananarivo (UTC+3).":
      [
        "Ny ora dia manaraka ny ora eto Madagasikara: Indian/Antananarivo (UTC+3).",
        "Times use Madagascar time: Indian/Antananarivo (UTC+3).",
        "Les heures sont affichées selon le fuseau horaire de Madagascar : Indian/Antananarivo (UTC+3).",
      ],
    "Une question ou": ["Fanontaniana na", "A question or", "Une question ou"],
    "une suggestion ?": ["soso-kevitra?", "a suggestion?", "une suggestion ?"],
    "Vous avez remarqué une erreur dans un horaire ou une fréquence ? Préparez un message depuis le formulaire ci-contre.":
      [
        "Nahita fahadisoana amin’ny ora na fatran’ny radio ve ianao? Manorata hafatra eto.",
        "Found an incorrect time or frequency? Write a message using this form.",
        "Vous avez remarqué une erreur dans un horaire ou une fréquence ? Préparez un message depuis le formulaire ci-contre.",
      ],
    "Ce formulaire ouvre votre application de messagerie avec le texte préparé. Aucune donnée n'est envoyée à un serveur.":
      [
        "Hanokatra ny fampiharana mailakao ity taratasy ity. Tsy alefa amin’ny serveur ny angona.",
        "This form opens your email app with a prepared message. No data is sent to a server.",
        "Ce formulaire ouvre votre application de messagerie avec le texte préparé. Aucune donnée n'est envoyée à un serveur.",
      ],
    "Votre nom": ["Anaranao", "Your name", "Votre nom"],
    "Votre e-mail": ["Adiresy mailakao", "Your email", "Votre e-mail"],
    Sujet: ["Lohahevitra", "Subject", "Sujet"],
    "Correction d'un horaire": [
      "Fanitsiana ora",
      "Schedule correction",
      "Correction d'un horaire",
    ],
    Suggestion: ["Soso-kevitra", "Suggestion", "Suggestion"],
    "Question générale": [
      "Fanontaniana ankapobeny",
      "General question",
      "Question générale",
    ],
    "Votre message": ["Hafatrao", "Your message", "Votre message"],
    "Préparer mon message": [
      "Hanomana ny hafatra",
      "Prepare my message",
      "Préparer mon message",
    ],
    "Le message sera adressé à r.nantenaina.josoa@gmail.com via votre messagerie.":
      [
        "Halefa amin’ny r.nantenaina.josoa@gmail.com amin’ny alalan’ny mailakao ny hafatra.",
        "Your email app will address the message to r.nantenaina.josoa@gmail.com.",
        "Le message sera adressé à r.nantenaina.josoa@gmail.com via votre messagerie.",
      ],
    "Écrivez votre message…": [
      "Soraty eto ny hafatrao…",
      "Write your message…",
      "Écrivez votre message…",
    ],
    "Rechercher une station ou une fréquence…": [
      "Hitady onjam-peo na fatran’ny FM…",
      "Search station or frequency…",
      "Rechercher une station ou une fréquence…",
    ],
    "0 diffusion enregistrée": [
      "0 fandefasana voatahiry",
      "0 saved broadcasts",
      "0 diffusion enregistrée",
    ],
    "MES STATIONS": ["ONJAM-PEOKO", "MY STATIONS", "MES STATIONS"],
    Mes: ["Ireo", "My", "Mes"],
    "favoris.": ["ankafiziko.", "favorites.", "favoris."],
    Copier: ["Handika", "Copy", "Copier"],
    Imprimer: ["Hanonta", "Print", "Imprimer"],
    Jour: ["Andro", "Day", "Jour"],
    Heure: ["Ora", "Time", "Heure"],
    Radio: ["Radio", "Radio", "Radio"],
    "Informations copiées.": [
      "Voakopia ny fampahafantarana.",
      "Information copied.",
      "Informations copiées.",
    ],
  };


  // Complete missing page copy. Values are ordered Malagasy, English, French.
  const pageCopy = {
    "Fandaharam-potoana amin'ny onjam-peo": ["Fandaharam-potoana amin'ny onjam-peo", "Radio broadcast schedule", "Horaires de diffusion radio"],
    "NY FANDAHARANAO ISAN-KERINANDRO": ["NY FANDAHARANAO ISAN-KERINANDRO", "YOUR WEEKLY SCHEDULE", "VOTRE PROGRAMME HEBDOMADAIRE"],
    "Ny tantara tianao, amin'ny onjam-peo akaiky anao.": ["Ny tantara tianao, amin'ny onjam-peo akaiky anao.", "Your favorite stories, on a radio station near you.", "Vos histoires préférées, sur une radio près de chez vous."],
    "Retrouvez facilement les horaires et fréquences FM de Tantara Indray Mihaino, partout à Madagascar. Un programme clair, jour après jour.": ["Jereo mora foana ny ora sy ny fatran'ny onjam-peo FM mandefa ny Tantara Indray Mihaino manerana an'i Madagasikara. Fandaharana mazava isan'andro.", "Easily find the broadcast times and FM frequencies for Tantara Indray Mihaino throughout Madagascar. A clear day-by-day schedule.", "Retrouvez facilement les horaires et fréquences FM de Tantara Indray Mihaino, partout à Madagascar. Un programme clair, jour après jour."],
    "Explorer le programme": ["Hijery ny fandaharana", "Explore the schedule", "Explorer le programme"],
    "À l'écoute de vos histoires Programme hebdomadaire": ["Mihaino ny tantaranao Fandaharana isan-kerinandro", "Listening to your stories Weekly schedule", "À l'écoute de vos histoires Programme hebdomadaire"],
    "Une question ou une suggestion ?": ["Manana fanontaniana na soso-kevitra ve ianao?", "Have a question or suggestion?", "Une question ou une suggestion ?"],
    "Vous avez remarqué une erreur dans un horaire ou une fréquence ? Préparez un message depuis le formulaire.": ["Nahita fahadisoana amin'ny ora na fatran'ny onjam-peo ve ianao? Manorata hafatra amin'ny alalan'ny formulaire.", "Found an incorrect time or frequency? Prepare a message using the form.", "Vous avez remarqué une erreur dans un horaire ou une fréquence ? Préparez un message depuis le formulaire."],
    "Ce formulaire ouvre votre application de messagerie avec le texte préparé. Aucune donnée n'est enregistrée sur ce site.": ["Hanokatra ny fampiharana mailakao miaraka amin'ny hafatra voaomana ity formulaire ity. Tsy misy angona tehirizina eto amin'ny tranonkala.", "This form opens your email application with a prepared message. No data is stored on this website.", "Ce formulaire ouvre votre application de messagerie avec le texte préparé. Aucune donnée n'est enregistrée sur ce site."],
    "Préparer mon message": ["Hanomana ny hafatro", "Prepare my message", "Préparer mon message"],
    "Le message sera adressé à r.nantenaina.josoa@gmail.com via votre messagerie.": ["Halefa amin'ny r.nantenaina.josoa@gmail.com amin'ny alalan'ny mailakao ny hafatra.", "The message will be addressed to r.nantenaina.josoa@gmail.com using your email app.", "Le message sera adressé à r.nantenaina.josoa@gmail.com via votre messagerie."],
    "Mes favoris.": ["Ireo ankafiziko.", "My favorites.", "Mes favoris."],
    "Jereo ny fandaharana": ["Jereo ny fandaharana", "View the schedule", "Voir le programme"],
    "0 diffusion enregistrée": ["0 fandefasana voatahiry", "0 saved broadcasts", "0 diffusion enregistrée"],
    "Une histoire à écouter, un rendez-vous à partager.": ["Tantara hohenoina, fotoana hifampizarana.", "A story to listen to, a moment to share.", "Une histoire à écouter, un rendez-vous à partager."],
    "Tantara Indray Mihaino est présenté ici à travers son calendrier de diffusion sur les stations radio FM de Madagascar.": ["Aseho eto ny fandaharam-potoanan'ny Tantara Indray Mihaino amin'ireo onjam-peo FM eto Madagasikara.", "Here you can find the Tantara Indray Mihaino broadcast schedule on FM radio stations in Madagascar.", "Tantara Indray Mihaino est présenté ici à travers son calendrier de diffusion sur les stations radio FM de Madagascar."],
    "Mila fanazavana?": ["Mila fanazavana?", "Need more information?", "Besoin d'informations ?"],
    "Peut-on écouter la radio directement ici ?": ["Afaka mihaino radio mivantana eto ve?", "Can I listen to the radio live here?", "Peut-on écouter la radio directement ici ?"],
    "Les horaires sont-ils actualisés en temps réel ?": ["Havaozina mivantana ve ny ora?", "Are the schedules updated in real time?", "Les horaires sont-ils actualisés en temps réel ?"],
    "Quel fuseau horaire est utilisé ?": ["Faritra ora inona no ampiasaina?", "Which time zone is used?", "Quel fuseau horaire est utilisé ?"],
    "Non. Ce site présente les horaires et les fréquences FM. Il ne diffuse pas de flux audio en direct.": ["Tsia. Ora sy fatran'ny onjam-peo FM ihany no asehon'ity tranonkala ity. Tsy mandefa feo mivantana izy.", "No. This website lists FM broadcast times and frequencies. It does not stream live audio.", "Non. Ce site présente les horaires et les fréquences FM. Il ne diffuse pas de flux audio en direct."],
    "Les données proviennent des deux programmes fournis, datés de 2021 et 2023. Elles ne sont pas vérifiées en temps réel et peuvent avoir changé.": ["Avy amin'ny fandaharana roa tamin'ny 2021 sy 2023 ny angona. Tsy voamarina mivantana izy ireo ary mety efa niova.", "The data comes from two schedules dated 2021 and 2023. It is not verified in real time and may have changed.", "Les données proviennent des deux programmes fournis, datés de 2021 et 2023. Elles ne sont pas vérifiées en temps réel et peuvent avoir changé."],
    "Les heures sont affichées selon le fuseau horaire de Madagascar : Indian/Antananarivo (UTC+3).": ["Araka ny ora eto Madagasikara no aseho ny fandaharana: Indian/Antananarivo (UTC+3).", "Times are shown in Madagascar time: Indian/Antananarivo (UTC+3).", "Les heures sont affichées selon le fuseau horaire de Madagascar : Indian/Antananarivo (UTC+3)."],
    "Choisissez un jour dans l'onglet Programme, puis recherchez une station ou une fréquence FM.": ["Misafidiana andro ao amin'ny Fandaharana, avy eo tadiavo ny onjam-peo na ny fatrany FM.", "Choose a day on the Schedule page, then search for a station or FM frequency.", "Choisissez un jour dans l'onglet Programme, puis recherchez une station ou une fréquence FM."],
    "Horaires historiques fournis à titre indicatif. Vérifiez les diffusions auprès des stations concernées.": ["Ora taloha natao ho fampahafantarana ihany. Hamarino amin'ireo onjam-peo ny fandefasana.", "Historical schedules are for reference only. Confirm broadcasts with the stations.", "Horaires historiques fournis à titre indicatif. Vérifiez les diffusions auprès des stations concernées."],
    "Sélectionnez un jour et retrouvez les stations, heures et fréquences FM en quelques secondes.": ["Misafidiana andro hahitana haingana ny onjam-peo, ny ora ary ny fatran'ny FM.", "Select a day to quickly find stations, times and FM frequencies.", "Sélectionnez un jour et retrouvez les stations, heures et fréquences FM en quelques secondes."],
    "Affichage du jour sélectionné ci-dessus. Cliquez sur un autre jour pour consulter ses horaires.": ["Ny fandaharana amin'ny andro voafidy no aseho. Tsindrio andro hafa hijerena ny orany.", "Showing the selected day's schedule. Choose another day to see its times.", "Affichage du jour sélectionné ci-dessus. Cliquez sur un autre jour pour consulter ses horaires."],
    "Jereo ny ora": ["Jereo ny ora", "View schedule", "Voir les horaires"],
    "À PROPOS": ["MOMBA ANAY", "ABOUT", "À PROPOS"],
    "CONTACT": ["FIFANDRAISANA", "CONTACT", "CONTACT"],
    "QUESTIONS FRÉQUENTES": ["FANONTANIANA MATETIKA", "FREQUENTLY ASKED QUESTIONS", "QUESTIONS FRÉQUENTES"],
    "PROGRAMME HEBDOMADAIRE": ["FANDAHARANA ISAN-KERINANDRO", "WEEKLY SCHEDULE", "PROGRAMME HEBDOMADAIRE"],
    "PROCHAINE DIFFUSION": ["FANDEFASANA MANARAKA", "NEXT BROADCAST", "PROCHAINE DIFFUSION"],
    "CHOISIR UN JOUR": ["MISAFIDY ANDRO", "CHOOSE A DAY", "CHOISIR UN JOUR"],
    "VUE D'ENSEMBLE": ["TOPIMASO", "OVERVIEW", "VUE D'ENSEMBLE"],
    "MES STATIONS": ["ONJAM-PEOKO", "MY STATIONS", "MES STATIONS"],
    "Tantara ho an'ny rehetra": ["Tantara ho an'ny rehetra", "Stories for everyone", "Des histoires pour tous"],
  };
  const normalize = (value) => String(value).normalize("NFC").replace(/[‘’ʼ`´]/g, "'").replace(/\s+/g, " ").trim();

  const languages = ["mg", "en", "fr"]; // MG retained internally only for translating legacy source strings
  let current = "fr";
  const catalog = {
    ...translations,
    ...special,
    ...extraTranslations,
    ...pageCopy,
    "Mila fanazavana ve?": [
      "Mila fanazavana?",
      "Need more information?",
      "Besoin d’informations?",
    ],
    "Besoin d’une information?": [
      "Mila fanazavana ve?",
      "Need more information?",
      "Besoin d’informations?",
    ],
    "Besoin d'une information?": [
      "Mila fanazavana ve?",
      "Need more information?",
      "Besoin d’informations?",
    ],
    "Ce site facilite la consultation des horaires et des fréquences disponibles dans les programmes transmis. Il s'agit d'un guide d'information, et non d'un service d'écoute en direct.":
      [
        "Manamora ny fijerena ny ora sy ny mari-drefin'ny onjam-peo amin'ity ity tranonkala ity. Torolalana izy fa tsy radio hiainoana mivantana.",
        "This site helps you consult broadcast times and FM frequencies. It is an information guide, not a live listening service.",
        "Ce site facilite la consultation des horaires et des fréquences disponibles dans les programmes transmis. Il s'agit d'un guide d'information, et non d'un service d'écoute en direct.",
      ],
    Lun: ["Alats.", "Mon", "Lun"],
    Mar: ["Tal.", "Tue", "Mar"],
    Mer: ["Alar.", "Wed", "Mer"],
    Jeu: ["Alak.", "Thu", "Jeu"],
    Ven: ["Zom.", "Fri", "Ven"],
    Sam: ["Sab.", "Sat", "Sam"],
    Dim: ["Alah.", "Sun", "Dim"],
    "Aujourd’hui": ["Androany", "Today", "Aujourd’hui"],
    "Aujourd'hui": ["Androany", "Today", "Aujourd’hui"],
    diffusions: ["fandefasana", "broadcasts", "diffusions"],
    diffusion: ["fandefasana", "broadcast", "diffusion"],
    "DÉBUT DANS": ["HANOMBOKA AFAKA", "STARTS IN", "COMMENCE DANS"],
    "Besoin d'une": ["Mila", "Need", "Besoin d’une"],
    "fanazavana?": ["fanazavana?", "information?", "informations?"],
  };
  Object.assign(catalog, {
    "Ny tantara tianao,": ["Ny tantara tianao,", "Your favorite stories,", "Vos histoires préférées,"],
    "amin'ny onjam-peo": ["amin'ny onjam-peo", "on the radio", "sur les ondes"],
    "akaiky anao.": ["akaiky anao.", "near you.", "près de chez vous."],
    "Ny tantara tianao, amin'ny onjam-peo akaiky anao.": ["Ny tantara tianao, amin'ny onjam-peo akaiky anao.", "Your favorite stories on the radio near you.", "Vos histoires préférées sur les ondes près de chez vous."],
    "Mila fanazavana?": ["Mila fanazavana?", "Need more information?", "Besoin d’informations ?"],
  });
  const lookup = new Map();
  for (const [key, values] of Object.entries(catalog)) {
    lookup.set(normalize(key), values);
    for (const v of values) if (!lookup.has(normalize(v))) lookup.set(normalize(v), values);
  }
  const originals = new WeakMap(),
    originalAttrs = new WeakMap();
  const attrs = ["placeholder", "title", "aria-label"];
  function translate(root = document.body) {
    const i = languages.indexOf(current);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest("script,style,textarea,option")) continue;
      const previous = originals.get(node);
      const raw = previous && lookup.get(normalize(node.nodeValue)) === lookup.get(normalize(previous)) ? previous : node.nodeValue;
      const key = normalize(raw);
      if (!key) continue;
      const values = lookup.get(key);
      if (!values) continue;
      originals.set(node, raw);
      const next = raw.match(/^\s*/)[0] + values[i] + raw.match(/\s*$/)[0];
      if (node.nodeValue !== next) node.nodeValue = next;
    }
    for (const el of [root, ...root.querySelectorAll("*")]) {
      if (el.nodeType !== 1) continue;
      const saved = originalAttrs.get(el) || {};
      originalAttrs.set(el, saved);
      for (const a of attrs) {
        if (!el.hasAttribute(a)) continue;
        const val = saved[a] ?? el.getAttribute(a),
          values = lookup.get(normalize(val));
        if (values) {
          saved[a] = val;
          el.setAttribute(a, values[i]);
        }
      }
      if (el.dataset.i18nKey === "faq.heading")
        el.textContent = [
          "Mila fanazavana ve?",
          "Need more information?",
          "Besoin d’informations?",
        ][i];
    }
    const nav = {
      "index.html": ["Fandraisana", "Home", "Accueil"],
      "programme.html": ["Fandaharana", "Schedule", "Programme"],
      "about.html": ["Fampahafantarana", "About", "À propos"],
      "faq.html": ["Fanontaniana", "FAQ", "FAQ"],
      "contact.html": ["Fifandraisana", "Contact", "Contact"],
      "favoris.html": ["Ankafizina", "Favorites", "Favoris"],
    };
    document.querySelectorAll("[data-nav]").forEach((el) => {
      if (nav[el.dataset.nav]) el.textContent = nav[el.dataset.nav][i];
    });
    document.querySelectorAll("option").forEach((el) => {
      const key = el.dataset.originalText || el.textContent.trim();
      el.dataset.originalText = key;
      const values = lookup.get(normalize(key));
      if (values) el.textContent = values[i];
    });
  }
  function init() {
    try {
      current = localStorage.getItem("tantara-language") || "fr";
    } catch {}
    if (!["fr", "en"].includes(current)) current = "fr";
    const select = document.getElementById("languageSelect");
    let updating = false;
    const observer = new MutationObserver(() => {
      if (updating) return;
      updating = true;
      observer.disconnect();
      translate();
      observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      updating = false;
    });
    function apply(lang) {
      current = ["fr", "en"].includes(lang) ? lang : "fr";
      document.documentElement.lang = current;
      observer.disconnect();
      translate();
      observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      if (select) select.value = current;
      try {
        localStorage.setItem("tantara-language", current);
      } catch {}
      document.dispatchEvent(
        new CustomEvent("tantara:language", { detail: { language: current } }),
      );
    }
    select?.addEventListener("change", (e) => apply(e.target.value));
    apply(current);
    window.TantaraI18n = {
      getLanguage: () => current,
      translate: () => {
        observer.disconnect();
        translate();
        observer.observe(document.body, {
          childList: true,
          characterData: true,
          subtree: true,
        });
      },
    };
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
