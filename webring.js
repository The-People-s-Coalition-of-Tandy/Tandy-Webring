var insert = document.querySelector("#tandyWebring");
const currentSite = window.location.origin;

// Find the current site in the data
const matchedSiteIndex = sites.findIndex(
    (site) => site.url.startsWith(currentSite)
);
let prevSiteIndex = matchedSiteIndex - 1;

if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

let nextSiteIndex = matchedSiteIndex + 1;
if (nextSiteIndex == sites.length) nextSiteIndex = 0;
const randomSiteIndex = this.getRandomInt(0, sites.length - 1);
insert.innerHTML = `<style>
.webring {
  text-align: center;
  font: 100% system-ui, sans-serif;
}

.logo {
    height: 50px;
}

#navigator {
    display: flex;
    justify-content: center;
    gap: 8px;
}

#copy {
  margin-bottom: 10px;
}
</style>

<div class="webring">
  <div id="copy">
  <strong>The Tandy Webring</strong>  
  </div>
  <div id="navigator">
  
            <p>
                <a href="${sites[prevSiteIndex].url}">[Prev]</a>
            </p>
            <div>
                <a href="https://webring.pcotandy.org/">
                    <img class="logo" src="https://webring.pcotandy.org/Assets/TandyLogo.png"></img>
                </a>
                <p style="margin: 0;">
                <a href="${sites[randomSiteIndex].url}">[Rand]</a>
                </p>
            </div>
            <p>
                <a href="${sites[nextSiteIndex].url}">[Next]</a>
            </p>
            
  </div>
</div>`

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}