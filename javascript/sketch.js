let sizeW;
let sizeH;
let bigNum = 1
let buttonSubmit = document.getElementsByClassName('sub')[0]
let x = 0
let y = 0
let index = 0
let nodes = []
let lines = []
let submitNums = () => {
    sizeW = Number(document.getElementsByClassName('width')[0].value)
    sizeH = Number(document.getElementsByClassName('height')[0].value)
}


let vals = [100]
function setup() {
    frameRate(10)
    createCanvas(550,550)
    textAlign(CENTER, CENTER);

}

function draw() {
    background('white')

    while (bigNum < 101) {
        if (bigNum % 4 === 0) {
            nodes.push({id: bigNum, x: x, y: y, isLit: true})
        }

        else {
            nodes.push({id: bigNum, x: x, y: y, isLit: false})

        }

        if (x > 500) {
            y+=60
            x = 0
        }
        else {
            x+=60
        }
        bigNum++
    }

    if (bigNum === 101) {
        nodes.sort(() => Math.random() - 0.5);
        bigNum++
        console.log('only once')
    }

    if (index < 101) {
        lines.push(nodes[index])
        index+=1
    }

    for (let i = 0; i < nodes.length; i++) {
        noStroke()
        rect(nodes[i]['x'], nodes[i]['y'], 10, 10);

    }

        for (let i = 0; i<lines.length-1; i++) {
            strokeWeight(10)
            stroke(lines[i]['id'],lines[i]['id']*2,lines[i]['id']*2);
            line(lines[i]['x'], lines[i]['y'], lines[i+1]['x'], lines[i+1]['y'])
    }
    
    if (lines.length === 100) {
        lines = []
        bigNum = 101
        index = 0
    }
}

