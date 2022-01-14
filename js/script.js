new Vue({
    el: '#app',
    data: {
        currentIndex:0,
        img: [
            'img/wallpaper1.jpg',
            'img/wallpaper2.jpg',
            'img/wallpaper3.jpg',
            'img/wallpaper4.jpg',
        ],
        stopplay: this.interval,
        statusAutoPlay: false,
    },
    methods:{
        nextImg: function(){
            this.currentIndex++;
            if (this.currentIndex>this.img.length-1){
                this.currentIndex=0;
            }
        },
        prevImg: function(){
            this.currentIndex--;
            if (this.currentIndex<0){
                this.currentIndex=this.img.length-1;
            }
        },
        autoplay: function(){
            this.interval = setInterval(() => this.nextImg(), 3000);
            this.statusAutoPlay = true;
        },
        stop: function(){
            clearInterval(this.interval);
            this.statusAutoPlay = false;
        }
    }
})