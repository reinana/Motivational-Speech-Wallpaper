class WallPaper {
    constructor(imgUrl, quote, vPosition, hPosition, textColor) {
        this.imgUrl = imgUrl;
        this.quote = quote;
        this.vPosition = ["start", "center", "end"].includes(vPosition) ? `align-items-${vPosition}` : "";
        this.hPosition = ["start", "center", "end"].includes(hPosition) ? `justify-content-${hPosition}` : "";
        this.textColor = textColor;
    }
    
    createWallPaperElement() {
        // コンテナ
        const container = document.createElement("div");
        container.classList.add("container", "d-flex", "justify-content-center", "py-5");

        // 画像div
        const element = document.createElement("div");
        element.classList.add("d-flex", this.vPosition, this.hPosition, "p-md-5","p-3", "my-md-5", "col-md-8");
        element.style = `background-image: url('${this.imgUrl}'); height: 75vh; color: ${this.textColor}; background-size: cover;`;
        
        // テキストh3
        const textElement = document.createElement("h3");
        textElement.classList.add("quate", "p-2", "col-8");
        textElement.innerHTML = this.quote;

        
        element.appendChild(textElement);
        container.appendChild(element);

        return container;
    }
    
    set(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.appendChild(this.createWallPaperElement());
        }
    }
}

// 画像とテキストのデータを定義
const imgSrc = {
    "image1": "https://recursionist.io/img/different-job.png",
    "image2": "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
    "image3": "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
};

const quotes = {
    "text1" : "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
    "text2" : "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
    "text3" : "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman"
};

// インスタンスを作成して画像とテキストを設定
const wallpapers = [
    new WallPaper(imgSrc["image1"], quotes["text1"], "start", "end", "#1B4F72"),
    new WallPaper(imgSrc["image2"], quotes["text2"], "center", "center", "#007bff"),
    new WallPaper(imgSrc["image3"], quotes["text3"], "end", "start", "#ecf0f1")
];

wallpapers.forEach(wallpaper => wallpaper.set("target"));

