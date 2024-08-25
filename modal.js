// 모달 팝업 열기
document.querySelector('.write-recommendation').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// 모달 팝업 닫기
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

// "회원가입 하기!" 버튼 클릭 시 본인인증 화면으로 이동
document.getElementById('confirm-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('verification-container').style.display = 'block';
});
