<template>
    <section>
        <div id="overlay" class="overlay">
            <h3 class="multimedia__title">Мы в соц сетях</h3>
        <a class="multimedia__link" href="https://vk.com/club43732794" target="_blank">Лукоморье.Мастерская по дереву</a>
        </div>
        <div class="multimedia">
            <!-- Первое видео -->
            <div class="video-container" @click="toggleEnlargeVideo('myVideo1')">
                <video ref="myVideo1" id="myVideo1" class="multimedia__img1 multimedia__video" autoplay loop :class="{ 'enlarged': enlargedVideoId === 'myVideo1' }">
                    <source :src="videos[0].src" type="video/mp4">
                    Ваш браузер не поддерживает элемент <code>video</code>.
                </video>
                <button @click.stop="togglePlay('myVideo1')">
                    {{ playingStates.myVideo1 ? 'Стоп' : 'Воспроизвести' }}
                </button>
            </div>
            <!-- Блок с фотографиями -->
            <div class="center-content">
                <img class="main-photo multimedia__img1" :src="img1glav" alt="" @click="toggleEnlarge('img1glav')" :class="{ 'enlarged': enlargedImgId === 'img1glav' }">
                <div class="three-photos">
                    <img class="multimedia__img multimedia__img1" :src="img1" alt="" @click="toggleEnlarge('img1')" :class="{ 'enlarged': enlargedImgId === 'img1' }">
                    <img class="multimedia__img multimedia__img1" :src="img2" alt="" @click="toggleEnlarge('img2')" :class="{ 'enlarged': enlargedImgId === 'img2' }">
                    <img class="multimedia__img multimedia__img1 multimedia__img__shadow" :src="img3" alt="" @click="toggleEnlarge('img3')" :class="{ 'enlarged': enlargedImgId === 'img3' }">
                </div>
            </div>

            <!-- Второе видео -->
            <div class="video-container" @click="toggleEnlargeVideo('myVideo2')">
                <video ref="myVideo2" id="myVideo2" class="multimedia__img1 multimedia__video" autoplay loop muted :class="{ 'enlarged': enlargedVideoId === 'myVideo2' }">
                    <source :src="videos[1].src" type="video/mp4">
                    Ваш браузер не поддерживает элемент <code>video</code>.
                </video>
                <button @click.stop="togglePlay('myVideo2')">
                    {{ playingStates.myVideo2 ? 'Стоп' : 'Воспроизвести' }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            playingStates: {
                myVideo1: true,
                myVideo2: true,
            },
            enlargedImgId: null,
            enlargedVideoId: null,
            img1: require("@/assets/img/media_content/WVnULaSURsI.jpg"),
            img2: require("@/assets/img/media_content/7Hjfip1pTwU.jpg"),
            img3: require("@/assets/img/media_content/iaOc5KZOvVE.jpg"),
            img1glav: require("@/assets/img/media_content/15r9QvB8ZK8.jpg"),
            videos: [
                { id: 'myVideo1', src: require("@/assets/img/media_content/Clip by Anna Shalatonova (1).mp4"), isPlaying: false },
                { id: 'myVideo2', src: require("@/assets/img/media_content/2.mp4"), isPlaying: false },
            ],
        };
    },
    methods: {
        togglePlay(videoId) {
            const videoElem = this.$refs[videoId];
            if (videoElem) {
                if (videoElem.paused) {
                    videoElem.play();
                    this.playingStates[videoId] = true;
                } else {
                    videoElem.pause();
                    this.playingStates[videoId] = false;
                }
            } else {
                console.error('Элемент видео не найден:', videoId);
            }
        },
        toggleEnlarge(imgId) {
            this.enlargedImgId = this.enlargedImgId === imgId ? null : imgId;
        },
        toggleEnlargeVideo(videoId) {
            this.enlargedVideoId = this.enlargedVideoId === videoId ? null : videoId;
        },
    },
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/media_content/media_content';
</style>
