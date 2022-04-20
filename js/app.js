var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBitsNRZLevel: [],
        encodedBitsNRZMark: [],
        encodedBitsNRZSpace: [],
        encodedBitsRZ: [],
        encodedBitsBiphaseLevel: [],
        encodedBitsBiphaseMark: [],
        encodedBitsBiphaseSpace: [],
        encodedBitsBiphaseLevelDiff: [],
        encodedBitsBiphaseDelay: [],
        encodedBitsAMI: [],
        encodedBitsHDB3: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBitsBiphaseLevel = getBiphaseLevelEncoding(this.bits);
            this.encodedBitsBiphaseMark = getBiphaseMarkEncoding(this.bits);
            this.encodedBitsBiphaseSpace = getBiphaseSpaceEncoding(this.bits);
            this.encodedBitsBiphaseLevelDiff = getBiphaseLevelDiffEncoding(this.bits);
            this.encodedBitsBiphaseDelay = getBiphaseDelayEncoding(this.bits);
            this.encodedBitsAMI = getAMIEncoding(this.bits);
            this.encodedBitsHDB3 = getHDB3Encoding(this.bits);
            this.encodedBitsNRZLevel = getNRZLevelEncoding(this.bits);
            this.encodedBitsNRZMark = getNRZMarkEncoding(this.bits);
            this.encodedBitsNRZSpace = getNRZSpaceEncoding(this.bits);
            this.encodedBitsRZ = getRZEncoding(this.bits);
        }
    }
})


