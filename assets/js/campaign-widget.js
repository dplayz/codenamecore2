const getCampaigns = async (field1, field2) => {
    if (field1 == true){
        const response = await fetch(`${field2}`, { cache: "reload" });
        const data = await response.json();
        return data;
    } else {
        return field2;
    }
};
const checkExpiredEntries = (data) => {
    data = data.filter(entry => {
        // Check if expiry is defined, then filter expired entries
        if (entry.expiry) {
          const expiryDate = new Date(entry.expiry);
          if ((expiryDate <= this.now) && (!entry.dismissible)) return false; // Exclude if expiry date is in the past
        }
        // Check if dismissible, then filter dismissed entries
        if (entry.dismissible) {
          const localStorageEntry = localStorage.getItem(`campaign-entry-${entry.id}-dismissed`);
          console.log(localStorageEntry);
          if (localStorageEntry === "true") return false;  // Exclude if dismissible is true in localStorage
        }
        return true; // Keep if both conditions pass
      });
    return data;
};
const parseContents = (data) => {
    data.forEach(campaign => {
        if (campaign.style == undefined){
            campaign.style = "background-color: yellow;"
        }
        var parsedContent = template(campaign.id, campaign.content, campaign.style, campaign.details, campaign.dismissible);
        campaignBar.insertAdjacentHTML("beforeend", parsedContent );
    });
    return data;
};

function template(id, content, style, details, dismissible){
    var templateContent = `
        <div class="container-fluid alert m-0 rounded-0 border-bottom text-center" data-campaign-id="${id}" style="${style}">
            <span class="m-1">${content}</span>
        `;
    if (dismissible == true){
        templateContent += 
        `<button type="button" class="btn btn-sm my-0 float-end" onclick="dismissCampaign('${id}');">
        <span>x</span>
        </button>`
    }
    if (details != undefined){
        templateContent += `
            <button type="button" class="btn btn-sm btn-primary my-0" data-bs-toggle="modal" data-bs-target="#campaign-entry-${id}-modal">
            Details
            </button>
        `;
        var modalContent = `
            <div class="modal fade" id="campaign-entry-${id}-modal" tabindex="-1" aria-labelledby="campaign-entry-${id}-modal-label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="${style}">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="campaign-entry-${id}-modal-label">${content}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${details}
                </div>
                </div>
            </div>
            </div>
        `
        // Placing the modal inside the header causes the modal to be blocked by the backdrop
        // That's why we're creating and placing it in a container at the end of the body tag.
        var campaignFooterContainer = document.querySelector("div#campaignFooterContainer");
        if (campaignFooterContainer == null) {
            var campaignFooterTemplate = `<div data-turbo-permanent id="campaignFooterContainer"></div>`
            document.querySelector("body").insertAdjacentHTML("beforeend", campaignFooterTemplate)
            campaignFooterContainer = document.querySelector("div#campaignFooterContainer");
        }
        campaignFooterContainer.insertAdjacentHTML("beforeend", modalContent)
        document.querySelector("div#campaignFooterContainer").insertAdjacentHTML("beforeend", modalContent)
    }
    templateContent += `</div>`
    return templateContent;
}
function dismissCampaign(id){
    localStorage.setItem(`campaign-entry-${id}-dismissed`, "true")
    document.querySelector(`[data-campaign-id='${id}']`).style = "display:none;";
};
