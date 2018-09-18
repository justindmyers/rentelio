import lazyImg from '@/directives/lazy-img';

export default {
    directives: {
        'lazy-img': lazyImg
    },
    render(h) {
        const image = h(
            'img', {
                attrs: {
                    src: this.placeholder,
                    alt: this.alt
                },
                directives: [{
                    name: 'lazy-img',
                    value: this.src
                }]
            }
        );

        return image;
    },
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        }
    }
};
