
var navButtons = [
    'PRICING',
    'ACCOUNT',
    'CONTACT',
    'ALL PRODUCTS',
    'DIVI'
];

var navBoxLinks = [
    'Link01',
    'Link02',
    'Link03',
    'Link04',
];

var ToggledIds = [
    ids='',
    vals=''
]

for(let i = 1; i < navButtons.length; i++)
{
    // Identify the parent
    var iNavBox = document.getElementById('nav-box-0' + i);
    // Build a string of the content, rather than using innerHTML for each section, otherwise the compiler will close certain tags (<ul></ul>) before their content is filled
    var navBoxContentString = `
    <div class="nav-box-pip"></div>
    <div class="nav-box-shadow"></div>
    <div class="nav-box-content">
        <span class="nav-box-header">Link list 01</span>
        <hr class="nav-box-top-line">
        <ul>`;
        for(let j = 0; j < navBoxLinks.length; j++)
        {
            navBoxContentString += `
            <li>
                <a href="#" class="nav-box-top-link">Link 0` + (j+1) + `</a>
            </li>`;
        }
        navBoxContentString += `
        </ul>
        <br>
        <span class="nav-box-header">Link list 02</span>
        <hr class="nav-box-bottom-line">
        <ul>`;
        for(let k = 0; k < navBoxLinks.length; k++)
        {
            navBoxContentString += `
            <li>
                <a href="#" class="nav-box-bottom-link">Link 0` + (k+1) + `</a>
            </li>`;
        }
    navBoxContentString +=`
        </ul>
        </div>`;
    // Deploy the built string as innerHTML
    iNavBox.innerHTML = navBoxContentString;
}

function ShowElementOfId(_id)
{
    //document.getElementById(_id).style.visibility = 'visible';
    //document.getElementById(_id).classList.add('show');
    document.getElementById(_id).classList.remove('hidden');
}

function HideElementOfId(_id)
{
    //document.getElementById(_id).style.visibility = 'hidden';
    //document.getElementById(_id).classList.remove('show');
    document.getElementById(_id).classList.add('hidden');
}

function ToggleElementOfId(_id)
{
    document.getElementById(_id).classList.toggle("toggled");
}