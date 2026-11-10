MADE BY TEGBS

Credits:
bread023250 (DC) for mobile support




Badge Creator is a small tool for creating Roblox DOORS-style badges.

You can freely use this project and create your own badges.


If you use it for commercial purposes, please leave credit to TegBS (aka me)

Installation:

1. Download the WHOLE folder. Make sure it contains:

   index.html
   script.js
   style.css
   assets

2. Open index.html in your web browser.

If everything is installed correctly, Badge Creator should open in your browser.

PC is recommended. Mobile may work, but the website is currently not optimized for mobile devices.

You are free to modify the code however you want. You can change the HTML, CSS, JavaScript, images, templates, fonts, and other files to make the project your own.


How to add custom fonts:

1. Download a font as a .ttf or .otf file.

2. Put the font inside the "fonts" folder, which is located inside the "assets" folder.

Example:

assets/fonts/Rblxdoorsnewfont-Regular.ttf

3. Add the following code to style.css:

@font-face {
    font-family: "Rblxdoorsnewfont";
    src: url("assets/fonts/Rblxdoorsnewfont-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}

4. Add this to the bottom of style.css:

.font-preview-doors {
    font-family: "Rblxdoorsnewfont", sans-serif;
}

5. Add the following to the font options in index.html:

<div class="font-option" data-font="Rblxdoorsnewfont">
    <span class="font-preview-doors">DOORS</span>
</div>

6. Save everything and reload index.html.

Make sure the filename in the url(...) is exactly the same as the actual font filename.

The font name used in font-family and data-font should also match.

For example:

font-family: "Rblxdoorsnewfont";

data-font="Rblxdoorsnewfont"


Recommended project structure:


More tutorials and customization guides coming soon.

Badge Creator — made by TegBS.

Feel free to modify and use the project.

If you use it commercially, please leave credit to TegBS (aka me)