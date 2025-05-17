const kodeMorseKeAlfabet = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
    '...--': '3', '....-': '4', '.....': '5', '-....': '6',
    '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.',
    '--..--': ',', '..--..': '?', '.----.': '\'', '-.-.--': '!',
    '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
    '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
    '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$',
    '.--.-.': '@', '...---...': 'SOS'
};

function terjemahkan() {
    const kodeMorseInput = document.getElementById('inputKodeMorse').value.trim();
    const hasilArea = document.getElementById('output');
    const kodeArray = kodeMorseInput.split(' ');
    let hasil = '';

    for (const kode of kodeArray) {
        if (kodeMorseKeAlfabet[kode]) {
            hasil += kodeMorseKeAlfabet[kode];
        } else if (kode === '') {
            hasil += ' ';
        }else {
            hasil += 'Kode tidak dapat diterjemahkan'; 
        }
    }

    hasilArea.value = hasil;
}

function hapus() {
    const keluaran = document.getElementById('output');
    const input = document.getElementById('inputKodeMorse');
    keluaran.value = '';
    input.value = '';
}