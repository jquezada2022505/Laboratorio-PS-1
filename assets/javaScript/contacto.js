const userAvatar = document.getElementById('userAvatar');
const userInfo = document.getElementById('userInfo');

userAvatar.addEventListener('click', function() {
    userInfo.classList.toggle('active');
});