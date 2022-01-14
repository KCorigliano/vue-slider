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
        indexTiming: function(){
            setInterval(() => this.currentIndex++, 3000);
        },
    }
})