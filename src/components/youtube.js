import YouTubePlayer from 'youtube-player';
import idMixin from 'bootstrap-vue/src/mixins/id';

export default {
    mixins: [idMixin],
    render(h) {
        const youtubeContainerId = this.safeId();

        const youtube = h(
            'div', {
                class: 'youtube-player',
                attrs: {
                    id: youtubeContainerId
                }
            }
        );

        const embed = h(
            'div', {
                class: 'embed-responsive embed-responsive-16by9'
            }, [youtube]
        );

        const modal = h(
            'b-modal', {
                class: 'c-modal--youtube',
                attrs: {
                    id: this.trigger,
                    centered: true,
                    lazy: true,
                    hideFooter: true,
                    noFade: true,
                    titleTag: ''
                },
                on: {
                    shown: () => {
                        let player = YouTubePlayer(youtubeContainerId);

                        player.loadVideoById(this.videoId);
                        player.playVideo();
                    }
                }
            }, [embed]
        );

        return modal;
    },
    props: {
        trigger: {
            type: String,
            required: true
        },
        videoId: {
            type: String,
            required: true
        }
    }
};
