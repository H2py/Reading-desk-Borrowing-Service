// 휴대폰 번호 입력 시 버튼 활성화
document.getElementById('phone-number').addEventListener('input', function() {
    const phoneNumberInput = this.value;
    const getCodeBtn = document.getElementById('get-code-btn');
    
    if (phoneNumberInput.length >= 7) {
        getCodeBtn.classList.remove('inactive');
        getCodeBtn.classList.add('active');
    } else {
        getCodeBtn.classList.remove('active');
        getCodeBtn.classList.add('inactive');
    }
});

// 인증번호 받기 버튼 클릭 시 동작
document.getElementById('get-code-btn').addEventListener('click', function() {
    if (!this.classList.contains('inactive')) {
        alert("인증번호가 전송되었습니다!");
    }
});

// 뒤로 가기 버튼 클릭 시 이전 화면으로 이동
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('verification-container').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'block';
});
// "1분만에 독서대 빌리기" 버튼 클릭 시 본인인증 화면으로 이동
document.getElementById('rent-button').addEventListener('click', function() {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('verification-container').style.display = 'block';
});