// text
txt = "asd<p>test this out<span>with more </span>and between text<span class='second'>second</span></p>afe";

//shared array
var instructions = [];


// typeWriter
var i = 0; // 
var j = 0;
var elem = '';
var elem_value = '';
var speed = 50;

function typeWriter() {

    if (j < instructions.length) {
        if (typeof instructions[j][1] == 'string') {
            if (i < txt.length) {
                instructions[j][0].innerHTML += instructions[j][1].charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                j = j + 1;
                i = 0;
                setTimeout(typeWriter, speed);
            }
        }
        else if (typeof instructions[j][1] == 'object') {
            console.log("ins", instructions[j][0]);
            instructions[j][0].appendChild(instructions[j][1]);
            j = j + 1;
            i = 0;
            typeWriter();
        }
    }
}
//  


// recreateNode
parser = new DOMParser();

function recreateNode(list, container) {
    doc = parser.parseFromString(list, "text/html");
    doc.body.childNodes.forEach(function (a) {
        console.log(a);
        if (a.nodeName == '#text') {
            instructions.push([container, a.nodeValue])
        }
        else { // if there is element to create
            b = a.cloneNode(true); // handle deep elements
            c = a.cloneNode(false); // this way I can get ONLY the element with attributes and classes

      /* container.appendChild(c) */; // I append only element
            instructions.push([container, c]);
            recreateNode(b.innerHTML, c); // b will be appended to c

        }
    });

}

// init

parent = document.querySelector(".about_text");
console.log(parent);
recreateNode(txt, parent);
typeWriter();