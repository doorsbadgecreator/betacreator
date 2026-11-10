
 // ================================
 // ELEMENTS
 // ================================

 const iconInput = document.getElementById("iconInput");
 const badgeIcon = document.getElementById("badgeIcon");
 const iconPlaceholder = document.getElementById("iconPlaceholder");
 const exportButton = document.getElementById("exportButton");
 
 const nameInput = document.getElementById("nameInput");
 const descriptionInput = document.getElementById("descriptionInput");
 const taskInput = document.getElementById("taskInput");
 
 const badgeName = document.getElementById("badgeName");
 const badgeDescription = document.getElementById("badgeDescription");
 const badgeTask = document.getElementById("badgeTask");
 const badgeType = document.getElementById("badgeType");
 
 const typeButtons = document.querySelectorAll(".type-button");
 const badge = document.querySelector(".badge");
 const templateSetting = document.getElementById("templateSetting");
 const fontDropdown = document.getElementById("fontDropdown");
 const fontDropdownButton = document.getElementById("fontDropdownButton");
 const fontDropdownMenu = document.getElementById("fontDropdownMenu");
 
 const templateSelect = document.getElementById("template");
 const progressTemplates = Array.from(templateSelect.options);
 let selectedProgressTemplate = templateSelect.value;
 
 
 // ================================
 // BADGE FONT DROPDOWN
 // ================================
 
 fontDropdownButton.addEventListener("click", function () {
     fontDropdownMenu.classList.toggle("open");
 });
 
 fontDropdownMenu.querySelectorAll(".font-option").forEach(function (option) {
     option.addEventListener("click", function () {
         const selectedFont = this.dataset.font;
 
         badge.style.setProperty("--badge-font", selectedFont);
 
         fontDropdownButton.querySelector("span:first-child").textContent =
             selectedFont;
 
         fontDropdownButton.querySelector("span:first-child").style.fontFamily =
             selectedFont;
 
         fontDropdownMenu.classList.remove("open");
 
         fitBadgeName();
         fitBadgeDescription();
         fitBadgeTask();
     });
 });
 
 document.addEventListener("click", function (event) {
     if (!fontDropdown.contains(event.target)) {
         fontDropdownMenu.classList.remove("open");
     }
 });
 
 
 // ================================
 // TEMPLATES
 // ================================
 
 const templates = {
 
     general1: {
         borderFill: "#B49A80",
         nameFill: "#B49A80"
     },
 
     group: {
         borderFill: "linear-gradient(to bottom, #F4FCA7 0%, #E2C18B 50%, #84B4F5 100%)",
         nameFill: "linear-gradient(to bottom, #F4FCA7 0%, #E2C18B 50%, #84B4F5 100%)"
     },
 
     general2: {
         borderFill: "linear-gradient(to bottom, #F4FCA7 0%, #F9CC89 50%, #FE9567 100%)",
         nameFill: "linear-gradient(to bottom, #F4FCA7 0%, #F9CC89 50%, #FE9567 100%)"
     },
 
     archives: {
         borderFill: "linear-gradient(135deg, #82FF91 0%, #8DF3D0 32%, #82B7F4 58%, #8BFF9A 82%, #B4F58F 100%)",
         nameFill: "linear-gradient(135deg, #82B7F4 0%, #82B7F4 28%, #8BFF9A 28%, #8BFF9A 36%, #82B7F4 36%, #82B7F4 44%, #8BFF9A 44%, #8BFF9A 52%, #82B7F4 52%, #82B7F4 60%, #8BFF9A 60%, #8BFF9A 68%, #82B7F4 68%, #82B7F4 76%, #8BFF9A 76%, #8BFF9A 84%, #82B7F4 84%, #82B7F4 92%, #8BFF9A 92%, #8BFF9A 100%)"
     },
 
     stairwells: {
         borderFill: "linear-gradient(90deg, #66676B 0%, #55565A 30%, #414246 60%, #292A2E 100%)",
         nameFill: "linear-gradient(90deg, #707176 0%, #5C5D62 25%, #494A4F 50%, #37383D 75%, #27282C 100%)"
     },
 
     entity1: {
         borderFill: "linear-gradient(180deg, #CF8579 0%, #C97570 48%, #C76869 100%)",
         nameFill: "linear-gradient(180deg, #CF8579 0%, #C97570 48%, #C76869 100%)"
     },
 
     entity2: {
         borderFill: "linear-gradient(to bottom, #C594C5 0%, #E57B8A 50%, #F75F62 100%)",
         nameFill: "linear-gradient(to bottom, #C594C5 0%, #E57B8A 50%, #F75F62 100%)"
     },
 
     entity3: {
         borderFill: "linear-gradient(180deg, #F58FA6 0%, #EE72B7 42%, #C45BDD 78%, #A85BE8 100%)",
         nameFill: "linear-gradient(180deg, #F58FA6 0%, #EE72B7 42%, #C45BDD 78%, #A85BE8 100%)"
     },
 
     floor1: {
         borderFill: "linear-gradient(180deg, #E9FCFF 0%, #D9F6FF 35%, #B7E7FF 70%, #82C9F7 100%)",
         nameFill: "linear-gradient(180deg, #E8FCFF 0%, #CFEFFF 38%, #A8DBFF 72%, #7EC5F7 100%)"
     },
 
     floor2: {
         borderFill: "conic-gradient(from -31deg, #FFF06A 0%, #FFF06A 16%, #F8D58A 28%, #EFA7B5 40%, #D98FD1 47%, #82B9F5 54%, #82B9F5 62%, #C596E0 72%, #E9A5B5 84%, #F8D58A 94%, #FFF06A 100%)",
         nameFill: "linear-gradient(180deg, #FFF06A 0%, #F5D18A 32%, #E9A5B8 60%, #82B9F5 100%)"
     },
 
     crucifix1: {
         borderFill: "linear-gradient(180deg, #E7CBB5 0%, #D9F0FF 24%, #8CCEFF 50%, #D9F0FF 76%, #E7CBB5 100%)",
         nameFill: "linear-gradient(180deg, #E7CBB5 0%, #D9F0FF 24%, #8CCEFF 50%, #D9F0FF 76%, #E7CBB5 100%)"
     },
 
     crucifix2: {
         borderFill: "linear-gradient(180deg, #F1E4D5 0%, #DDF5FF 18%, #9DD9FF 36%, #82B9FF 50%, #C98FE0 67%, #E8A9B8 78%, #F0C77C 90%, #F0C77C 100%)",
         nameFill: "linear-gradient(180deg, #C8F7FF 0%, #A5DFFF 22%, #83B8F0 48%, #A99BEA 68%, #C58CE5 82%, #F09BC5 94%, #F0C36F 100%)"
     },
 
     challenge: {
         borderFill: "linear-gradient(90deg, #8ED8FF 0%, #8B7CFF 20%, #F05A6A 40%, #FFE56B 58%, #63E0C0 78%, #4C9CFF 100%)",
         nameFill: "linear-gradient(90deg, #8ED8FF 0%, #8B7CFF 20%, #F05A6A 40%, #FFE56B 58%, #63E0C0 78%, #4C9CFF 100%)"
     },
 
     "daily-run": {
         borderFill: "#20F044",
         nameFill: "#20F044"
     },
 
     battle: {
         borderFill: "linear-gradient(90deg, #B9ECFF 0%, #FFFFFF 50%, #5865D9 100%)",
         nameFill: "linear-gradient(90deg, #B9ECFF 0%, #FFFFFF 50%, #5865D9 100%)"
     },
 
     battle2: {
         borderFill: "linear-gradient(90deg, #FFFFFF 0%, #B9ECFF 25%, #FFE66D 50%, #F49BCB 75%, #5865D9 100%)",
         nameFill: "linear-gradient(90deg, #FFFFFF 0%, #B9ECFF 25%, #FFE66D 50%, #F49BCB 75%, #5865D9 100%)"
     }
 
 };
 
 const secretTemplates = {
     secretGeneral1: templates.general1,
     secretGroup: templates.group,
     secretGeneral2: templates.general2,
     secretArchives: templates.archives,
     secretStairwells: templates.stairwells,
     secretEntity1: templates.entity1,
     secretEntity2: templates.entity2,
     secretEntity3: templates.entity3,
     secretFloor1: templates.floor1,
     secretFloor2: templates.floor2,
     secretCrucifix1: templates.crucifix1,
     secretCrucifix2: templates.crucifix2,
     secretChallenge: templates.challenge,
     secretDailyRun: templates["daily-run"],
     secretBattle: templates.battle,
     secretBattle2: templates.battle2
 };
 
 const secretTemplateOptions = [
     ["secretGeneral1", "SecretGeneral1"],
     ["secretGroup", "SecretGroup"],
     ["secretGeneral2", "SecretGeneral2"],
     ["secretArchives", "SecretArchives"],
     ["secretStairwells", "SecretStairwells"],
     ["secretEntity1", "SecretEntity1"],
     ["secretEntity2", "SecretEntity2"],
     ["secretEntity3", "SecretEntity3"],
     ["secretFloor1", "SecretFloor1"],
     ["secretFloor2", "SecretFloor2"],
     ["secretCrucifix1", "SecretCrucifix1"],
     ["secretCrucifix2", "SecretCrucifix2"],
     ["secretChallenge", "SecretChallenge"],
     ["secretDailyRun", "SecretDailyRun"],
     ["secretBattle", "SecretBattle"],
     ["secretBattle2", "SecretBattle2"]
 ];
 
 const legacyTemplates = secretTemplates;
 
 const legacyTemplateOptions = [
     ["secretGeneral1", "LegacyGeneral1"],
     ["secretGroup", "LegacyGroup"],
     ["secretGeneral2", "LegacyGeneral2"],
     ["secretArchives", "LegacyArchives"],
     ["secretStairwells", "LegacyStairwells"],
     ["secretEntity1", "LegacyEntity1"],
     ["secretEntity2", "LegacyEntity2"],
     ["secretEntity3", "LegacyEntity3"],
     ["secretFloor1", "LegacyFloor1"],
     ["secretFloor2", "LegacyFloor2"],
     ["secretCrucifix1", "LegacyCrucifix1"],
     ["secretCrucifix2", "LegacyCrucifix2"],
     ["secretChallenge", "LegacyChallenge"],
     ["secretDailyRun", "LegacyDailyRun"],
     ["secretBattle", "LegacyBattle"],
     ["secretBattle2", "LegacyBattle2"]
 ];
 
 
 // ================================
 // APPLY TEMPLATE
 // ================================
 
 function applyTemplate() {
     let selectedTemplate;
 
     if (badge.classList.contains("type-secret")) {
         selectedTemplate = secretTemplates[templateSelect.value];
     } else if (badge.classList.contains("type-legacy")) {
         selectedTemplate = legacyTemplates[templateSelect.value];
     } else {
         selectedTemplate = templates[templateSelect.value];
     }
 
     if (!selectedTemplate) return;
 
     document.documentElement.style.setProperty(
         "--template-border-fill",
         selectedTemplate.borderFill
     );
 
     document.documentElement.style.setProperty(
         "--template-name-fill",
         selectedTemplate.nameFill
     );
 }
 
 templateSelect.addEventListener("change", applyTemplate);
 applyTemplate();
 
 
 // ================================
 // ICON UPLOAD
 // ================================
 
 iconInput.addEventListener("change", function () {
     const file = this.files[0];
     if (!file) return;
 
     const imageURL = URL.createObjectURL(file);
 
     badgeIcon.src = imageURL;
     badgeIcon.style.display = "block";
     iconPlaceholder.style.display = "none";
 });
 
 
 // ================================
 // BADGE NAME
 // ================================
 
 nameInput.addEventListener("input", function () {
     if (this.value.trim() === "") {
         badgeName.textContent = "NAME OF BADGE";
     } else {
         badgeName.textContent = this.value;
     }
 
     fitBadgeName();
 });
 
 
 // ================================
 // FIT BADGE NAME
 // ================================
 
 function fitBadgeName() {
     const title = badgeName;
     if (!title) return;
 
     const maxSize = badge.classList.contains("type-progress") ? 36 : 32;
     const minSize = 14;
 
     let size = maxSize;
 
     title.style.fontSize = size + "px";
     title.style.transform = "translateY(0)";
 
     while (title.scrollWidth > title.clientWidth && size > minSize) {
         size--;
         title.style.fontSize = size + "px";
     }
 
     const offset = (maxSize - size) * 0.87;
     title.style.transform = `translateY(${offset}px)`;
 }
 
 function fitBadgeDescription() {
     const text = badgeDescription;
     if (!text) return;
 
     const maxSize = 32;
     const minSize = 14;
 
     let size = maxSize;
 
     text.style.whiteSpace = "nowrap";
     text.style.fontSize = size + "px";
 
     while (text.scrollWidth > text.clientWidth && size > minSize) {
         size--;
         text.style.fontSize = size + "px";
     }
 
     if (size === minSize && text.scrollWidth > text.clientWidth) {
         text.style.whiteSpace = "normal";
     }
 
     const offset = (maxSize - size) * 0.1;
 
     if (badge.classList.contains("type-progress")) {
         text.style.top = `calc(50% + ${offset}px)`;
     } else {
         text.style.transform = `translateY(-${offset}px)`;
     }
 }
 
 function fitBadgeTask() {
     const text = badgeTask;
     if (!text) return;
 
     const maxSize = 32;
     const minSize = 14;
 
     let size = maxSize;
 
     text.style.whiteSpace = "nowrap";
     text.style.fontSize = size + "px";
 
     while (text.scrollWidth > text.clientWidth && size > minSize) {
         size--;
         text.style.fontSize = size + "px";
     }
 
     if (size === minSize && text.scrollWidth > text.clientWidth) {
         text.style.whiteSpace = "normal";
     }
 
     const offset = (maxSize - size) * 0.3;
 
     if (badge.classList.contains("type-progress")) {
         text.style.bottom = `calc(2px + ${offset}px)`;
     } else {
         text.style.transform = `translateY(-${offset}px)`;
     }
 }
 
 
 // ================================
 // DESCRIPTION
 // ================================
 
 descriptionInput.addEventListener("input", function () {
     if (this.value.trim() === "") {
         badgeDescription.textContent = "Description";
     } else {
         badgeDescription.textContent = this.value;
     }
 
     fitBadgeDescription();
 });
 
 
 // ================================
 // TASK
 // ================================
 
 taskInput.addEventListener("input", function () {
     if (this.value.trim() === "") {
         badgeTask.textContent = "Task";
     } else {
         badgeTask.textContent = this.value;
     }
 
     fitBadgeTask();
 });
 
 
 // ================================
 // BADGE TYPE
 // ================================
 
 typeButtons.forEach(button => {
     button.addEventListener("click", function () {
         typeButtons.forEach(btn => {
             btn.classList.remove("active");
         });
 
         this.classList.add("active");
 
         if (this.dataset.type === "SECRET") {
             badgeType.textContent = "SECRET (Doesn't count towards progression)";
         } else if (this.dataset.type === "LEGACY") {
             badgeType.textContent = "LEGACY (No progression, badge no longer in use)";
         } else {
             badgeType.textContent = this.dataset.type;
         }
 
         badge.classList.remove(
             "type-progress",
             "type-legacy",
             "type-secret"
         );
 
         badge.classList.add("type-" + this.dataset.type.toLowerCase());
 
         if (this.dataset.type === "PROGRESS") {
             templateSelect.innerHTML = "";
 
             progressTemplates.forEach(option => {
                 templateSelect.appendChild(option);
             });
 
             templateSelect.value = selectedProgressTemplate;
 
             applyTemplate();
             fitBadgeName();
             fitBadgeDescription();
             fitBadgeTask();
 
         } else if (this.dataset.type === "SECRET") {
             templateSelect.innerHTML = "";
 
             secretTemplateOptions.forEach(([value, text]) => {
                 const option = document.createElement("option");
                 option.value = value;
                 option.textContent = text;
                 templateSelect.appendChild(option);
             });
 
             templateSelect.value = "secretGeneral1";
 
             applyTemplate();
             fitBadgeName();
             fitBadgeDescription();
             fitBadgeTask();
 
         } else if (this.dataset.type === "LEGACY") {
             templateSelect.innerHTML = "";
 
             legacyTemplateOptions.forEach(([value, text]) => {
                 const option = document.createElement("option");
                 option.value = value;
                 option.textContent = text;
                 templateSelect.appendChild(option);
             });
 
             templateSelect.value = "secretGeneral1";
 
             applyTemplate();
             fitBadgeName();
             fitBadgeDescription();
             fitBadgeTask();
 
         } else {
             selectedProgressTemplate = templateSelect.value;
             templateSelect.innerHTML = "";
         }
     });
 });
 
 
 // ================================
 // EXPORT BADGE
 // ================================
 
 exportButton.addEventListener("click", function () {
     alert("WIP, u have to SS the badge rn");
 });
 
 
 // ================================
 // RESPONSIVE BADGE PREVIEW
 // Keeps the original 680 × 183 design
 // and scales the whole badge to fit.
 // ================================
 
 const badgeStage = document.getElementById("badgeStage");
 const BADGE_DESIGN_WIDTH = 680;
 const BADGE_DESIGN_HEIGHT = 183;
 
 function updateBadgeScale() {
     if (!badgeStage || !badge) return;
 
     const availableWidth = badgeStage.clientWidth;
     if (!availableWidth) return;
 
     const scale = Math.min(1, availableWidth / BADGE_DESIGN_WIDTH);
 
     badge.style.transform = "scale(" + scale + ")";
     badgeStage.style.height = (BADGE_DESIGN_HEIGHT * scale) + "px";
 }
 
 window.addEventListener("resize", updateBadgeScale);
 
 window.addEventListener("orientationchange", function () {
     window.setTimeout(updateBadgeScale, 120);
 });
 
 if (typeof ResizeObserver !== "undefined" && badgeStage) {
     new ResizeObserver(updateBadgeScale).observe(badgeStage);
 }
 
 updateBadgeScale();
 