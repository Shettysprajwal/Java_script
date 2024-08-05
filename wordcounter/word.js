document.getElementById('textInput').addEventListener('input', function() {
    let text = this.value;
    let wordCount = countWords(text);
    let specialCharCount = countSpecialCharacters(text);
    let vowelCount = countVowels(text);
    let consonantCount = countConsonants(text);
    
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('specialCharCount').textContent = specialCharCount;
    document.getElementById('vowelCount').textContent = vowelCount;
    document.getElementById('consonantCount').textContent = consonantCount;
});

function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function countSpecialCharacters(text) {
    return text.replace(/[a-zA-Z0-9\s]/g, '').length;
}

function countVowels(text) {
    return text.match(/[aeiouAEIOU]/g)?.length || 0;
}

function countConsonants(text) {
    return text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
}
