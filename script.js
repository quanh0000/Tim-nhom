
document.getElementById('startGameBtn').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
});

document.getElementById('submitAnswerBtn').addEventListener('click', function() {
    const selectedCharacter = document.querySelector('input[name="character"]:checked');
    if (selectedCharacter) {
        const character = selectedCharacter.value;
        document.getElementById('questionnaire').style.display = 'none';
        document.getElementById('groupSection').style.display = 'block';
        document.getElementById('groupName').textContent = `Bạn đã vào nhóm: ${character}`;

        // Logic chia nhóm (sẽ tùy chỉnh thêm nếu muốn)
        groupPlayer(character);
    } else {
        alert("Hãy chọn một nhân vật!");
    }
});

let isDrawing = false;
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});

document.getElementById('submitDrawingBtn').addEventListener('click', function() {
    alert("Bức vẽ đã được nộp! Chúc mừng bạn!");
    // Thêm logic chấm điểm ở đây nếu cần
});

function groupPlayer(character) {
    // Đây là phần chia nhóm (có thể nâng cấp để xử lý lưu trữ thông tin về người chơi và nhóm)
    console.log("Người chơi đã chọn nhóm:", character);
}
