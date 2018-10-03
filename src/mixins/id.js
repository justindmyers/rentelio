import uniqid from 'uniqid';

export default {
    props: {
        id: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            localId_: null,
            uniqueId: uniqid()
        };
    },
    mounted() {
        if(!this.$isServer && !this.id && typeof this._uid !== 'undefined') {
            this.localId_ = `${this._uid}`;
        }
    },
    methods: {
        safeId(suffix = '') {
            const id = this.id || this.localId_ || null;

            if(!id) {
                return null;
            }

            suffix = String(suffix).replace(/\s+/g, '_');
            return suffix ? `${suffix}-${this.uniqueId}-${id}` : id + `-${this.uniqueId}`;
        }
    }
};
