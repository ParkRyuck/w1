
console.log("lotto..............")

const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click", function(event) {
        console.log(event)

        const target = document.getElementById("resultDiv")

        const balls = lottoArr

        target.innerHTML = ''


//         for (let i = 0; i < balls.length; i++) {
//                 const num = balls[i]
//                 const tag = document.createElement("h3")
//                 const textNode = document.createTextNode(num)
//                 tag.appendChild(textNode)
//                 target.appendChild(tag)
//         }
// }, false)

        for (const num of balls) {
                const tag = document.createElement("h3")
                const textNode = document.createTextNode(num)
                tag.appendChild(textNode)
                target.appendChild(tag)
        }
}, false)

function makeLottoNum(arr) {
        for (let i = 0; i < 6; i++) {
                let ranNum = (Math.random()*45+1).toFixed(0)
                if(arr.indexOf(ranNum)>-1){
                        i--
                        continue
                }else{
                        arr.push(ranNum)
                }
        }
        return arr
}

const lottoArr = []
LottoArr = makeLottoNum(lottoArr)