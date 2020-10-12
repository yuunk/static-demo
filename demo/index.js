class OpacitySlider {

    constructor(next, current, images) {
        this.next = next;
        this.current = current;
        this.images = images;
        this.counter = 1;
        this.currentIndex = 0;
        this.nextIndex = 1;
        this.initSlideImage();
    }

    initSlideImage() {
        current.style.backgroundImage = 'url(' + images[0] + ')';
        next.style.backgroundImage = 'url(' + images[1] + ')';
    }

    startSlider() {


        setInterval(() => {

            let promise = new Promise((resolve, reject) => {

                let opacityTransition = setInterval(() => {

                    const opacity = 1;

                    this.counter++;
                    this.current.style.opacity = opacity - this.counter * 0.01;

                    if (this.counter === 100) {
                        this.resetCounter();
                        clearInterval(opacityTransition);
                        resolve();
                    }

                }, 10);

            });

            promise.then(() => {

                return new Promise((resolve, reject) => {

                    setTimeout(() => {
                        this.changeBothImage();
                        this.updateIndex();
                        this.resetOpacity();
                        resolve();
                    }, 500);

                });

            }).then(() => {
                this.changeImage();
            }).catch(() => {
                console.log('fail');
            });

        }, 4000);

    }

    resetCounter() {
        this.counter = 1;
    }

    resetOpacity() {
        this.current.style.opacity = 1;
    }

    changeBothImage() {
        current.style.backgroundImage = 'url(' + images[this.nextIndex] + ')';
        next.style.backgroundImage = 'url(' + images[this.nextIndex] + ')';
    }

    updateIndex() {
        this.currentIndex = this.nextIndex;
        if (this.nextIndex === this.images.length - 1) {
            this.nextIndex = 0;
        } else {
            this.nextIndex++;
        }
    }

    changeImage() {
        next.style.backgroundImage = 'url(' + images[this.nextIndex] + ')';
    }

}

const next = document.getElementById('slide_next');
const current = document.getElementById('slide_current');
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

const slider = new OpacitySlider(next, current, images);
slider.startSlider();