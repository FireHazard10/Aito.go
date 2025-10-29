// Search popup
const searchPopup = document.getElementById("searchPopup");
document.getElementById("searchBtn").addEventListener("click", () => {
  searchPopup.style.display = "flex";
});

//  Close popup function
function closeSearch() {
  searchPopup.style.display = "none";
}

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

// Example search data
const suggestions = [
  "Kimi Ga Nozomu Eien (2003)",
  "Rurouni Kenshin - Reminiscence (1999)",
  "Fullmetal Alchemist (2003)",
  "Elfen Lied (2004)",
  "Full Moon wo Sagashite (2002) ",
  "Berserk (1997)",
  "Cowboy Bebop (1998) ",
  "Hikaru no Go (2001) ",
  "Fruits Basket (2001) ",
  "Gundam SEED (2002) ",
  "Hajime no Ippo (2000)",
  "Last EXILE (2003) ",
  "Scrapped Princess (2003)",
  "Azumanga Daioh (2002) ",
  "GunGrave (2003) ",
  "Neon Genesis Evangelion (1995) ",
  "Full Metal Panic? Fumoffu! (2003) ",
  "Naruto (2002)",
  "12 Kokuki (2002)",
  "One Piece (1999)",
  "Furi Kuri (2000)",
  "Rahxephon (2002)",
  "AIR TV (2005)",
  "Shingetsutan Tsukihime (2003) ",
  "Trigun (1998) ",
  "Great Teacher Onizuka (2000)",
  "Vision of Escaflowne (1996)",
  "Monster (2004)",
  "X TV (2001) ",
  "Haibane Renmei (2002)",
  "Ima, Sokoni Iru Boku (1999) ",
  "Grave of the Fireflies (1988)",
  "Cowboy Bebop - Knockin' on heaven's door (2001) ",
  "Hunter X Hunter (1999) ",
  "Rurouni Kenshin (1996) ",
  "Samurai Champloo (2004) ",
  "Onegai Teacher (2002) ",
  "Spirited Away (2001) ",
  "Bleach (2004) ",
  "Full Metal Panic! (2002) ",
  "BECK (2004) ",
  "Kareshi Kanojo no Jijou (1998) ",
  "Mai HiME (2004)",
  "Chrno Crusade (2003) ",
  "Planet ES (2003)",
  "Chobits (2002) ",
  "Gunslinger Girl (2003)",
  "Full Metal Panic! The Second Raid (2005) ",
  "Noir (2001)",
  "GetBackers (2002) ",
  "Love Hina (2000) ",
  "Read or Die (2001) ",
  "Uchuu no Stellvia (2003) ",
  "R.O.D -THE TV- (2003) ",
  "Inuyasha (2000) ",
  "Kanon (2002) ",
  "Hoshi no Koe (2002) ",
  "Saikano (2002)",
  "Kino no tabi ~the Beautiful World~ (2003) ",
  "School Rumble (2004) ",
  "Vampire Hunter D: Bloodlust (2001)",
  "Ghost in the Shell Stand Alone Complex 1st GIG (2002)",
  "Princess Mononoke (1997)",
  "Wolf's Rain (2003) ",
  "Scryed (2001) ",
  "Serial Experiments Lain (1998) ",
  "Ranma 1/2 (1989) ",
  "Midori no Hibi (2004) ",
  "Seikai no Monshou (1999) ",
  "Gankutsuoh (2004) ",
  "Infinite Ryvius (1999) ",
  "Card Captor Sakura (1998) ",
  "Hachimitsu to Clover (2005)",
  "Boogiepop Phantom (2000) ",
  "My Neighbor Totoro (1988) ",
  "Ghost in the Shell (1995) ",
  "Vandread 2 (2001) ",
  "Nausicaa of the Valley of the Wind (1984)",
  "Hellsing (2001) ",
  "Jungle wa itsumo Hare nochi Guu (2001)",
  "Kiddy Grade (2002) ",
  "Rurouni Kenshin - Seisouhen (2001) ",
  "Akira (1988) ",
  "Ai Yori Aoshi (2002) ",
  "Jin-Roh, The Wolf Brigade (2000) ",
  "Koi Kaze (2004) ",
  "AA! Megami Sama (1993)",
  "Genshiken (2004) ",
  "Witch Hunter Robin (2002)",
  "Maison Ikkoku (1986) ",
  "Kannazuki no Miko (2004) ",
  "Paranoia Agent (2004) ",
  "Initial D - First Stage (1998) ",
  "Aishiteruze Baby (2004) ",
  "hack//SIGN (2002)",
  "Mahoromatic (2001)",
  "Mahou Tsukai ni Taisetsu na Koto (2003)",
  "Princess Tutu (2002) ",
  "eikai no Senki (2000) ",
  "Samurai 7 (2004) ",
  "Vandread (2000)",
  "Kidou Tenshi Angelic Layer (2001) ",
  "Gunparade March - Arata Naru Ko Gunka (2003)",
  "Gravitation TV (2000) ",
  "Whisper of the heart (1995) ",
  "Millennium Actress (2001) ",
  "Kodomo no Omocha (1996)",
  "Tennis no Ohjisama (2001) ",
  "Laputa: Castle in the Sky (1986)",
  "D.N Angel (2003)",
  "Golden Boy (1995) ",
  "Hana Yori Dango (1996)",
  "Fushigi Yuugi (1995) ",
  "D.C ~Da Capo~ (2003) ",
  "Maria-sama ga Miteru (2004)",
  "Ai Mai Mi ! Strawberry Egg (2001)",
  "Basilisk ~ Koga Ninpo Cho ~ (2005) ",
  "Seikai no Senki 2 (2001) ",
  "Revolutionary Girl Utena (1997) ",
  "Evangelion: End of Evangelion (1997) ",
  "Slam Dunk (1993) ",
  "Tenshi na Konamaiki (2002) ",
  "Excel Saga (1999)",
  "Ayashi no Ceres (2000)",
  "Mahoromatic TV 2 (2002) ",
  "Abenobashi Mahou Shotengai (2002) ",
  "Ultra Maniac TV (2003) ",
  "Outlaw Star (1998) ",
  "Pita Ten (2002) ",
  "Onegai Twins (2003) ",
  "Love Hina Christmas Special (2001) ",
  "Kumo no Muko, Yakusoku no basho (2004) ",
  "Martian Successor Nadesico (1996) ",
  "Slayers, The (1995)",
  "TEXHNOLYZE (2003)",
  "Macross Plus (1994)",
  "Piano (2002) ",
  "AA! Megami Sama: The Movie (2000) ",
  "Boys Be (2000) ",
  "Shaman King (2001)",
  "Sokyu No Fafner (2004) ",
  "Macross Zero (2002)",
  "hack//Legend of Twilight Bracelet (2003)",
  "Matantei Loki - Ragnarok (2003) ",
  "GANTZ (2004) ",
  "Kimagure Orange Road TV (1987) ",
  "Maburaho (2003) ",
  "Air Master (2003) ",
  "Final Fantasy VII Advent Children (2005) ",
  "Tokyo Underground (2002) ",
  "Suzuka (2005)",
  "Ninja Scroll (1993)",
  "Legend of Condor Hero (2001) ",
  "Kiki's Delivery Service (1989) ",
  "Ai Yori Aoshi ~Enishi~ (2003) ",
  "MADLAX (2004)",
  "Yami no Matsuei (2000)",
  "Metropolis (2001)",
  "DearS (2004)",
  "Spiral ~Bond of Inference~ (2002)",
  "Video Girl Ai (1991)",
  "Ghost in the Shell 2: Innocence (2004)",
  "Gundam SEED Destiny (2004) ",
  "Appleseed Movie (2004)",
  "Perfect Blue (1997)",
  "Tenjou Tenge (2004)",
  "Record of Lodoss War OVA (1990) ",
  "Blood: The Last Vampire (2000) ",
  "NARUTARU (2003)",
  "Escaflowne - The Movie (2000) ",
  "Green Green TV (2003) ",
  "Peace Maker Kurogane (2003)",
  "Happy Lesson TV (2002) ",
  "Tsubasa Chronicle (2005)",
  "To Heart (1999)",
  "Jubei-chan the Ninja Girl (1999)",
  "Rozen Maiden (2004) ",
  "Popotan (2003)",
  "Gasaraki (1998)",
  "Love Hina OVA (2002)",
  "Ichigo 100% (2005) ",
  "Gundam Wing (1995) ",
  "Dual! Parallel Trouble Adventures TV (1999) ",
  "Groove Adventure Rave (2001)",
  "Love Hina Spring Special (2001) ",
  "Maho Sensei Negima (2005) ",
  "Alien Nine (2001) ",
  "Angel Sanctuary (2000) ",
  "Flame of Recca (1992) ",
  "Dragon Ball (1986)",
  "Prince of Darkness (1998) ",
  "Battle Angel (1993) ",
  "Rurouni Kenshin - Requiem for the Restoration Royalists (1997) ",
  "Grenadier - Hohoemi no Senshi - (2004)",
  "Bastard! Destroyer of Darkness (1992) ",
  " Kite (1998) ",
  " Mezzo - Danger Service Agency (2004) ",
  "Dragon Ball Z (1989)",
  "Samurai Deeper Kyo (2002) ",
  "Ikkitousen (2003)",
];

// Search suggestion functionality
searchInput.addEventListener("input", function () {
  const input = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = ""; // Clear old suggestions

  if (input) {
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(input)
    );

    filteredSuggestions.forEach(function (suggestion) {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", function () {
        searchInput.value = suggestion; // Fill input when clicked
        suggestionsList.innerHTML = ""; // Clear suggestions
      });
      suggestionsList.appendChild(li);
    });
  }
});

// Theme toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = themeBtn.querySelector("i");
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("bx-moon", "bx-sun");
  } else {
    icon.classList.replace("bx-sun", "bx-moon");
  }
});

// Watchlist (placeholder)
//document.getElementById("watchlistBtn").addEventListener("click", () => {
//alert("⭐ Your Watchlist feature will go here!");
//});
const watchlistBtn = document.getElementById("watchlistBtn");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

watchlistBtn.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Optional: close when clicking outside popup
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

// Random anime redirect (placeholder)
const randomAnimes = [
  "page-1.html",
  "page-2.html",
  "page-3.html",
  "page-4.html",
  "page-5.html",
  "page-6.html",
  "page-7.html",
  "page-8.html",
];
document.getElementById("randomBtn").addEventListener("click", () => {
  const random = randomAnimes[Math.floor(Math.random() * randomAnimes.length)];
  window.location.href = random;
});

// Notifications (placeholder)
//document.getElementById("notifyBtn").addEventListener("click", () => {
//alert("🔔 No new notifications right now!");
//});

const floatBtn = document.getElementById("floatBtn");
const menuItems = document.querySelectorAll(".menu-item");

let isDragging = false;
let offsetX, offsetY;
let menuOpen = false;

floatBtn.addEventListener("click", () => {
  if (!isDragging) {
    menuOpen = !menuOpen;
    toggleFloatingMenu();
  }
});

function toggleFloatingMenu() {
  const btnRect = floatBtn.getBoundingClientRect();
  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  const arcDirection = btnX < window.innerWidth / 2 ? 1 : -1; // 1 = right arc, -1 = left arc
  const radius = 70; // distance from button to items
  const totalItems = menuItems.length;
  const angleStep = Math.PI / (totalItems + 1); // spread items in semi-circle

  menuItems.forEach((item, i) => {
    if (menuOpen) {
      const angle = angleStep * (i + 1) - Math.PI / 2;
      const x = Math.cos(angle) * radius * arcDirection;
      const y = Math.sin(angle) * radius;
      item.style.left = btnX - 25 + x + "px";
      item.style.top = btnY - 25 + y + "px";
      item.style.opacity = "1";
    } else {
      item.style.left = btnX - 25 + "px";
      item.style.top = btnY - 25 + "px";
      item.style.opacity = "0";
    }
  });
}

// Drag logic
floatBtn.addEventListener("mousedown", (e) => {
  isDragging = false;
  offsetX = e.clientX - floatBtn.getBoundingClientRect().left;
  offsetY = e.clientY - floatBtn.getBoundingClientRect().top;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  isDragging = true;
  menuOpen = false; // close when moving
  toggleFloatingMenu();
  floatBtn.style.left = e.clientX - offsetX + "px";
  floatBtn.style.top = e.clientY - offsetY + "px";
  floatBtn.style.right = "";
  floatBtn.style.bottom = "";
  floatBtn.style.position = "fixed";
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}
