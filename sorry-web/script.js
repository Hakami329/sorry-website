let size = 20;
let step = 0;

const texts = [
    "เค้าขอโทษจริงๆ 🥺",
    "งืออออ 😭",
    "ดีกันน้าาา 💔",
    "เค้าจะไม่ทำอีกแล้ว 😢",
    "น้าาาาา 💖"
];

const images = [
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
    "cat4.jpg",
    "cat5.jpg"
];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["💖","💕","💗","💓","❤"] [Math.floor(Math.random()*5)];

    const size = Math.random()*30 + 20;

    heart.style.fontSize = size + "px";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.top = Math.random()*100 + "vh";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },3000);
}

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("click", () => {

    if(step < texts.length){

        document.getElementById("text").innerText =
        texts[step];

        document.getElementById("cat").src =
        images[step];
    }

    size += 15;

    yesBtn.style.fontSize = size + "px";

    if(size > 80){
        noBtn.style.display = "none";
    }

    step++;
});

yesBtn.addEventListener("click", () => {

    for(let i = 0; i < 40; i++){

        setTimeout(() => {
            createHeart();
        }, i * 40);

    }

    setTimeout(() => {

        document.body.classList.add("fade-out");

        setTimeout(() => {

            document.body.innerHTML = `

            <div class="ending">

                <h1>เย่~ 💖</h1>

                <img
                    src="cat6.jpg"
                    width="300">

                <h2>
                    ขอบคุณที่ให้อภัยเค้าน้าาา 🥺💕
                </h2>

                <button id="letter">
                    💌 เปิดข้อความจากเค้า
                </button>

            </div>

            `;

            document.body.classList.remove("fade-out");

            document.getElementById("letter").addEventListener("click", () => {

                const popup = document.createElement("div");

                popup.className = "letter-overlay";

                popup.innerHTML = `

                <div class="letter-card">

                    <h1>💖</h1>

                    <h2>ถึงเธอ</h2>

                    <p>

                        เค้าขอโทษจริง ๆ นะ

                        <br><br>

                        เค้ารู้ว่าสิ่งที่เค้าทำ
                        ทำให้เธอเสียใจและไม่เชื่อใจเค้าอีกแล้ว

                        <br><br>

                        ขอบคุณนะที่ยังเป็นห่วงเค้าตลอด

                        <br><br>

                        รักเธอนะ 🥺💕

                    </p>

                    <button id="closeLetter">
                        ปิดจดหมาย
                    </button>

                </div>

                `;

                document.body.appendChild(popup);

                document.getElementById("closeLetter").onclick = () => {

                    popup.remove();

                };

            });

        }, 800);

    }, 2200);

});