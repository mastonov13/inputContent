let textOne = document.querySelector("#id1");
let textTwo = document.querySelector("#id2");
let content = document.querySelector(".content");
let info = [];

function inContent(){
        let tex = textOne.value.trim();
        let tex2 = textTwo.value.trim();
        info.push(tex);
        info.push(tex2);

        content.innerHTML = info;

        textOne.value= "";
        textTwo.value= "";
};
