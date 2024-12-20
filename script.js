function showSignup() {
    const authSection = document.getElementById('auth-section');
    authSection.innerHTML = `
        <h3>Sign Up</h3>
        <form id="signup-form">
            <input type="text" id="name" placeholder="Name" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="#" onclick="showLogin()">Login</a></p>
    `;

    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        showProfile(email);
    });
}

function showLogin() {
    const authSection = document.getElementById('auth-section');
    authSection.innerHTML = `
        <h3>Login</h3>
        <form id="login-form">
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#" onclick="showSignup()">Sign Up</a></p>
    `;

    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        showProfile(email);
    });
}

function showProfile(email) {
    document.querySelector('.hero-content').style.display = 'none';
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    document.getElementById('user-email').innerText = `Logged in as: ${email}`;
}

// Initialize Login Form
showLogin();
